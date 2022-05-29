;
export function getUserData() {
    const item = localStorage.getItem('user');
    if (typeof item === 'string')
        return JSON.parse(item);
    return ({ name: '', avatar: '' });
}
export function getFavoritesAmount() {
    const item = localStorage.favoritesAmount;
    return !!item ? localStorage.favoritesAmount : 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nZXRVc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdDLENBQUM7QUFFRixNQUFNLFVBQVUsV0FBVztJQUN6QixNQUFNLElBQUksR0FBWSxZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRW5ELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUTtRQUFFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLENBQUM7QUFFRCxNQUFNLFVBQVUsa0JBQWtCO0lBQ2hDLE1BQU0sSUFBSSxHQUFZLFlBQVksQ0FBQyxlQUFlLENBQUM7SUFFbkQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XHJcbiAgbmFtZTogc3RyaW5nLFxyXG4gIGF2YXRhcjogc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoKTogVXNlciB7XHJcbiAgY29uc3QgaXRlbTogdW5rbm93biA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyk7XHJcblxyXG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycpIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pO1xyXG4gIHJldHVybiAoeyBuYW1lOiAnJywgYXZhdGFyOiAnJyB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Ftb3VudCgpOiBudW1iZXIge1xyXG4gIGNvbnN0IGl0ZW06IHVua25vd24gPSBsb2NhbFN0b3JhZ2UuZmF2b3JpdGVzQW1vdW50O1xyXG5cclxuICByZXR1cm4gISFpdGVtID8gbG9jYWxTdG9yYWdlLmZhdm9yaXRlc0Ftb3VudCA6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==