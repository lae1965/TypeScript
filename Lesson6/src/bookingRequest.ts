import { bookingFlatRentRequest } from './bookingFlatRentRequest.js';
import { bookingHomyRequest } from './bookingHomyRequest.js';
import { renderToast } from './lib.js';
import { timeOfSearch } from './providersSearch.js';
import { Place } from './searchHomyData.js';
import { Flat } from './flat-rent-sdk.js';

export async function bookingRequest(event: Event) {
  if (Date.now() - timeOfSearch > 30000) {
    renderToast(
      { text: 'Время ожидания истекло, необходимо обновить запрос', type: 'timeLimitIsEmpty' },
      { name: 'Ok!' }
    )
    return;
  }

  const provider_id = (event.target as Element).closest('.result')?.getAttribute('data-id')?.split('_');
  if (!provider_id) return;

  const [provider, id] = provider_id;
  if (!provider || !id) return;
  let hotelName: string;

  let result: Place | Flat | Error | null;
  switch (provider) {
    case 'Homy':
      result = await bookingHomyRequest(id);
      hotelName = (result as Place).name;
      break;
    case 'FlatRent':
      result = await bookingFlatRentRequest(id);
      hotelName = (result as Flat).title;
      break;
    default:
      renderToast(
        { text: `База провайдера "${provider}" отсутствует`, type: 'timeLimitIsEmpty' }
      );
      return;
  }
  console.log(result);
  if (result instanceof Error) {
    renderToast(
      { text: result.message, type: 'Error' },
      { name: 'Нажмите любую клавишу' }
    );
  } else {
    renderToast(
      { text: `Номер в отеле "${hotelName}" успешно забронирован`, type: 'success' },
      { name: 'Ok!' }
    );
  }
}
