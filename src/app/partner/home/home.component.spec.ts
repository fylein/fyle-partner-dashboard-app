import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { ClientView } from 'src/app/core/models/enum/enum.model';
import { PageScroll } from 'src/app/core/models/home/client.model';
import { clientOrgResponse, clientOrgResponseWithoutLogo, paginationProperties } from 'src/app/core/services/home/home.fixture';
import { HomeService } from 'src/app/core/services/home/home.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;
  let formBuilder: FormBuilder;

  const service1 = {
    getClients: () => of(clientOrgResponse),
    getActiveView: () => ClientView.TABLE,
    storeActiveView: () => null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [HomeComponent],
    imports: [],
    providers: [
        FormBuilder,
        { provide: HomeService, useValue: service1 },
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
    formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({
      search: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should switch view', () => {
    expect(component.isDetailViewActive).toBeFalse();
    component.switchView(ClientView.TABLE);
    expect(component.isDetailViewActive).toBeFalse();

    component.switchView(ClientView.DETAIL);
    expect(component.isDetailViewActive).toBeTrue();
  });

  it('should listen for search term and filter clients', () => {
    component.form.controls.search.setValue('fyl');
    component.form.controls.search.setValue('fyle');
    expect(component.clients.length).toBe(1);

    component.form.controls.search.setValue('fyleeee');
    expect(component.clients.length).toBe(0);

    component.form.controls.search.setValue(null);
    expect(component.clients.length).toBe(1);
  });

  it('should hide Fyle logo if there are no logo present in any rows', () => {
    spyOn(homeService, 'getClients').and.returnValue(of(clientOrgResponseWithoutLogo));
    component.setupPage(paginationProperties);
    expect(component.hideLogo).toBeTrue();
  });

  it('should show/hide header and footer shadow', () => {
    expect(component.showHeaderShadow).toBeUndefined();
    expect(component.showFooterShadow).toBeTrue();

    const pageScroll: PageScroll = {
      headerShadow: true,
      footerShadow: true
    };

    component.pageScrollHandler(pageScroll);

    expect(component.showHeaderShadow).toBeTrue();
  });

  it('should clear search value', () => {
    component.form.controls.search.setValue('fyl');
    expect(component.clients.length).toBe(1);

    component.clearSearch();

    expect(component.form.value.search).toBeNull();
  });
});
