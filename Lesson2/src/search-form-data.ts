interface SearchFormData {
  city: string,
  dateEntry: Date,
  dateDeparture: Date,
  maxPrice: number
};

interface Place { };

function getInputValue(id: string): string {

  return (document.getElementById(id) as HTMLInputElement).value;
}

function getPlace(place: unknown): Place | Error {
  return place;
}

function searchData(search: SearchFormData, callback: (place: unknown) => Place | Error): void {
  console.log(search);
  setTimeout(() => {
    const place: Place = {};
    if (Math.random() < 0.5) console.log(callback(place));
    else console.log(callback(new Error('error')));
  }, 1000)

}

export function searchFormData(event: Event): void {

  event.preventDefault();

  const search: SearchFormData = {
    city: getInputValue('city'),
    dateEntry: new Date(getInputValue('check-in-date')),
    dateDeparture: new Date(getInputValue('check-out-date')),
    maxPrice: + getInputValue('max-price')
  };

  searchData(search, getPlace);
}
