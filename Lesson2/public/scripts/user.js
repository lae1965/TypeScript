import { renderBlock } from './lib.js';
export function renderUserBlock(name, avatar, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount.toString() : 'ничего нет';
    const hasFavoriteItems = !!favoriteItemsAmount;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src="${avatar}" alt="${name}" />
      <div class="info">
          <p class="name">${name}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFdkMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLG1CQUE0QjtJQUN4RixNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQzdGLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0lBRS9DLFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2lDQUU2QixNQUFNLFVBQVUsSUFBSTs7NEJBRXpCLElBQUk7O2tDQUVFLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxnQkFBZ0I7Ozs7S0FJdkYsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclVzZXJCbG9jayhuYW1lOiBzdHJpbmcsIGF2YXRhcjogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50PzogbnVtYmVyKSB7XHJcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyBmYXZvcml0ZUl0ZW1zQW1vdW50LnRvU3RyaW5nKCkgOiAn0L3QuNGH0LXQs9C+INC90LXRgic7XHJcbiAgY29uc3QgaGFzRmF2b3JpdGVJdGVtcyA9ICEhZmF2b3JpdGVJdGVtc0Ftb3VudDtcclxuXHJcbiAgcmVuZGVyQmxvY2soXHJcbiAgICAndXNlci1ibG9jaycsXHJcbiAgICBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPVwiJHthdmF0YXJ9XCIgYWx0PVwiJHtuYW1lfVwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke25hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICApO1xyXG59XHJcbiJdfQ==