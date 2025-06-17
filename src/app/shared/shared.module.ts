import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/core/loader/loader.component';
import { HelpDropdownComponent } from './components/core/help-dropdown/help-dropdown.component';
import { ZeroStateWithIllustrationComponent } from './components/core/zero-state-with-illustration/zero-state-with-illustration.component';
import { HeaderComponent } from './components/core/header/header.component';
import { ProfileDropdownComponent } from './components/core/profile-dropdown/profile-dropdown.component';
import { SimpleSearchTextComponent } from './components/helpers/simple-search-text/simple-search-text.component';
import { PaginatorComponent } from './components/helpers/paginator/paginator.component';
import { ClientCardComponent } from './components/home/client-card/client-card.component';
import { ClientTableComponent } from './components/home/client-table/client-table.component';

// External libraries
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TooltipModule } from 'primeng/tooltip';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { TrimCharacterPipe } from './pipes/trim-character.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FyCurrencyPipe } from './pipes/fy-currency.pipe';
import { TranslocoModule } from '@jsverse/transloco';


@NgModule({
  declarations: [
    LoaderComponent,
    HelpDropdownComponent,
    ZeroStateWithIllustrationComponent,
    HeaderComponent,
    ProfileDropdownComponent,
    SimpleSearchTextComponent,
    PaginatorComponent,
    ClientCardComponent,
    ClientTableComponent,
    TrimCharacterPipe,
    FyCurrencyPipe
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    TooltipModule,
    SkeletonModule,
    TableModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    IconSpriteModule.forRoot({ path: 'assets/sprites/sprite.svg' }),
    TranslocoModule
  ],
  exports: [
    LoaderComponent,
    HeaderComponent,
    ClientCardComponent,
    ClientTableComponent,
    ZeroStateWithIllustrationComponent,
    PaginatorComponent,
    TrimCharacterPipe,
    FyCurrencyPipe,
    TranslocoModule
  ]
})
export class SharedModule { }
