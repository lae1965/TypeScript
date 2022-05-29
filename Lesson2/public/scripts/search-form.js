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
            <div><button id="search">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUd2QyxTQUFTLGFBQWEsQ0FBQyxHQUFXO0lBQ2hDLE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxJQUFVO0lBQ25DLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDM0ksQ0FBQztBQUVELE1BQU0sVUFBVSxxQkFBcUIsQ0FDbkMsa0JBQW1DLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQ2xFLHNCQUF1QyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7SUFFMUUsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFpQyxpQkFBaUI7SUFDakYsTUFBTSxZQUFZLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztJQUNoQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQThCLGlCQUFpQjtJQUNqRixNQUFNLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QyxZQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBVSxtQ0FBbUM7SUFFbkcsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNwRCxNQUFNLGdCQUFnQixHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzdDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFPLGlDQUFpQztJQUNqRyxNQUFNLGdCQUFnQixHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFFLG1DQUFtQztJQUVuRyxXQUFXLENBQ1QsbUJBQW1CLEVBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFvQm1CLGlCQUFpQixDQUFDLFNBQVMsQ0FBQztxQkFDOUIsaUJBQWlCLENBQUMsWUFBWSxDQUFDO3FCQUMvQixpQkFBaUIsQ0FBQyxZQUFZLENBQUM7Ozs7Ozs7Ozt1QkFTN0IsaUJBQWlCLENBQUMsYUFBYSxDQUFDO3FCQUNsQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDbkMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7O0tBY25ELENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcclxuaW1wb3J0IHsgc2VhcmNoRm9ybURhdGEgfSBmcm9tICcuL3NlYXJjaC1mb3JtLWRhdGEuanMnXHJcblxyXG5mdW5jdGlvbiBzZXRMZWFkZXJaZXJvKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3RyLmxlbmd0aCA9PT0gMiA/IHN0ciA6IGAwJHtzdHJ9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VEYXRlVG9TdHJpbmcoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpfS0ke3NldExlYWRlclplcm8oKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCkpfS0ke3NldExlYWRlclplcm8oZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSl9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclNlYXJjaEZvcm1CbG9jayhcclxuICBkYXRlRW50cnlTdHJpbmc6IHN0cmluZyB8IG51bWJlciA9IERhdGUubm93KCkgKyAoMjQgKiAzNjAwICogMTAwMCksXHJcbiAgZGF0ZURlcGFydHVyZVN0cmluZzogc3RyaW5nIHwgbnVtYmVyID0gRGF0ZS5ub3coKSArICgzICogMjQgKiAzNjAwICogMTAwMClcclxuKSB7XHJcbiAgY29uc3QgZGF0ZUVudHJ5ID0gbmV3IERhdGUoZGF0ZUVudHJ5U3RyaW5nKTtcclxuICBkYXRlRW50cnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J7QsdC90YPQu9C40LvQuCDQstGA0LXQvNGPXHJcbiAgY29uc3QgbWluRGF0ZUVudHJ5ID0gbmV3IERhdGUoKTtcclxuICBtaW5EYXRlRW50cnkuc2V0SG91cnMoMCwgMCwgMCwgMCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J7QsdC90YPQu9C40LvQuCDQstGA0LXQvNGPXHJcbiAgY29uc3QgbWF4RGF0ZUVudHJ5ID0gbmV3IERhdGUobWluRGF0ZUVudHJ5KTtcclxuICBtYXhEYXRlRW50cnkuc2V0TW9udGgobWF4RGF0ZUVudHJ5LmdldE1vbnRoKCkgKyAyLCAwKTsgICAgICAgICAgLy8g0J/QvtGB0LvQtdC00L3QuNC5INC00LXQvdGMINGB0LvQtdC00YPRjtGJ0LXQs9C+INC80LXRgdGP0YbQsFxyXG5cclxuICBjb25zdCBkYXRlRGVwYXJ0dXJlID0gbmV3IERhdGUoZGF0ZURlcGFydHVyZVN0cmluZyk7XHJcbiAgY29uc3QgbWluRGF0ZURlcGFydHVyZSA9IG5ldyBEYXRlKGRhdGVFbnRyeSk7XHJcbiAgbWluRGF0ZURlcGFydHVyZS5zZXREYXRlKG1pbkRhdGVEZXBhcnR1cmUuZ2V0RGF0ZSgpICsgMSk7ICAgICAgIC8vINCh0LvQtdC00YPRjtGJ0LjQuSDQt9CwINC00LDRgtC+0Lkg0LfQsNC10LfQtNCwINC00LXQvdGMXHJcbiAgY29uc3QgbWF4RGF0ZURlcGFydHVyZSA9IG5ldyBEYXRlKG1pbkRhdGVEZXBhcnR1cmUpO1xyXG4gIG1heERhdGVEZXBhcnR1cmUuc2V0TW9udGgobWF4RGF0ZURlcGFydHVyZS5nZXRNb250aCgpICsgMiwgMCk7ICAvLyDQn9C+0YHQu9C10LTQvdC40Lkg0LTQtdC90Ywg0YHQu9C10LTRg9GO0YnQtdCz0L4g0LzQtdGB0Y/RhtCwXHJcblxyXG4gIHJlbmRlckJsb2NrKFxyXG4gICAgJ3NlYXJjaC1mb3JtLWJsb2NrJyxcclxuICAgIGBcclxuICAgIDxmb3JtPlxyXG4gICAgICA8ZmllbGRzZXQgY2xhc3M9XCJzZWFyY2gtZmlsZWRzZXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIiBkaXNhYmxlZCB2YWx1ZT1cItCh0LDQvdC60YIt0J/QtdGC0LXRgNCx0YPRgNCzXCIgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxyXG4gICAgICAgICAgPC9kaXY+LS0hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIGlkPVwiY2hlY2staW4tZGF0ZVwiIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke3BhcnNlRGF0ZVRvU3RyaW5nKGRhdGVFbnRyeSl9XCIgXHJcbiAgICAgICAgICAgICAgbWluPVwiJHtwYXJzZURhdGVUb1N0cmluZyhtaW5EYXRlRW50cnkpfVwiIFxyXG4gICAgICAgICAgICAgIG1heD1cIiR7cGFyc2VEYXRlVG9TdHJpbmcobWF4RGF0ZUVudHJ5KX1cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tpblwiIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj7QlNCw0YLQsCDQstGL0LXQt9C00LA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgaWQ9XCJjaGVjay1vdXQtZGF0ZVwiIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCIgXHJcbiAgICAgICAgICAgICAgdmFsdWU9XCIke3BhcnNlRGF0ZVRvU3RyaW5nKGRhdGVEZXBhcnR1cmUpfVwiIFxyXG4gICAgICAgICAgICAgIG1pbj1cIiR7cGFyc2VEYXRlVG9TdHJpbmcobWluRGF0ZURlcGFydHVyZSl9XCIgXHJcbiAgICAgICAgICAgICAgbWF4PVwiJHtwYXJzZURhdGVUb1N0cmluZyhtYXhEYXRlRGVwYXJ0dXJlKX1cIiBcclxuICAgICAgICAgICAgICBuYW1lPVwiY2hlY2tvdXRcIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1heC1wcmljZVwiPtCc0LDQutGBLiDRhtC10L3QsCDRgdGD0YLQvtC6PC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj48YnV0dG9uIGlkPVwic2VhcmNoXCI+0J3QsNC50YLQuDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICBgXHJcbiAgKTtcclxufVxyXG4iXX0=