import { FlatRentSdk } from './flat-rent-sdk.js';
import { getInputValue } from './util.js';
import { Flat } from './flat-rent-sdk.js';

export async function bookingFlatRentRequest(id: string): Promise<Flat | Error | null> {
  const flatRentSdk = new FlatRentSdk();
  const bookResult = await flatRentSdk.book(id, new Date(getInputValue('check-in-date')), new Date(getInputValue('check-out-date')));
  if (bookResult instanceof Error) return bookResult;
  return await flatRentSdk.get(id);
}
