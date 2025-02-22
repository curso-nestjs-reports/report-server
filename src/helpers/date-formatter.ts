export class DateFormatter {
  static formatter = new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });

  static getStringDate(date: Date): string {
    return this.formatter.format(date);
  }
}
