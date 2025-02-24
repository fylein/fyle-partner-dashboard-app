import { getTestBed, TestBed } from '@angular/core/testing';

import { PartnerService } from './partner.service';

import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { partnerOrgResponse } from './partner.fixture';
import { environment } from 'src/environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('PartnerService', () => {
  let service: PartnerService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  const API_BASE_URL = environment.api_url;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [
        PartnerService,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
});
    injector = getTestBed();
    service = injector.inject(PartnerService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Partner Org', () => {
    service.getPartnerOrg(partnerOrgResponse.primary_org_id).subscribe(value => {
      expect(value).toEqual(partnerOrgResponse);
    });

    const req = httpMock.expectOne({
      method: 'GET',
      url: `${API_BASE_URL}/partner/?primary_org_id=${partnerOrgResponse.primary_org_id}`
    });
    expect(req.request.params.get('primary_org_id')).toEqual(partnerOrgResponse.primary_org_id);

    req.flush(partnerOrgResponse);
  });

  it('should create Partner Org', () => {
    service.createPartnerOrg().subscribe(value => {
      expect(value).toEqual(partnerOrgResponse);
    });

    const req = httpMock.expectOne({
      method: 'PUT',
      url: `${API_BASE_URL}/partner/`
    });

    req.flush(partnerOrgResponse);
  });
});
