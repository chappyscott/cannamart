import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared/shared.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { WrestlerData } from './wrestler-data';
import { WrestlerComponent } from './wrestler-list.component';
import { WrestlerEditComponent } from './wrestler-edit.component';
import { WrestlerDetailComponent } from './wrestler-detail.component';

import { WrestlerEditGuard } from './wrestler-edit.guard';
import { WrestlerDataListComponent } from './wrestler-datalist.component';
import { reducer, WRESTLER } from './state/wrestler.reducer';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(WrestlerData),
    StoreModule.forFeature(WRESTLER, reducer),
    RouterModule.forChild([
      { path: 'wrestlers', component: WrestlerComponent },
      { path: 'wrestlers/data', component: WrestlerDataListComponent },
      { path: 'wrestlers/:id', component: WrestlerDetailComponent },
      {
        path: 'wrestlers/:id/edit',
        canDeactivate: [WrestlerEditGuard],
        component: WrestlerEditComponent
      },
    ])
  ],
  declarations: [
    WrestlerComponent,
    WrestlerEditComponent,
    WrestlerDetailComponent,
    WrestlerDataListComponent
  ]
})
export class WrestlerModule { }
