import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule,ReactiveFormsModule]
})
export class HeaderComponent {
private headerService = inject(HeaderService);
logoUrl = '../../../assets/img/Logomark.svg';
searchControl = new FormControl('');
isLoggedIn = this.headerService.isLoggedIn;

onSearch() {
  this.headerService.setSearchTerm(this.searchControl.value || '');
}

}
