import { Component, Input } from '@angular/core';
import { IBreadCrumb } from './breadcrumb.interface';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input({ required: true }) breadCrumbStack!: IBreadCrumb[];
}
