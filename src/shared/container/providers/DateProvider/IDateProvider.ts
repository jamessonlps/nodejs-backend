interface IDateProvider {
  dateNow(): Date;
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  compareInDays(initial_date: Date, end_date: Date): number;
}

export default IDateProvider;
