import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutComponent } from './logout.component';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('LogoutComponent', () => {
  let component: LogoutComponent;
  let fixture: ComponentFixture<LogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [LogoutComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();

    fixture = TestBed.createComponent(LogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
