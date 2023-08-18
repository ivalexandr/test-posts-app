import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/animations/fade-in-out.animation';
import { IPostInteface } from 'src/app/models/post/post.interface';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  animations: [fadeInOutAnimation]
})
export class FeedComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  posts: IPostInteface[] | null = null;
  postsIsLoading =  true;
  constructor(private readonly jsonPlaceholder: JsonPlaceholderService) {}

  ngOnInit(): void {
      this.fetchPosts();
  }

  private fetchPosts() {
    this.jsonPlaceholder.fetchAllPosts()
        .pipe(
          takeUntil(this.destroy$)
        )
        .subscribe(posts => {
          this.postsIsLoading = false;
          this.posts = posts;
        });
  }

  ngOnDestroy(): void {
      this.destroy$.next(null);
      this.destroy$.complete();
  }
}
