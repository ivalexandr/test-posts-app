import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserInteface } from 'src/app/models/user/user.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  showPassword = false;

  authForm = this.fb.group({
    login: new FormControl<string>('', { 
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3), Validators.pattern(/[a-zA-Z]/)] 
    }),
    password: new FormControl<string>('', { 
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(5), Validators.pattern(/^(?=.*\d)[a-zA-Z\d]+$/)] }),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
    ) {}

  get invalidForm() {
    return this.authForm.invalid;
  }

  get login() {
    return this.authForm.controls.login;
  }

  get password() {
    return this.authForm.controls.password;
  }

  submit() {
    const user: IUserInteface = {
      login: this.login.value,
      password: this.password.value,
      token: Date.now(),
    };

    this.localStorageService
      .setLocalStorage<IUserInteface>('user', user);

    void this.router.navigate(['/']);
  }
}
