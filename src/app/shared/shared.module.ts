import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { PostCardComponent } from './post-card/post-card.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    AuthFormComponent,
    PostCardComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    TranslateModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  exports: [
    AuthFormComponent,
    PostCardComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
