import { Flat, FlatRentSdk } from './flat-rent-sdk.js';
import { SearchForm, SearchResult } from './providersSearch.js';
import { getInputValue, dateToNumber } from './util.js';

export function searchFormFlatRentData(): SearchForm {
  return {
    city: getInputValue('city'),
    dateEntry: dateToNumber('check-in-date'),
    dateDeparture: dateToNumber('check-out-date'),
    maxPrice: + (getInputValue('max-price'))
  };
}

let numberOfNights: number;

export async function searchFlatRentData(search: SearchForm): Promise<Error | Flat[]> {
  const flatRentSdk = new FlatRentSdk();
  const checkInDate = new Date(search.dateEntry);
  const checkOutDate = new Date(search.dateDeparture);

  numberOfNights = flatRentSdk._calculateDifferenceInDays(checkInDate, checkOutDate);

  const flats = await flatRentSdk.search({
    city: search.city,
    checkInDate,
    checkOutDate,
    priceLimit: search.maxPrice
  });
  return flats;
}

export function parseSearchFlatRentResult(searchResult: Flat[]): SearchResult[] {
  let parseResult: SearchResult[] = [];

  searchResult.forEach(itemResult => {
    parseResult.push({
      uni_id: `FlatRent_${itemResult.id}`,
      id: itemResult.id,
      image: itemResult.photos[0] ? itemResult.photos[0] : '',
      name: itemResult.title,
      description: itemResult.details,
      bookedDates: itemResult.bookedDates,
      price: itemResult.totalPrice! / numberOfNights,
      remoteness: getRemoteness(itemResult.coordinates)
    });
  });

  return parseResult;
}

function getRemoteness([X1, Y1]: number[]): number {
  const X = 59.9386, Y = 30.3141;

  return Math.floor(Math.sqrt((X - X1!) ** 2 + (Y - Y1!) ** 2) * 1000) / 10;
}
