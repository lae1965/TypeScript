import { renderBlock } from './lib.js';

function setLeaderZero(str: string): string {
  return str.length === 2 ? str : `0${str}`;
}

function parseDateToString(date: Date): string {
  return `${date.getFullYear().toString()}-${setLeaderZero((date.getMonth() + 1).toString())}-${setLeaderZero(date.getDate().toString())}`;
}

export function renderSearchFormBlock(
  dateEntryString: string | number = Date.now() + (24 * 3600 * 1000),
  dateDepartureString: string | number = Date.now() + (3 * 24 * 3600 * 1000)
) {
  const dateEntry = new Date(dateEntryString);
  dateEntry.setHours(0, 0, 0, 0);                                 // Обнулили время
  const minDateEntry = new Date();
  minDateEntry.setHours(0, 0, 0, 0);                              // Обнулили время
  const maxDateEntry = new Date(minDateEntry);
  maxDateEntry.setMonth(maxDateEntry.getMonth() + 2, 0);          // Последний день следующего месяца

  const dateDeparture = new Date(dateDepartureString);
  const minDateDeparture = new Date(dateEntry);
  minDateDeparture.setDate(minDateDeparture.getDate() + 1);       // Следующий за датой заезда день
  const maxDateDeparture = new Date(minDateDeparture);
  maxDateDeparture.setMonth(maxDateDeparture.getMonth() + 2, 0);  // Последний день следующего месяца

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input 
              id="check-in-date" 
              type="date" 
              value="${parseDateToString(dateEntry)}" 
              min="${parseDateToString(minDateEntry)}" 
              max="${parseDateToString(maxDateEntry)}" 
              name="checkin" 
            />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input 
              id="check-out-date" 
              type="date" 
              value="${parseDateToString(dateDeparture)}" 
              min="${parseDateToString(minDateDeparture)}" 
              max="${parseDateToString(maxDateDeparture)}" 
              name="checkout" 
            />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  );
}
