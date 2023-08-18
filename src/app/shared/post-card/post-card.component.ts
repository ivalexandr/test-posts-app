import { Component, Input } from '@angular/core';
import { IPostInteface } from 'src/app/models/post/post.interface';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
  @Input() post!: IPostInteface;
}
