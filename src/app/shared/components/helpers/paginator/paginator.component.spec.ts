import { SimpleChange } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageNavigation } from 'src/app/core/models/enum/enum.model';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let formBuilder: FormBuilder;
  let form: FormGroup;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    formBuilder = TestBed.inject(FormBuilder);
    component = fixture.componentInstance;

    component.limit = 20;
    component.offset = 0;
    component.totalCount = 36;
    component.totalPageCount = 2;

    form = formBuilder.group({
      pageLimit: [component.limit],
      offset: [component.offset],
      page: [1]
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit page chage event for manual page change', () => {
    spyOn(component.pageChangeEvent, 'emit');

    component.manualPageChangeHandler();
    expect(component.pageChangeEvent.emit).toHaveBeenCalled();
  });

  it('should assert for a given condition and throw exception', () => {
    expect(function(){
      (component as any).validatePageNavigation(true);
    }).toThrow('Invalid Navigation');
  });

  it('should emit page chage event for page size changes', () => {
    spyOn(component.pageChangeEvent, 'emit');

    (component as any).onPageSizeChangeWatcher();

    component.form.controls.pageLimit.setValue(50);
    expect(component.pageChangeEvent.emit).toHaveBeenCalled();
  });

  it('should emit page chage event for page forward/backward/first/last', () => {
    spyOn(component.pageChangeEvent, 'emit');

    component.onPageChangeHandler(PageNavigation.FORWARD);
    expect(component.pageChangeEvent.emit).toHaveBeenCalled();

    component.onPageChangeHandler(PageNavigation.BACKWARD);
    expect(component.pageChangeEvent.emit).toHaveBeenCalled();

    component.form.controls.page.setValue(2);
    component.onPageChangeHandler(PageNavigation.FIRST);
    expect(component.pageChangeEvent.emit).toHaveBeenCalled();

    component.onPageChangeHandler(PageNavigation.LAST);
    expect(component.pageChangeEvent.emit).toHaveBeenCalled();
  });

  it('should update totalPageCount if totalCount/limit is changed', () => {
    component.ngOnChanges({
      totalCount: new SimpleChange(null, 42, true)
    });
    fixture.detectChanges();
    expect(component.totalPageCount).toBe(3);

    component.ngOnChanges({
      limit: new SimpleChange(20, 50, true)
    });
    fixture.detectChanges();
    expect(component.totalPageCount).toBe(1);
  });

  it('should set default limit if cached limit is null', () => {
    component.limit = 0;
    (component as any).setupForm();
    expect(component.limit).toBe(50);
  });
});
