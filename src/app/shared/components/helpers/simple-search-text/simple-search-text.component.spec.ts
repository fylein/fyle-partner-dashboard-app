import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSearchTextComponent } from './simple-search-text.component';

describe('SimpleSearchTextComponent', () => {
  let component: SimpleSearchTextComponent;
  let fixture: ComponentFixture<SimpleSearchTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleSearchTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleSearchTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
