import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserInteface } from 'src/app/models/user/user.interface';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user$ = this.localStorageService.user$;

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
      this.localStorageService.getUserFromLocalStorage();
  }

  signOut() {
    this.localStorageService.removeFromLocalStorage('user');
    this.router.navigate(['/auth']);
  }

  get user():IUserInteface | null {
    return this.localStorageService.getUserFromLocalStorage();
  }
}
