
export interface IToastr {
  title?: string;
  message: string;
  type?: string;
}

export interface ImportErrorI {
  length: number;
  errors: Record<keyof ErrorObjectI, string>;
}
 interface ErrorObjectI {
  InvalidFromRange?: string;
  InvalidToRange?: string;
  InvalidFinancialInstitution?: string;
  InvalidBinStatus?: string;
  InvalidBinFormat?: string;
  InvalidNetworkFormat?: string;
  DuplicateBinNumber?: string;
}
