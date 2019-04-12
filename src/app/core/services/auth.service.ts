import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../users/shared/user.model';


@Injectable()
export class AuthService {

  private loginUrl = '/uaa/oauth/token';
  private signUrl = '/register';

  constructor(private http: HttpClient) { }

  login(user: Object): Observable<User> {
    return this.http.post<User>(this.loginUrl, user).pipe(
      tap((user: User) => this.log(`login Success`)),
      catchError(this.handleError<User>('login'))
    );
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(this.signUrl, user).pipe(
      tap((user: User) => this.log(`signUp Success`)),
      catchError(this.handleError<User>('signUp'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
