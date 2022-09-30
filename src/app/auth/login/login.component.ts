import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/core/auth.service';
import { WindowService } from 'src/app/core/services/core/window.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private windowService: WindowService
  ) { }

  private redirectLoggedInUser(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['partner']);
    }
  }

  redirectToFyleOAuth(): void {
    this.windowService.redirect(`${environment.fyle_app_url}/app/developers/#/oauth/authorize?client_id=${environment.fyle_client_id}&redirect_uri=${environment.callback_uri}&response_type=code`);
  }

  ngOnInit(): void {
    this.redirectLoggedInUser();
  }

}
