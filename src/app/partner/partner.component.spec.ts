import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { partnerOrgResponse } from '../core/services/core/partner.fixture';
import { PartnerService } from '../core/services/core/partner.service';

import { PartnerComponent } from './partner.component';

describe('PartnerComponent', () => {
  let component: PartnerComponent;
  let fixture: ComponentFixture<PartnerComponent>;
  let partnerService: PartnerService;
  const routerSpy = { navigate: jasmine.createSpy('navigate'), url: '/partner/home' };

  const service1 = {
    getPartnerOrg: () => of(partnerOrgResponse),
    createPartnerOrg: () => of(partnerOrgResponse)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PartnerComponent],
    imports: [RouterTestingModule],
    providers: [
        { provide: PartnerService, useValue: service1 },
        { provide: Router, useValue: routerSpy },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(PartnerComponent);
    component = fixture.componentInstance;
    partnerService = TestBed.inject(PartnerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should create PartnerOrg if it doesn't exist`, () => {
    spyOn(partnerService, 'getPartnerOrg').and.returnValue(throwError('Partner Org Not found'));
    expect((component as any).getOrCreatePartnerOrg()).toBeDefined();
  });

  it('should navigate to partner home page', () => {
    // @ts-ignore
    component.windowReference = { location: {pathname: '/partner'}};

    expect((component as any).navigate()).toBeUndefined();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['partner/home']);
  });
});
