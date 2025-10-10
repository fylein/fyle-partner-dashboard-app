import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MinimalUser } from 'src/app/core/models/db/user.model';
import { PartnerService } from 'src/app/core/services/core/partner.service';
import { UserService } from 'src/app/core/services/misc/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: MinimalUser;

  showHelpDropDown: boolean;

  showProfileDropDown: boolean;

  @ViewChild('helpSection') helpSection: ElementRef;

  @ViewChild('help') help: ElementRef;

  @ViewChild('profileSection') profileSection: ElementRef;

  @ViewChild('profile') profile: ElementRef;

  constructor(
    private renderer: Renderer2,
    private userService: UserService,
    public partnerService: PartnerService
  ) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e && e?.target !== this.helpSection?.nativeElement) {
        this.showHelpDropDown = false;
      }

      if (e && e?.target !== this.profileSection?.nativeElement) {
        this.showProfileDropDown = false;
      }
    });
  }

  private setupPage(): void {
    const user = this.userService.getUserProfile();
    if (user) {
      this.user = user;
    }
  }

  showOrHideHelpDropDown(): void {
    this.showProfileDropDown = false;
    this.showHelpDropDown = !this.showHelpDropDown;
    event?.stopPropagation();
  }

  showOrHideProfileDropDown(): void {
    this.showHelpDropDown = false;
    this.showProfileDropDown = !this.showProfileDropDown;
    event?.stopPropagation();
  }

  ngOnInit(): void {
    this.setupPage();
  }

}
