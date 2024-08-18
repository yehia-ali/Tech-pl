import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrComponent } from './toastr.component';
import { ToastrService } from './toastr.service';

@NgModule({
  declarations: [ToastrComponent],
  imports: [CommonModule],
  exports: [ToastrComponent],
  providers: [ToastrService],
})
export class ToastrModule {}
