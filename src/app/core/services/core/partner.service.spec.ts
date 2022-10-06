import { getTestBed, TestBed } from '@angular/core/testing';

import { PartnerService } from './partner.service';

import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { of } from 'rxjs';

describe('PartnerService', () => {
  let service: PartnerService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  const service1 = {
    get: () => of(null),
    put: () => of(null)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PartnerService,
        { provide: ApiService, useValue: service1}
      ]
    });
    injector = getTestBed();
    service = TestBed.inject(PartnerService);
    httpMock = injector.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
