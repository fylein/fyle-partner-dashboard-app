import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackLoaderComponent } from './callback-loader.component';

describe('CallbackLoaderComponent', () => {
  let component: CallbackLoaderComponent;
  let fixture: ComponentFixture<CallbackLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallbackLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallbackLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
