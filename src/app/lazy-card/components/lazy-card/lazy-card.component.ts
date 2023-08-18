import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { fadeInOutAnimation } from 'src/app/animations/fade-in-out.animation';
import { IPostInteface } from 'src/app/models/post/post.interface';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';

@Component({
  selector: 'app-lazy-card',
  templateUrl: './lazy-card.component.html',
  styleUrls: ['./lazy-card.component.scss'],
  animations: [fadeInOutAnimation]
})
export class LazyCardComponent implements OnInit, OnDestroy {
  post: IPostInteface | null = null;
  postIsLoading = true;
  destroy$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly jsonPlaceholderService: JsonPlaceholderService,
  ) {}

  ngOnInit(): void {
      this.fetchPost();
  }

  private fetchPost() {
    this.route.params
        .pipe(takeUntil(this.destroy$))
        .subscribe(params => {
          const id = params['id'] as string | undefined;
          if (id) {
            this.jsonPlaceholderService.fetchPostById(id)
              .pipe(takeUntil(this.destroy$))
              .subscribe((post) => {
                this.postIsLoading = false;
                this.post = post;
              });
          }
      });
  }

  ngOnDestroy(): void {
      this.destroy$.next(null);
      this.destroy$.complete();
  }
}
