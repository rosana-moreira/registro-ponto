import Point from '../models/PointEntry';

class PointServer {
  private pointsExit: Point[];
  private pointsEntry: Point[];

  constructor() {
    this.pointsExit = [];
    this.pointsEntry = [];
  }
  public createEntry(hour: string, minute: string): Point {
    const point = new Point(hour, minute);
    this.pointsEntry.push(point);
    return point;
  }

  public createExite(hour: string, minute: string): Point {
    const point = new Point(hour, minute);
    this.pointsExit.push(point);
    return point;
  }

  public allEntry(): Point[] {
    return this.pointsEntry;
  }
  public allExit(): Point[] {
    return this.pointsExit;
  }
  public HoursTotal() {
    let resultHoursExit = 0;
    let resultMinuteExit = 0;
    let resultHoursEntry = 0;
    let resultMinuteEntry = 0;

    for (var i = 0; i < this.pointsExit.length; i++) {
      resultHoursExit = parseInt(this.pointsExit[i].hour);
      resultMinuteExit = parseInt(this.pointsExit[i].minute);
    }

    for (var i = 0; i < this.pointsEntry.length; i++) {
      resultHoursEntry = parseInt(this.pointsEntry[i].hour);
      resultMinuteEntry = parseInt(this.pointsEntry[i].minute);
    }

    if (resultHoursExit > 12) {
      resultHoursExit - 12;
    }
    if (resultHoursEntry > 12) {
      resultHoursEntry - 12;
    }
    const totalHours = resultHoursExit - resultHoursEntry;
    const totalMinutes = resultMinuteExit - resultMinuteEntry;

    if (totalMinutes < 0) {
      const test = totalHours * 60;
      const a = test - resultMinuteEntry;
      const horas = a / 60;
      const minutos = a % 60;
      return (
        'Total ' +
        Math.trunc(horas) +
        ' Horas e ' +
        minutos +
        ' Minutos trabalhados!'
      );
    } else {
      return (
        'Total ' +
        totalHours +
        ' Horas e ' +
        totalMinutes +
        ' Minutos trabalhados!'
      );
    }
  }
}

export default PointServer;
