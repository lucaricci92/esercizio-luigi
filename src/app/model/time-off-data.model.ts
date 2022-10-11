export interface ITimeOffElement {
  descTimeOffType: string;
  idPeople: number;
  idPeopleTimeOff: number;
  idTimeOffType: number;
  timeOffStartDate: string | Date;
  timeOffExpiryDate: string | Date;
  timeOffNote: string;
}

export interface ITimeOff {
  timeOffList: ITimeOffElement[];
  timeOffCombo: ISelect[];
  timeOffOperations: string[];
}

export interface ISelect {
  id: any;
  name: string;
  selected?: boolean;
}
