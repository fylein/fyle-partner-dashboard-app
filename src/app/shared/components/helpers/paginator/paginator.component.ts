import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageNavigation } from 'src/app/core/models/enum/enum.model';
import { PageSize, Paginator } from 'src/app/core/models/misc/paginator.model';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnChanges {

  pageSizeOptions: PageSize[] = [20, 50, 100].map(pageSize => {
    return { label: `${pageSize} Items`, value: pageSize };
  });

  totalPageCount: number;

  PageNavigation = PageNavigation;

  @Output() pageChangeEvent = new EventEmitter<Paginator>();

  @Input() limit: number;

  @Input() offset: number;

  @Input() totalCount: number;

  form: FormGroup = this.formBuilder.group({
    pageLimit: [],
    offset: [],
    page: []
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  private onPageSizeChangeWatcher(): void {
    this.form.controls.pageLimit.valueChanges.subscribe(limit => {
      this.pageChangeEvent.emit({
        limit: limit,
        offset: 0
      });
    });
  }

  onPageChangeHandler(event: PageNavigation): void | false {
    // TODO: Refactor code in this function, move all validations to another func, move input change to another function
    if (event === PageNavigation.CHANGE) {
      if (this.form.controls.page.value) {
        if (this.form.controls.page.value > this.totalPageCount || this.form.controls.page.value < 1) {
          return false;
        }
        return this.pageChangeEvent.emit({
          limit: this.limit,
          offset: (this.form.controls.page.value *  this.limit) - this.limit
        });
      }

      return false;
    }

    let offset: number = this.form.get('offset')?.value;
    const currentPage = this.form.value.page;
    let newPage: number = 0;
    if (event === PageNavigation.FORWARD) {
      if (this.form.value.page >= this.totalPageCount) {
        return false;
      }
      newPage = currentPage + 1;
      offset = this.form.get('offset')?.value + this.limit;
    } else if (event === PageNavigation.BACKWARD) {
      if (this.form.value.page <= 1) {
        return false;
      }
      newPage = currentPage - 1;
      offset = this.form.get('offset')?.value - this.limit;
    }

    if (event === PageNavigation.FIRST) {
      if (this.form.value.page === 1) {
        return false;
      }
      newPage = 1;
      offset = 0;
    }

    if (event === PageNavigation.LAST) {
      if (this.form.value.page === this.totalPageCount) {
        return false;
      }
      newPage = this.totalPageCount;
      offset = (this.totalPageCount * this.limit) - this.limit;
    }

    if (event === PageNavigation.BACKWARD || event === PageNavigation.FORWARD || event === PageNavigation.FIRST || event === PageNavigation.LAST) {
      this.form.get('offset')?.setValue(offset);
      this.form.get('page')?.setValue(newPage);
    }

    this.pageChangeEvent.emit({
      limit: this.form.get('pageLimit')?.value,
      offset: offset
    });

    return false;
  }

  private createWatchers(): void {
    this.onPageSizeChangeWatcher();
  }

  private setupForm(): void {
    this.limit = this.limit || 50;
    this.offset = this.offset || 0;
    this.totalPageCount = Math.ceil(this.totalCount / this.limit);
    const page = (this.offset / this.limit) + 1;

    this.form.controls.pageLimit.setValue(this.limit);
    this.form.controls.offset.setValue(this.offset);
    this.form.controls.page.setValue(page);

    this.createWatchers();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalCount) {
      this.totalPageCount = Math.ceil(changes.totalCount.currentValue / this.limit);
    }

    if (changes.limit && !changes.totalCount) {
      this.totalPageCount = Math.ceil(this.totalCount / changes.limit.currentValue);
    }
  }

  ngOnInit(): void {
    this.setupForm();
  }

}
