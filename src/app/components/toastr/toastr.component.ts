import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.scss'],
})
export class ToastrComponent {
  @Input() icon!: string;
  @Input() title!: string | undefined;
  @Input() message!: string;
  @Input() class!: string;
  @Input() status: string = 'error';
}
