import { getInputValue, dateToNumber } from './util.js';
import { SearchForm } from './providersSearch.js';
import { renderEmptyOrErrorSearchBlock } from './search-results.js';

export interface Place {
  id: number;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
}

export function searchFormHomyData (): SearchForm {
  return {
    coordinates: getInputValue('coordinates'),
    city: getInputValue('city'),
    dateEntry: dateToNumber('check-in-date'),
    dateDeparture: dateToNumber('check-out-date'),
    maxPrice: + getInputValue('max-price')
  };
}

export function searchHomyData(search: SearchForm): Error | Place[] {
  let searchData: Place[] | Error;
  fetch(`http://127.0.0.1:3030/places?coordinates=${search.coordinates}&checkInDate=${search.dateEntry}&checkOutDate=${search.dateDeparture}&maxPrice=${search.maxPrice}`)
    .then<Place[]>(response => { 
      if (!response.ok) {
        renderEmptyOrErrorSearchBlock(`Error: ${response.status}`);
        searchData = new Error(response.statusText)
        throw searchData;
      }
      return response.json();
    })
    .then(result => {
      searchData = result;
      return result;
    })
    .catch (error => {
      searchData = error;
      return error.message;
    });
  return searchData;
}

/*
export async function searchHomyData(search: SearchForm): Promise<Error | Place[]> {
  try {
    const response = await fetch(`http://127.0.0.1:3030/places?coordinates=${search.coordinates}&checkInDate=${search.dateEntry}&checkOutDate=${search.dateDeparture}&maxPrice=${search.maxPrice}`);
    if (!response.ok) {
      renderEmptyOrErrorSearchBlock(`Error: ${response.status}`);
      throw new Error();
    }
    const result: Place[] = await response.json();
    const data = result;
    return data;
  } catch (error) {
    return error.message;
  }
  */
