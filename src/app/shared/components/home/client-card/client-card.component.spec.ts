import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientRedirectionType } from 'src/app/core/models/enum/enum.model';
import { WindowService } from 'src/app/core/services/core/window.service';

import { ClientCardComponent } from './client-card.component';

describe('ClientCardComponent', () => {
  let component: ClientCardComponent;
  let fixture: ComponentFixture<ClientCardComponent>;
  let windowService: WindowService;

  const service1 = {
    openInNewTab: () => null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCardComponent ],
      providers: [
        { provide: WindowService, useValue: service1 }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCardComponent);
    component = fixture.componentInstance;
    windowService = TestBed.inject(WindowService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open org in Fyle', () => {
    expect(component.openOrg('dummy_org_id')).toBeUndefined();
  });

  it('should open respective resource page in Fyle', () => {
    expect(component.redirect(ClientRedirectionType.PENDING_REIMBURSEMENTS, 'dummy_org_id')).toBeUndefined();
  });
});
