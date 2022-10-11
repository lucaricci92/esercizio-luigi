export interface ISelect {
  id: any;
  name: string;
  selected?: boolean;
}


export interface ISecondmentElement {
  descCompanySecondment: string;
  idCompanySecondment: number;
  idPeople: number;
  idPeopleSecondment: number;
  secondmentStartDate: string | Date;
  secondmentExpiryDate: string | Date;
  secondmentNote: string;
  secondmentPerc: number;
}

export interface ISecondment {
  secondmentList: ISecondmentElement[];
  secondmentCombo: ISelect[];
  secondmentOperations: string[];
}
