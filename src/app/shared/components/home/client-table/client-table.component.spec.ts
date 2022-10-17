import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ClientRedirectionType } from 'src/app/core/models/enum/enum.model';
import { clientOrgResponse } from 'src/app/core/services/home/home.fixture';
import { HomeService } from 'src/app/core/services/home/home.service';

import { ClientTableComponent } from './client-table.component';

describe('ClientTableComponent', () => {
  let component: ClientTableComponent;
  let fixture: ComponentFixture<ClientTableComponent>;
  let formBuilder: FormBuilder;
  let homeService: HomeService;

  const service1 = {
    redirect: () => null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      declarations: [ ClientTableComponent ],
      providers: [
        FormBuilder,
        { provide: HomeService, useValue: service1 }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientTableComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({
      search: []
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show/hide View button for table rows', () => {
    const client = clientOrgResponse.data[0];
    expect(component.showOrHideViewInFyle(client, true));
    expect(client.showViewinFyle).toBeTrue();

    expect(component.showOrHideViewInFyle(client, false));
    expect(client.showViewinFyle).toBeFalse();
  });

  it('should open Fyle url in new tab', () => {
    expect(component.redirect(ClientRedirectionType.INCOMPLETE_EXPENSES, 'dummy_org_id')).toBeUndefined();
  });
});
