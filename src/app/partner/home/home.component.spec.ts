import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';
import { ClientView } from 'src/app/core/models/enum/enum.model';
import { clientOrgResponse } from 'src/app/core/services/home/home.fixture';
import { HomeService } from 'src/app/core/services/home/home.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;
  let formBuilder: FormBuilder;

  const service1 = {
    getClients: () => of(clientOrgResponse),
    getActiveView: () => ClientView.DETAIL,
    storeActiveView: () => null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ HomeComponent ],
      providers: [
        FormBuilder,
        { provide: HomeService, useValue: service1 }
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
    expect(component.isDetailViewActive).toBeTrue();
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
});
