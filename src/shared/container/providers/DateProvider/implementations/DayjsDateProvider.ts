import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import IDateProvider from "../IDateProvider";

dayjs.extend(utc);

class DayjsDateProvider implements IDateProvider {
  dateNow(): Date {
    return dayjs().toDate();
  }

  compareInHours(start_date: Date, end_date: Date): number {
    const final_date_utc = this.convertToUTC(end_date);
    const initial_date_utc = this.convertToUTC(start_date);

    return dayjs(final_date_utc).diff(initial_date_utc, 'hours');
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

}

export default DayjsDateProvider;
