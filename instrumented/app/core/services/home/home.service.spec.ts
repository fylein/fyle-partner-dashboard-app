import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { ClientView } from '../../models/enum/enum.model';
import { StorageService } from '../core/storage.service';
import { clientOrgResponse, paginationProperties } from './home.fixture';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let storageService: StorageService;
  const API_BASE_URL = environment.api_url;

  const service1 = {
    get: () => ClientView.TABLE,
    set: () => null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HomeService,
        { provide: StorageService, useValue: service1 }
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(HomeService);
    storageService = injector.inject(StorageService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get client orgs', () => {
    service.getClients(paginationProperties).subscribe(value => {
      expect(value).toEqual(clientOrgResponse);
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${API_BASE_URL}/partner/orgs/?limit=${paginationProperties.limit}&offset=${paginationProperties.offset}`
    });
    expect(req.request.params.get('limit')).toEqual(paginationProperties.limit.toString());
    expect(req.request.params.get('offset')).toEqual(paginationProperties.offset.toString());

    req.flush(clientOrgResponse);
  });

  it('should store active view', () => {
    expect(service.storeActiveView(ClientView.TABLE));
    expect(service.getActiveView()).toBe(ClientView.TABLE);
  });

  it('should return stored active view', () => {
    spyOn(storageService, 'get').and.returnValue(null);
    expect(service.getActiveView()).toBe(ClientView.DETAIL);
  });
});
