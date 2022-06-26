import { getInputValue, dateToNumber } from './util.js';
import { SearchForm, searchResult, SearchResult } from './providersSearch.js';
import { renderEmptyOrErrorSearchBlock } from './search-results.js';

export interface Place {
  id: number | string;
  image: string;
  name: string;
  description: string;
  remoteness: number;
  bookedDates: number[];
  price: number;
}

export function searchFormHomyData(): SearchForm {
  return {
    coordinates: getInputValue('coordinates'),
    city: getInputValue('city'),
    dateEntry: dateToNumber('check-in-date'),
    dateDeparture: dateToNumber('check-out-date'),
    maxPrice: + getInputValue('max-price')
  };
}

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
    throw error.message;
  }
}

export function parseSearchHomyResult(result: Place[]): SearchResult[] {
  let parseResult: SearchResult[] = [];
  result.forEach((resItem, index) => {
    parseResult.push({ uni_id: `Homy_${resItem.id}`, ...resItem });
  });
  return parseResult;
}
