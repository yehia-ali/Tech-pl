import { Component, Inject } from '@angular/core';
import { IToastr } from './components/toastr/toastr.interface';
import { DOCUMENT } from '@angular/common';
import { ToastrService } from './components/toastr/toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pleny';
  toastrErrors!: any[];
  toastrData: IToastr = {
    title: '',
    message: '',
    type: 'error',
  };
  constructor(
    private toastrService: ToastrService,
    @Inject(DOCUMENT) private document: Document,
  ) {
  }
  ngOnInit(): void {
    this.toastrService.toastrData.subscribe((toastrData: IToastr) => {
      this.toastrData = toastrData;
      setTimeout(
        () => (this.toastrData = { title: '', message: '', type: '' }),
        5000
      );
    });

    this.toastrService.alertImportErrors.subscribe((result: any) => {
      this.toastrErrors = result?.errors;

      setTimeout(() => (this.toastrErrors = []), 5000);
    });
  }

}
