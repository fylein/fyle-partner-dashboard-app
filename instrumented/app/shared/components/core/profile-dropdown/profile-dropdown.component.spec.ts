import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { loginResponse } from 'src/app/core/interceptors/jwt.fixture';
import { partnerOrgResponse } from 'src/app/core/services/core/partner.fixture';
import { PartnerService } from 'src/app/core/services/core/partner.service';
import { WindowService } from 'src/app/core/services/core/window.service';
import { TrimCharacterPipe } from 'src/app/shared/pipes/trim-character.pipe';

import { ProfileDropdownComponent } from './profile-dropdown.component';

describe('ProfileDropdownComponent', () => {
  let component: ProfileDropdownComponent;
  let fixture: ComponentFixture<ProfileDropdownComponent>;
  let partnerService: PartnerService;
  let windowService: WindowService;

  const service1 = {
    getPartnerOrg: () => of(partnerOrgResponse)
  };

  const service2 = {
    openInNewTab: () => null
  };

  const routerSpy = { navigate: jasmine.createSpy('navigate'), url: 'auth/login' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ ProfileDropdownComponent, TrimCharacterPipe ],
      providers: [
        { provide: PartnerService, useValue: service1 },
        { provide: WindowService, useValue: service2 },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDropdownComponent);
    component = fixture.componentInstance;
    component.user = loginResponse.user;
    partnerService = TestBed.inject(PartnerService);
    windowService = TestBed.inject(WindowService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open primary org', () => {
    expect(component.openPrimaryOrg()).toBeUndefined();
  });

  it('should logout the user', () => {
    expect(component.logout()).toBeUndefined();
  });
});
