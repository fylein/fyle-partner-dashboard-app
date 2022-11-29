import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MessageService } from 'primeng/api';
import { of, throwError } from 'rxjs';
import { dummyErrorResponse, loginResponse } from 'src/app/core/interceptors/jwt.fixture';
import { AuthService } from 'src/app/core/services/core/auth.service';

import { FyleCallbackComponent } from './fyle-callback.component';

describe('FyleCallbackComponent', () => {
  let component: FyleCallbackComponent;
  let fixture: ComponentFixture<FyleCallbackComponent>;
  let authService: AuthService;
  let activatedRoute: ActivatedRoute;
  const routerSpy = { navigate: jasmine.createSpy('navigate'), url: '/partner' };

  beforeEach(async () => {
    const service1 = {
      checkLoginStatusAndLogout: () => undefined,
      login: () => of(loginResponse),
      logout: () => undefined
    };
    const service2 = {
      storeUserProfile: () => undefined,
      storeFyleOrgsCount: () => 1
    };

    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, RouterTestingModule
      ],
      declarations: [ FyleCallbackComponent ],
      providers: [
        MessageService,
        { provide: Router, useValue: routerSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({
              code: 'wrong-code'
            })
          }
        },
        { provide: AuthService, useValue: service1}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FyleCallbackComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to login page incase of oauth error', () => {
    activatedRoute.queryParams=of({
      error: 'error-message'
    });

    expect(component.ngOnInit()).toBeUndefined();
    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['auth/login']);
  });

  it('should redirect to login page incase of backend login error', () => {
    spyOn(authService, 'login').and.returnValue(throwError(dummyErrorResponse));

    expect((component as any).saveUserProfileAndNavigate('code')).toBeUndefined();
    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['auth/login']);
  });
});
