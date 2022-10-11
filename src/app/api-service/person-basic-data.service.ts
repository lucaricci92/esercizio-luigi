import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Person } from '../model/person-basic-data.model';

@Injectable({
  providedIn: 'root'
})
export class PersonBasicDataService {
  // RESPONSE:
  constructor() { }
  public getPersonBasicData(): Observable<{ sections: string[]; operations: string[]; data: Person; }> {
    const response = {
      getPeopleBasicData: {
        message: 'PEO-000_O_Success',
        response: {
          OPERATIONS: [],
          SECTIONS: [],
          PMSAPEOPLE_BASIC_REC: {
            BUSINESS_EMAIL: '',
            ID_PEOPLE: 4247,
            RESOURCE_BIRTHDATE: '12/11/1964',
            RESOURCE_GENDER: 'M',
            RESOURCE_MIDDLE_NAME: '',
            RESOURCE_NAME: 'Luigi',
            RESOURCE_SURNAME: 'Berloni',
          },
        },
      },
    };

    return of(response).pipe(
      map((res) => ({
        sections: res.getPeopleBasicData.response.SECTIONS,
        operations: res.getPeopleBasicData.response.OPERATIONS,
        data: {
          id: res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC.ID_PEOPLE,
          name: res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC
            .RESOURCE_NAME,
          middleName:
            res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC
              .RESOURCE_MIDDLE_NAME,
          surname:
            res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC
              .RESOURCE_SURNAME,
          businessEmail:
            res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC.BUSINESS_EMAIL,
          gender:
            res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC
              .RESOURCE_GENDER,
          birthdate:
            res.getPeopleBasicData.response.PMSAPEOPLE_BASIC_REC
              .RESOURCE_BIRTHDATE,
        },
      }))
    );
  }
}
// export interface Person {
//   id?: any;
//   name?: string;
//   middleName?: string;
//   surname?: string;
//   businessEmail?: string;
//   gender?: string;
//   genderDescription?: string;
//   birthdate?: string;
//   contractEndDate?: string;
//   contractStartDate?: string;
//   contractType?: string;

//   mainOfficeLocation?: string;
//   perDiem?: number;
//   internalRole?: string;
//   contractFirstStartDate?: string;
//   payrollNumber?: string;

//   status?: string;
//   employer?: string;
//   changes?: any[];
// }
