import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokensService } from '../services/tokens.service';

export const AuthGuard: CanActivateFn = () => {
  let isAccessTokenFound!: any;
  const tokensService = inject(TokensService);
  const router = inject(Router);


  tokensService.tokens.subscribe(
    (token: any) => (isAccessTokenFound = token)
  );

  return (
    localStorage.getItem('accessToken') === isAccessTokenFound ||
    router.navigate([`login`])
  );
};
