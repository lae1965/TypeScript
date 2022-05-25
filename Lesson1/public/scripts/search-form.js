import { renderBlock } from './lib.js';
function setLeaderZero(str) {
    return str.length === 2 ? str : `0${str}`;
}
function parseDateToString(date) {
    return `${date.getFullYear().toString()}-${setLeaderZero((date.getMonth() + 1).toString())}-${setLeaderZero(date.getDate().toString())}`;
}
export function renderSearchFormBlock(dateEntryString = Date.now() + (24 * 3600 * 1000), dateDepartureString = Date.now() + (3 * 24 * 3600 * 1000)) {
    const dateEntry = new Date(dateEntryString);
    dateEntry.setHours(0, 0, 0, 0); // Обнулили время
    const minDateEntry = new Date();
    minDateEntry.setHours(0, 0, 0, 0); // Обнулили время
    const maxDateEntry = new Date(minDateEntry);
    maxDateEntry.setMonth(maxDateEntry.getMonth() + 2, 0); // Последний день следующего месяца
    const dateDeparture = new Date(dateDepartureString);
    const minDateDeparture = new Date(dateEntry);
    minDateDeparture.setDate(minDateDeparture.getDate() + 1); // Следующий за датой заезда день
    const maxDateDeparture = new Date(minDateDeparture);
    maxDateDeparture.setMonth(maxDateDeparture.getMonth() + 2, 0); // Последний день следующего месяца
    renderBlock('search-form-block', `
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
              value="24-01-1965" 
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
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxTQUFTLGFBQWEsQ0FBQyxHQUFXO0lBQ2hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFVO0lBQ25DLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDM0ksQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsa0JBQW1DLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQ2xFLHNCQUF1QyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFFMUUsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFpQyxpQkFBaUI7SUFDakYsTUFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQThCLGlCQUFpQjtJQUNqRixNQUFNLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBVSxtQ0FBbUM7SUFFbkcsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxNQUFNLGdCQUFnQixHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFPLGlDQUFpQztJQUNqRyxNQUFNLGdCQUFnQixHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLG1DQUFtQztJQUVuRyxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkE2Qm1CLGlCQUFpQixDQUFDLGFBQWEsQ0FBQztxQkFDbEMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7cUJBQ25DLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7OztLQWNuRCxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5cbmZ1bmN0aW9uIHNldExlYWRlclplcm8oc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMiA/IHN0ciA6IGAwJHtzdHJ9YDtcbn1cblxuZnVuY3Rpb24gcGFyc2VEYXRlVG9TdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKX0tJHtzZXRMZWFkZXJaZXJvKChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpKX0tJHtzZXRMZWFkZXJaZXJvKGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soXG4gIGRhdGVFbnRyeVN0cmluZzogc3RyaW5nIHwgbnVtYmVyID0gRGF0ZS5ub3coKSArICgyNCAqIDM2MDAgKiAxMDAwKSxcbiAgZGF0ZURlcGFydHVyZVN0cmluZzogc3RyaW5nIHwgbnVtYmVyID0gRGF0ZS5ub3coKSArICgzICogMjQgKiAzNjAwICogMTAwMClcbikge1xuICBjb25zdCBkYXRlRW50cnkgPSBuZXcgRGF0ZShkYXRlRW50cnlTdHJpbmcpO1xuICBkYXRlRW50cnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J7QsdC90YPQu9C40LvQuCDQstGA0LXQvNGPXG4gIGNvbnN0IG1pbkRhdGVFbnRyeSA9IG5ldyBEYXRlKCk7XG4gIG1pbkRhdGVFbnRyeS5zZXRIb3VycygwLCAwLCAwLCAwKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDQntCx0L3Rg9C70LjQu9C4INCy0YDQtdC80Y9cbiAgY29uc3QgbWF4RGF0ZUVudHJ5ID0gbmV3IERhdGUobWluRGF0ZUVudHJ5KTtcbiAgbWF4RGF0ZUVudHJ5LnNldE1vbnRoKG1heERhdGVFbnRyeS5nZXRNb250aCgpICsgMiwgMCk7ICAgICAgICAgIC8vINCf0L7RgdC70LXQtNC90LjQuSDQtNC10L3RjCDRgdC70LXQtNGD0Y7RidC10LPQviDQvNC10YHRj9GG0LBcblxuICBjb25zdCBkYXRlRGVwYXJ0dXJlID0gbmV3IERhdGUoZGF0ZURlcGFydHVyZVN0cmluZyk7XG4gIGNvbnN0IG1pbkRhdGVEZXBhcnR1cmUgPSBuZXcgRGF0ZShkYXRlRW50cnkpO1xuICBtaW5EYXRlRGVwYXJ0dXJlLnNldERhdGUobWluRGF0ZURlcGFydHVyZS5nZXREYXRlKCkgKyAxKTsgICAgICAgLy8g0KHQu9C10LTRg9GO0YnQuNC5INC30LAg0LTQsNGC0L7QuSDQt9Cw0LXQt9C00LAg0LTQtdC90YxcbiAgY29uc3QgbWF4RGF0ZURlcGFydHVyZSA9IG5ldyBEYXRlKG1pbkRhdGVEZXBhcnR1cmUpO1xuICBtYXhEYXRlRGVwYXJ0dXJlLnNldE1vbnRoKG1heERhdGVEZXBhcnR1cmUuZ2V0TW9udGgoKSArIDIsIDApOyAgLy8g0J/QvtGB0LvQtdC00L3QuNC5INC00LXQvdGMINGB0LvQtdC00YPRjtGJ0LXQs9C+INC80LXRgdGP0YbQsFxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgaWQ9XCJjaGVjay1pbi1kYXRlXCIgXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXG4gICAgICAgICAgICAgIHZhbHVlPVwiMjQtMDEtMTk2NVwiIFxuICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tpblwiIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+0JTQsNGC0LAg0LLRi9C10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIFxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiIFxuICAgICAgICAgICAgICB2YWx1ZT1cIiR7cGFyc2VEYXRlVG9TdHJpbmcoZGF0ZURlcGFydHVyZSl9XCIgXG4gICAgICAgICAgICAgIG1pbj1cIiR7cGFyc2VEYXRlVG9TdHJpbmcobWluRGF0ZURlcGFydHVyZSl9XCIgXG4gICAgICAgICAgICAgIG1heD1cIiR7cGFyc2VEYXRlVG9TdHJpbmcobWF4RGF0ZURlcGFydHVyZSl9XCIgXG4gICAgICAgICAgICAgIG5hbWU9XCJjaGVja291dFwiIFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm1heC1wcmljZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCJcIiBuYW1lPVwicHJpY2VcIiBjbGFzcz1cIm1heC1wcmljZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+PGJ1dHRvbj7QndCw0LnRgtC4PC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9maWVsZHNldD5cbiAgICA8L2Zvcm0+XG4gICAgYFxuICApO1xufVxuIl19