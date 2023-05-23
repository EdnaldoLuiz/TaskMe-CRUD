import { DatePipe } from '@angular/common';

export class Users {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  formattedBirthDate: string;
  
  constructor(id: number, name: string, email: string, birthDate: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.birthDate = birthDate;
    this.formattedBirthDate = this.formatBirthDate(birthDate);
  }
  
  private formatBirthDate(birthDate: string): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(birthDate, 'yyyy-MM-dd') || '';
  }
}
