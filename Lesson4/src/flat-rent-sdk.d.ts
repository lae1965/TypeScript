export type Flat = {
  id: string,
  title: string,
  details: string,
  photos: string[],
  coordinates: number[],
  bookedDates: number[],
  price?: number,
  totalprice?: number
}

export type SearchData = {
  city: string,
  checkInDate: Date,
  checkOutDate: Date,
  priceLimit: number
}


export function cloneDate(date: Date): Date;

export function addDays(date: Date, days: number): Date;

export const backendPort: number;
export const localStorageKey: string;

export class FlatRentSdk {
  database: Flat[];
  
  get(id: string): Promise<Flat | null>; 
  search(parameters: SearchData): Promise<Flat[] | Error>;
  book(flatId: number, checkInDate: Date, checkOutDate: Date): Promise<number | Error>; 
  
  _assertDatesAreCorrect(checkInDate: Date, checkOutDate: Date): void | Error;
  _resetTime(date: Date): void;
  _calculateDifferenceInDays(startDate: Date, endDate: Date): number;
  _generateDateRange(from: Date, to: Date): Date[];
  _generateTransactionId(): number;
  _areAllDatesAvailable(flat: Flat, dateRange: Date[]): boolean;
  _formatFlatObject(flat: Flat, nightNumber: number): Flat;
  _readDatabase(): Flat[];
  _writeDatabase(database: Flat[]): void;
  _syncDatabase(database: Flat[]): void;
}
