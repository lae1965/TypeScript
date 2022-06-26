export function dateToNumber(id: string): number {
  return Date.parse(new Date(getInputValue(id)).toString());
}

export function getInputValue(id: string): string {
  return (document.getElementById(id) as HTMLInputElement).value;
}
