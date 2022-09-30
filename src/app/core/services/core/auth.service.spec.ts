import { getTestBed, TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from '../misc/user.service';
import { loginResponse, minimalUser, tokenResponse } from '../../interceptors/jwt.fixture';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let userService: UserService;
  const API_BASE_URL = environment.api_url;

  const service1 = {
    getUserProfile: () => null,
    storeUserProfile: () => undefined
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: UserService, useValue: service1}
      ]
    });
    injector = getTestBed();
    service = injector.inject(AuthService);
    userService = injector.inject(UserService);
    httpMock = injector.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return logged in status', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(minimalUser);
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should login the user', () => {
    service.login('auth-code').subscribe(value => {
      expect(loginResponse).toEqual(value);
    });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${API_BASE_URL}/auth/login/`
    });

    req.flush(loginResponse);
  });

  it('should refresh access token', () => {
    service.refreshAccessToken('refresh-token').subscribe(value => {
      expect(tokenResponse).toEqual(value);
    });

    const req = httpMock.expectOne({
      method: 'POST',
      url: `${API_BASE_URL}/auth/refresh/`
    });

    req.flush(tokenResponse);
  });

  it('should return access token', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(minimalUser);

    const accessToken = service.getAccessToken();
    expect(accessToken).toEqual('x.x.x');
  });

  it('should not return access token if user info is not found', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(null);

    const accessToken = service.getAccessToken();
    expect(accessToken).toEqual(null);
  });

  it('should update new access token', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(minimalUser);

    const updatedAccessToken = service.updateAccessToken('x.x.x');
    expect(updatedAccessToken).toEqual('x.x.x');
  });

  it('should not update access token if user detail is not found', () => {
    const updatedAccessToken = service.updateAccessToken('x.x.x');

    expect(updatedAccessToken).toEqual(null);
  });

  it('should return refresh token', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(minimalUser);

    const accessToken = service.getRefreshToken();
    expect(accessToken).toEqual('y.y.y');
  });

  it('should not return refresh token if user detail is not found', () => {
    spyOn(userService, 'getUserProfile').and.returnValue(null);

    const accessToken = service.getRefreshToken();
    expect(accessToken).toEqual(null);
  });

  it('should check login status and logout', () => {
    spyOn(service, 'isLoggedIn').and.returnValue(true);
    service.checkLoginStatusAndLogout();
  });
});
