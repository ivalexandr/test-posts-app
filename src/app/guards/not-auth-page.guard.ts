import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LocalStorageService } from "../services/local-storage.service";

@Injectable({ providedIn: 'root' })
export class NotAuthPageGuard implements CanActivate {
	constructor(
		private readonly router: Router,
		private readonly localStorageService: LocalStorageService
	) {}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
	    const user = this.localStorageService.getUserFromLocalStorage();
	    if (user) {
	    	void this.router.navigate(['/']);
	    	return false;
	    }
	    return true;
	}
}
