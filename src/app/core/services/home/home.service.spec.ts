import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { clientOrgResponse, paginationProperties } from './home.fixture';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const API_BASE_URL = environment.api_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService]
    });
    injector = getTestBed();
    service = TestBed.inject(HomeService);
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
});
