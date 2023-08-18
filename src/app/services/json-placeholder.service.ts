import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPostInteface } from '../models/post/post.interface';

@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private readonly http: HttpClient) {}

  fetchAllPosts(): Observable<IPostInteface[]> {
    const url = new URL('posts', this.baseUrl);
    return this.http.get<IPostInteface[]>(url.href)
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(() => error);
        }),
      );
  }

  fetchPostById(id: string): Observable<IPostInteface> {
    const url = new URL(`posts/${id}`, this.baseUrl);
    return this.http.get<IPostInteface>(url.href)
      .pipe(
        catchError((error) => {
          console.error(error);
          return throwError(() => error);
        }),
      );
  }
}
