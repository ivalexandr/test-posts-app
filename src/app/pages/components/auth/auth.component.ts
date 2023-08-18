import { Component } from '@angular/core';
import { fadeInOutAnimation } from 'src/app/animations/fade-in-out.animation';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [fadeInOutAnimation]
})
export class AuthComponent {

}
