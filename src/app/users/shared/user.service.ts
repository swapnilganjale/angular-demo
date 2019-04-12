import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user.model';
import { JwtService } from 'src/app/core/services/jwt.service';



@Injectable()
export class UserService {

  private apiUrl = '/user/users';

  constructor(private http: HttpClient,private jwtService :JwtService) {

   }

  saveUser(user: User): Observable<User> {
    var t=`37e39c85-cd2a-4686-b770-85c63fd14c49`;

    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + t);

         const httpOptions = {
           headers: headers_object
         };

     return this.http.post<User>(this.apiUrl, user, httpOptions).pipe(
      tap((user: User) => this.log(`added`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl+'/getAllUsers').pipe(
        tap(users => this.log(`fetched getAllUsers`)),
        catchError(this.handleError('getAllUsers', []))
      );
  }

  /** GET hero by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<User>(`getHero id=${id}`))
    );
  }

  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<User>(url).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('delete user'))
    );
  }

  /** PUT: update the hero on the server */
  updateUser(user: User): Observable<any> {
    return this.http.put(this.apiUrl, user).pipe(
      tap(_ => this.log(`updated hero id=${user.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
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
