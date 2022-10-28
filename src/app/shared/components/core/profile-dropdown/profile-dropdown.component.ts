import { Component, Input, OnInit } from '@angular/core';
import { MinimalUser } from 'src/app/core/models/db/user.model';
import { RedirectLink } from 'src/app/core/models/enum/enum.model';
import { AuthService } from 'src/app/core/services/core/auth.service';
import { PartnerService } from 'src/app/core/services/core/partner.service';
import { WindowService } from 'src/app/core/services/core/window.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  @Input() user: MinimalUser;

  currency: string;

  constructor(
    private authService: AuthService,
    private partnerService: PartnerService,
    private windowService: WindowService
  ) { }

  openPrimaryOrg(): void {
    const url = `${environment.fyle_app_url}${RedirectLink.FYLE_ADMIN}?org_id=${this.user.org_id}`;
    this.windowService.openInNewTab(url);
  }

  logout(): void {
    this.authService.logout(true);
  }

  private setupPage(): void {
    this.partnerService.getPartnerOrg(this.user.org_id).subscribe(partnerOrg => {
      this.currency = partnerOrg.currency;
    });
  }

  ngOnInit(): void {
    this.setupPage();
  }

}
