import { renderToast } from './lib.js';
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js';
import { Place, searchFormHomyData, searchHomyData } from './searchHomyData.js';

export interface Provider {
  name: string;
  createSearchProviderForm(): SearchForm;
  find(search: SearchForm): Place[] | Error;
  book(): void;
  parseSearchProviderResult(result: Place[]): Place[];
}

export interface SearchForm {
  city: string;
  dateEntry: number;
  dateDeparture: number;
  maxPrice: number;
  coordinates?: string;
}

export let searchResult: Place[] = [];

export function providersSearch(event: Event) {
  event.preventDefault();

  const homy: HTMLInputElement = document.querySelector('input[value="homy"]');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const flatRent: HTMLInputElement = document.querySelector('input[value="flat-rent"]');

  const providers: Provider[] = []; 

  if (homy.checked) {
    providers.push({
      name: 'Homy',
      createSearchProviderForm: searchFormHomyData,
      find: searchHomyData,
      book: () => {console.log('Booking in Homy Provider');},
      parseSearchProviderResult: result => result 
    });
  }
  /* 
  if (flatRent.checked) {
    providers.push({
      name: 'Flat Rent',
      createSearchProviderForm: () => {console.log('Creating serch form for Flat Rent provider...');},
      find: () => {console.log('Searching in Flat Rent Provider');},
      book: () => {console.log('Booking in Flat Rent Provider');},
      parseSearchProviderResult: () => {console.log('Parsing result of Flat Rent provider...');}
    });
  }
  */

  if (!providers.length) {
    renderToast(
      {text: 'Выберите хотя бы одного провайдера', type: 'Error'},
      {name: 'Good luck!', handler:   null}
    );
    return;
  }
  
  providers.forEach(provider => {
    const form = provider.createSearchProviderForm();
    const result = provider.find(form);
    if (result instanceof Error) {
      renderEmptyOrErrorSearchBlock(`Ошибка провайдера ${provider.name}: ${result.message}`);
      throw new Error(result.message);
    } 
    const parseResult = provider.parseSearchProviderResult(result);
    searchResult = searchResult.concat(parseResult); 
    console.log(searchResult);
  });

  renderSearchResultsBlock(searchResult);
}
