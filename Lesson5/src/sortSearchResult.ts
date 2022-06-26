import { searchResult } from './providersSearch.js';
import { renderSearchResultsBlock } from './search-results.js';

export enum SortMethod {
  fromCheapToExpensive = 1,
  fromExpensiveToCheap,
  fromNearToFar
}

export function sortSearchResult(event: Event) {

  const sortOption = (event.target as HTMLSelectElement).selectedIndex;
  switch (sortOption) {
    case SortMethod.fromCheapToExpensive:
      searchResult.sort((a, b) => a.price - b.price);
      break;
    case SortMethod.fromExpensiveToCheap:
      searchResult.sort((a, b) => b.price - a.price);
      break;
    case SortMethod.fromNearToFar:
      searchResult.sort((a, b) => a.remoteness - b.remoteness);
      break;
    default:
      return;
  }
  renderSearchResultsBlock(searchResult, sortOption);
}
