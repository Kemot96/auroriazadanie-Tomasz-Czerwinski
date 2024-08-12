export default function formatStringToDate(date: string) {
  const [day, month, year] = date.split(".");
  return new Date(+year, +month - 1, +day, 12);
}
