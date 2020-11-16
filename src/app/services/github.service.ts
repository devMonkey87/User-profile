import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResults, User} from './../interfaces/interfaces';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class GithubService {
  readonly API_URL = 'https://api.github.com';
  readonly WHAT = ['repositories', 'commits', 'code', 'issues', 'users'];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users`);
  }

  search<T>(what: string, params: HttpParams): Observable<SearchResults<T>> {
    if (this.WHAT.indexOf(what) === -1) {
      return Observable.throw(
        `Searching for ${what} is not supported. The available types are: ${this.WHAT.join(
          ', '
        )}.`
      );
    }
    return this.http.get<SearchResults<T>>(`${this.API_URL}/search/${what}`, {
      params,
    });
  }
}
