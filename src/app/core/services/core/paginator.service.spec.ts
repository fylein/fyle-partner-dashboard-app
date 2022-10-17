import { getTestBed, TestBed } from '@angular/core/testing';

import { PaginatorService } from './paginator.service';
import { StorageService } from './storage.service';


describe('PaginatorService', () => {
  let service: PaginatorService;
  let injector: TestBed;
  let storageService: StorageService;

  const service1 = {
    get: () => undefined
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PaginatorService,
        { provide: StorageService, useValue: service1}
      ]
    });
    service = TestBed.inject(PaginatorService);
    injector = getTestBed();
    service = injector.inject(PaginatorService);
    storageService = injector.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return default limit', () => {
    expect(service.getPageSize()).toEqual({limit: 50, offset: 0});
  });

  it('should return cached limit', () => {
    spyOn(storageService, 'get').and.returnValue(100);
    expect(service.getPageSize()).toEqual({limit: 100, offset: 0});
  });
});
