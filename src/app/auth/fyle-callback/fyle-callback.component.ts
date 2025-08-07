import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/core/auth.service';
import { MessageService } from 'primeng/api';
import { MinimalUser } from 'src/app/core/models/db/user.model';
import { UserService } from 'src/app/core/services/misc/user.service';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-fyle-callback',
  templateUrl: './fyle-callback.component.html',
  styleUrls: ['./fyle-callback.component.scss']
})
export class FyleCallbackComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private translocoService: TranslocoService
  ) { }

  private redirectToLogin(): void {
    this.authService.logout();
    this.messageService.add({
      severity: 'error',
      summary: this.translocoService.translate('fyleCallback.loginFailedSummary'),
      detail: this.translocoService.translate('fyleCallback.loginFailedDetail'),
      life: 700000,
      styleClass: 'tw-bg-white tw-max-w-[440px]',
      contentStyleClass: 'tw-p-0',
      data: {
        detailLine2: this.translocoService.translate('fyleCallback.loginFailedDetailLine2'),
        detailLine3: this.translocoService.translate('fyleCallback.loginFailedDetailLine3')
      }
    });
    this.router.navigate(['auth/login']);
  }

  private saveUserProfileAndNavigate(code: string): void {
    this.authService.login(code).subscribe(response => {
      const user: MinimalUser = {
        'email': response.user.email,
        'access_token': response.access_token,
        'refresh_token': response.refresh_token,
        'full_name': response.user.full_name,
        'user_id': response.user.user_id,
        'org_id': response.user.org_id,
        'org_name': response.user.org_name
      };
      this.userService.storeUserProfile(user);

      this.router.navigate(['/partner']);
    }, () => {
      this.redirectToLogin();
    });
  }

  private login(): void {
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        this.saveUserProfileAndNavigate(params.code);
      } else if (params.error) {
        this.redirectToLogin();
      }
    });
  }

  ngOnInit(): void {
    this.authService.checkLoginStatusAndLogout();
    this.login();
  }

}
