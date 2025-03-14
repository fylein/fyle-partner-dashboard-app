import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ClientRedirectionType } from 'src/app/core/models/enum/enum.model';
import { WindowService } from 'src/app/core/services/core/window.service';

import { ClientCardComponent } from './client-card.component';

describe('ClientCardComponent', () => {
  let component: ClientCardComponent;
  let fixture: ComponentFixture<ClientCardComponent>;
  let windowService: WindowService;
  let formBuilder: FormBuilder;

  const service1 = {
    openInNewTab: () => null
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [ClientCardComponent],
    imports: [],
    providers: [
        { provide: WindowService, useValue: service1 },
        FormBuilder,
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting()
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(ClientCardComponent);
    component = fixture.componentInstance;
    formBuilder = TestBed.inject(FormBuilder);
    component.form = formBuilder.group({
      search: []
    });
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

  it('should emit page scroll handler on scroll', () => {
    spyOn(component.pageScrollHandler, 'emit');
    const element = fixture.debugElement.query(By.css('div'));
    element.nativeElement.dispatchEvent(new Event('scroll'));

    expect(component.pageScrollHandler.emit).toHaveBeenCalled();
  });
});
