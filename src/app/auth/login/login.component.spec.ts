import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

import { HttpClientModule } from '@angular/common/http';
import { WindowService } from 'src/app/core/services/core/window.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/core/auth.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let router: Router;
  const routerSpy = { navigate: jasmine.createSpy('navigate'), url: '/path' };

  beforeEach(async () => {
    let windowService: WindowService;
    let authService: AuthService;

    const service1 = {
      redirect: () => undefined
    };

    const service2 = {
      isLoggedIn: () => true
    }

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ HttpClientModule ],
      providers: [
        { provide: WindowService, useValue: service1 },
        { provide: AuthService, useValue: service2 },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    windowService = TestBed.inject(WindowService);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to Fyle OAuth', () => {
    expect(component.redirectToFyleOAuth()).toBeUndefined();

    fixture.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['partner']);
  })
});
