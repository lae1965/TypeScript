import { dateToNumber } from './util.js';
import { Place } from './searchHomyData.js';

export async function bookingHomyRequest(id: string): Promise<Place | Error> {
  try {
    const response = await fetch(`http://127.0.0.1:3030/places/${id}?checkInDate=${dateToNumber('check-in-date')}&checkOutDate=${dateToNumber('check-out-date')}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status.toString()}`);
    }
    return await response.json();
  } catch (error) {
    return error.message;
  }
}

