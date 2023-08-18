import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { LazyCardComponent } from './components/lazy-card/lazy-card.component';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  { path: ':id', component: LazyCardComponent },
]

@NgModule({
  declarations: [
    LazyCardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TranslateModule,
    SharedModule,
    MatIconModule,
    RouterModule.forChild(routes),
  ]
})
export class LazyCardModule { }
