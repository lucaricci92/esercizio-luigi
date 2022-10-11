export class Person {
  id?: any;
  name?: string;
  middleName?: string;
  surname?: string;
  businessEmail?: string;
  gender?: string;
  genderDescription?: string;
  birthdate?: string;
  contractEndDate?: string;
  contractStartDate?: string;
  contractType?: string;

  mainOfficeLocation?: string;
  perDiem?: number = 0;
  internalRole?: string = '';
  contractFirstStartDate?: string;
  payrollNumber?: string;

  status?: string;
  employer?: string;
  changes?: any[]; // qui inseriamo fiel e flag all interno di changes
}
