import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { TokensService } from '../../services/tokens.service';
import { HeaderService } from 'src/app/components/header/header.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private router = inject(Router);
  private tokens = inject(TokensService);
  private headerService = inject(HeaderService);

  logoUrl = '../../../assets/img/Logomark.svg'
  loginFormGroup: FormGroup = new FormGroup({
    username: new FormControl({ value: '', disabled: false }, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl({ value: '', disabled: false }, [
      Validators.minLength(8),
      Validators.maxLength(30),
    ]),
  });
  submitLogin(): void {
      this.loginService
        .submitLogin(this.loginFormGroup.value)
        .subscribe((res: any) => {
          this.headerService.setLoginStatus(true);
          this.tokens.tokens.next(res?.token);
          this.router.navigate(['dashboard/product'])
        });
    
  }

}