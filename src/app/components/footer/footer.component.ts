import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule]

})
export class FooterComponent {
  logoUrl = '../../../assets/img/Logomark.svg'

}
