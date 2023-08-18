import { Injectable } from '@angular/core';
import { IUserInteface } from '../models/user/user.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  user$ = new Subject<IUserInteface | null>();

  public setLocalStorage<T>(key: string, data: T) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch(err) {
      console.error(err);
    }
  }

  public getUserFromLocalStorage(): IUserInteface | null {
    const user = localStorage.getItem('user');
    if (user) {
      const parseUser = JSON.parse(user) as IUserInteface;
      this.user$.next(parseUser);
      return parseUser;
    }
    return null;
  }

  public removeFromLocalStorage(key: string): void {
    try {
      localStorage.removeItem(key);
      this.user$.next(null);
    } catch(err) {
      console.error(err);
    }
  }
}
