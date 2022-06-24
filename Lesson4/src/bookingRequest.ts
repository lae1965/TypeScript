import { renderToast } from './lib.js';
import { dateToNumber } from './util.js';
import { Place } from './searchHomyData.js';

export function bookingRequest(event: Event) {
  /*
  if (Date.now() - timeOfFind > 30000) {
    renderToast(
      {text: 'Время ожидания истекло, необходимо обновить запрос', type: 'timeLimitIsEmpty'},
      {name: 'Ok!', handler: null}
    )
    return;
  }
  */
  fetch(`http://127.0.0.1:3030/places/${(event.target as Element).closest('.result').getAttribute('data-id')}?checkInDate=${dateToNumber('check-in-date')}&checkOutDate=${dateToNumber('check-out-date')}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }    
    }
  ).then<Place>(response => {
    if (!response.ok) {
      renderToast(
        {text: `Error: ${response.status}`, type: 'Error'},
        {name: 'Hit any key', handler: null}  
      );
      throw new Error(response.status.toString());
    } 
    return response.json();
  }).then(data => {
    console.log(data);
    renderToast(
      {text: `Номер в отеле "${data.name}" успешно забронирован`, type: 'success'},
      {name: 'Ok!', handler: null}
    )
  }).catch(error => {
    renderToast(
      {text: error.message, type: 'Error'},
      {name: 'Нажмите любую клавишу', handler: null}  
    );
  });
}
