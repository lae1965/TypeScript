import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js';

interface SearchFormData {
  city: string;
  coordinates: string;
  dateEntry: number;
  dateDeparture: number;
  maxPrice: number;
}

export interface Place {
  id: number;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
}

export let places: Place[];
export let timeOfFind: number;

export function dateToNumber(id: string): number {
  return Date.parse(new Date(getInputValue(id)).toString());
}

function getInputValue(id: string): string {

  return (document.getElementById(id) as HTMLInputElement).value;
}

function searchData(search: SearchFormData): void {
  fetch(`http://127.0.0.1:3030/places?coordinates=${search.coordinates}&checkInDate=${search.dateEntry}&checkOutDate=${search.dateDeparture}&maxPrice=${search.maxPrice}`)
    .then<Place[]>(response => {
      if (!response.ok) {
        renderEmptyOrErrorSearchBlock(`Error: ${response.status}`);
        throw new Error();
      }
      return response.json();
    }).then(data => {
      console.log(data);
      places = data;
      renderSearchResultsBlock();
    }).catch(error => {
      renderEmptyOrErrorSearchBlock(error.message);
    });
}

export function searchFormData(event: Event): void {

  event.preventDefault();
  timeOfFind = Date.now();

  searchData({
    coordinates: getInputValue('coordinates'),
    city: getInputValue('city'),
    dateEntry: dateToNumber('check-in-date'),
    dateDeparture: dateToNumber('check-out-date'),
    maxPrice: + getInputValue('max-price')
  });
}
