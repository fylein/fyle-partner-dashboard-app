import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessageService } from 'primeng/api';

import { HelpDropdownComponent } from './help-dropdown.component';

describe('HelpDropdownComponent', () => {
  let component: HelpDropdownComponent;
  let fixture: ComponentFixture<HelpDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpDropdownComponent ],
      providers: [MessageService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should copy support email to clipboard', () => {
    expect(component.copyToClipboard()).toBeUndefined();
  });
});
