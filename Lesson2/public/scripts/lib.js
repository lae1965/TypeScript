export function renderBlock(elementId, html) {
    const element = document.getElementById(elementId);
    if (element != null)
        element.innerHTML = html;
}
export function renderToast(message, action = null) {
    let messageText = '';
    if (message != null) {
        messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${(action === null || action === void 0 ? void 0 : action.name) || 'Закрыть'}</button>
      </div>
    `;
    }
    renderBlock('toast-block', messageText);
    const button = document.getElementById('toast-main-action');
    if (button != null) {
        button.onclick = function () {
            if (action != null && action.handler != null) {
                action.handler();
            }
            renderToast(null);
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsV0FBVyxDQUFDLFNBQWlCLEVBQUUsSUFBWTtJQUN6RCxNQUFNLE9BQU8sR0FBdUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN2RSxJQUFJLE9BQU8sSUFBSSxJQUFJO1FBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDaEQsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sR0FBRyxJQUFJO0lBQ2hELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUVyQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIsV0FBVyxHQUFHOytDQUM2QixPQUFPLENBQUMsSUFBSTthQUM5QyxPQUFPLENBQUMsSUFBSTt5Q0FDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVM7O0tBRTdELENBQUM7S0FDSDtJQUVELFdBQVcsQ0FDVCxhQUFhLEVBQ2IsV0FBVyxDQUNaLENBQUM7SUFFRixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDNUQsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUE7S0FDRjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2soZWxlbWVudElkOiBzdHJpbmcsIGh0bWw6IHN0cmluZykge1xyXG4gIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XHJcbiAgaWYgKGVsZW1lbnQgIT0gbnVsbCkgZWxlbWVudC5pbm5lckhUTUwgPSBodG1sO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVG9hc3QobWVzc2FnZSwgYWN0aW9uID0gbnVsbCkge1xyXG4gIGxldCBtZXNzYWdlVGV4dCA9ICcnO1xyXG5cclxuICBpZiAobWVzc2FnZSAhPSBudWxsKSB7XHJcbiAgICBtZXNzYWdlVGV4dCA9IGBcclxuICAgICAgPGRpdiBpZD1cImluZm8tYmxvY2tcIiBjbGFzcz1cImluZm8tYmxvY2sgJHttZXNzYWdlLnR5cGV9XCI+XHJcbiAgICAgICAgPHA+JHttZXNzYWdlLnRleHR9PC9wPlxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcblxyXG4gIHJlbmRlckJsb2NrKFxyXG4gICAgJ3RvYXN0LWJsb2NrJyxcclxuICAgIG1lc3NhZ2VUZXh0XHJcbiAgKTtcclxuXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0LW1haW4tYWN0aW9uJyk7XHJcbiAgaWYgKGJ1dHRvbiAhPSBudWxsKSB7XHJcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcclxuICAgICAgICBhY3Rpb24uaGFuZGxlcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlclRvYXN0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=