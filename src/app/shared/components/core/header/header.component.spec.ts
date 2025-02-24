import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Renderer2, Type } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { loginResponse } from 'src/app/core/interceptors/jwt.fixture';
import { UserService } from 'src/app/core/services/misc/user.service';
import { TrimCharacterPipe } from 'src/app/shared/pipes/trim-character.pipe';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userService: UserService;
  let renderer2: Renderer2;
  const service1 = {
    getUserProfile: () => loginResponse.user
  };

  const event = new Event('click', {});
  const service2 = {
    listen: () => of({event})
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [HeaderComponent, TrimCharacterPipe],
    imports: [],
    providers: [
        { provide: UserService, useValue: service1 },
        { provide: Renderer2, useValue: service2 },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    component.user = loginResponse.user;
    component.showHelpDropDown = false;
    component.showProfileDropDown = false;
    renderer2 = fixture.componentRef.injector.get<Renderer2>(Renderer2 as Type<Renderer2>);
    spyOn(renderer2, 'listen').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(loginResponse.user);
    expect(component).toBeTruthy();
  });

  it('should show profile dropdown', () => {
    expect(component.showProfileDropDown).toBeFalse();
    expect(component.showOrHideProfileDropDown()).toBeUndefined();
    expect(component.showProfileDropDown).toBeTrue();
  });

  it('should show help dropdown', () => {
    expect(component.showHelpDropDown).toBeFalse();
    expect(component.showOrHideHelpDropDown()).toBeUndefined();
    expect(component.showHelpDropDown).toBeTrue();
  });

  it('should hide profile dropdown on other area click', () => {
    component.showProfileDropDown = true;
    expect(component.showProfileDropDown).toBeTrue();
    const button = fixture.nativeElement.querySelector('div');
    button.click();
    expect(component.showProfileDropDown).toBeFalse();
  });
});
