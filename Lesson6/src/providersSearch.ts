import { renderToast } from './lib.js';
import { renderEmptyOrErrorSearchBlock, renderSearchResultsBlock } from './search-results.js';
import { parseSearchHomyResult, Place, searchFormHomyData, searchHomyData } from './searchHomyData.js';
import { Flat } from './flat-rent-sdk.js';
import { parseSearchFlatRentResult, searchFlatRentData, searchFormFlatRentData } from './searchFlatRentData.js';

export interface Provider {
  name: string;
  createSearchProviderForm(): SearchForm;
  find(search: SearchForm): Promise<Place[] | Flat[] | Error>;
  parseSearchProviderResult(result: Place[] | Flat[]): SearchResult[];
}

export interface SearchForm {
  city: string;
  dateEntry: number;
  dateDeparture: number;
  maxPrice: number;
  coordinates?: string;
}

export interface SearchResult extends Place {
  uni_id: string;
}

export let searchResult: SearchResult[] = [], timeOfSearch: number;

export function providersSearch(event: Event) {
  event.preventDefault();

  timeOfSearch = Date.now();

  const homy: HTMLInputElement | null = document.querySelector('input[value="homy"]');
  const flatRent: HTMLInputElement | null = document.querySelector('input[value="flat-rent"]');

  const providers: Provider[] = [];

  if (homy?.checked) {
    providers.push({
      name: 'Homy',
      createSearchProviderForm: searchFormHomyData,
      find: searchHomyData,
      parseSearchProviderResult: parseSearchHomyResult
    });
  }

  if (flatRent?.checked) {
    providers.push({
      name: 'Flat Rent',
      createSearchProviderForm: searchFormFlatRentData,
      find: searchFlatRentData,
      parseSearchProviderResult: parseSearchFlatRentResult
    });
  }

  if (!providers.length) {
    renderToast(
      { text: 'Выберите хотя бы одного провайдера', type: 'Error' },
      { name: 'Good luck!' }
    );
    return;
  }

  providersFilling(providers);

}

async function providersFilling(providers: Provider[]) {
  let searchRes: SearchResult[] = [];
  let i = 0;

  while (1) {
    if (providers[i]) {
      const parseResult = await providerFilling(providers[i]!);
      searchRes = searchRes.concat(parseResult);
    }
    i++;
    if (i === providers.length) {
      searchResult = [...searchRes];
      renderSearchResultsBlock(searchResult);
      break;
    }
  }
}

async function providerFilling(provider: Provider): Promise<SearchResult[]> {
  const form = provider.createSearchProviderForm();
  const result = await provider.find(form);
  if (result instanceof Error) {
    renderEmptyOrErrorSearchBlock(`Ошибка провайдера ${provider.name}: ${result.message}`);
    throw new Error(result.message);
  }
  return provider.parseSearchProviderResult(result);
}
