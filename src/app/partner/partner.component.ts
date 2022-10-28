import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerOrg } from '../core/models/db/partner-org.model';
import { MinimalUser } from '../core/models/db/user.model';
import { PartnerService } from '../core/services/core/partner.service';
import { WindowService } from '../core/services/core/window.service';
import { UserService } from '../core/services/misc/user.service';
import * as Sentry from '@sentry/angular';
import { TrackingService } from '../core/services/integration/tracking.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  isLoading: boolean = true;

  user: MinimalUser | null;

  windowReference: Window;

  constructor(
    private router: Router,
    private partnerService: PartnerService,
    private trackingService: TrackingService,
    private userService: UserService,
    private windowService: WindowService
  ) {
    this.windowReference = this.windowService.nativeWindow;
  }

  private navigate(): void {
    const pathName = this.windowReference.location.pathname;
    if (pathName === '/partner') {
      this.router.navigate(['partner/home']);
    }
  }

  private getOrCreatePartnerOrg(): Promise<PartnerOrg | undefined> {
    return this.partnerService.getPartnerOrg(this.user?.org_id).toPromise().then(partnerOrg => {
      if (partnerOrg) {
        this.trackingService.onSignIn(this.user?.email, partnerOrg.id, partnerOrg.name, partnerOrg.primary_org_id);
      }

      return partnerOrg;
    }, () => {
      return this.partnerService.createPartnerOrg().toPromise().then(partnerOrg => {
        if (partnerOrg) {
          this.trackingService.onSignUp(this.user?.email, partnerOrg.id, partnerOrg.name, partnerOrg.primary_org_id);
        }

        return partnerOrg;
      });
    });
  }

  private setupPartnerOrg(): void {
    this.user = this.userService.getUserProfile();
    this.getOrCreatePartnerOrg().then((partnerOrg: PartnerOrg | void) => {
      if (partnerOrg) {
        Sentry.setUser({
          email: this.user?.email,
          workspaceId: partnerOrg.id
        });
      }
      this.isLoading = false;
      this.navigate();
    });
  }

  ngOnInit(): void {
    this.setupPartnerOrg();
  }

}
