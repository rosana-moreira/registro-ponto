import { uuid } from 'uuidv4';

class PointEntry {
  id: string;
  hour: string;
  minute: string;

  constructor(hour: string, minute: string) {
    this.id = uuid();

    this.hour = hour;
    this.minute = minute;
  }
}
export default PointEntry;
