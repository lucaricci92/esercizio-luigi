export interface IComboContractClosing {
  reasonForLeaving?: ISelect[];
  noShowFlag?: ISelect[];
}

export interface ISelect {
  id: any;
  name: string;
  selected?: boolean;
}

export class ContractClosing {
  idContract?: number;
  idPeople?: number;
  contractClosingDate?: string;
  idReasonForLeaving?: number;
  noShowFlag?: boolean;
}
