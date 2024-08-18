import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IToastr, ImportErrorI } from './toastr.interface';

@Injectable({
  providedIn: 'root',
})
export class ToastrService {
  toastrData: BehaviorSubject<IToastr> = new BehaviorSubject<IToastr>({
    title: '',
    message: '',
    type: '',
  });
  alertImportErrors: BehaviorSubject<ImportErrorI> =
    new BehaviorSubject<ImportErrorI>({
      errors: {
        InvalidFromRange: '',
        InvalidToRange: '',
        InvalidFinancialInstitution: '',
        InvalidBinStatus: '',
        InvalidBinFormat: '',
        InvalidNetworkFormat: '',
        DuplicateBinNumber: '',
      },
      length: 0,
    });
}
