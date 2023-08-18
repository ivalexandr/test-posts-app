import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { FeedComponent } from './components/feed/feed.component';
import { AuthGuard } from '../guards/auth.guard';
import { NotAuthPageGuard } from '../guards/not-auth-page.guard';

const routes: Routes = [
  { path: '', redirectTo: '/feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent, canActivate: [AuthGuard] },
  { path:'card', loadChildren: () => import('../lazy-card/lazy-card.module').then(m => m.LazyCardModule), canActivate: [AuthGuard] },
  { path: 'auth', component: AuthComponent, canActivate: [NotAuthPageGuard] }
];

@NgModule({
  declarations: [
    AuthComponent,
    FeedComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    RouterModule.forChild(routes),
  ]
})
export class PagesModule { }
