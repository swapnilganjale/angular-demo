import { Injectable } from '@angular/core';
import { Task1 } from './task1';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Task1Service {

  private apiUrl = '/task1/task1';

  constructor(private http: HttpClient) { }

  getTask(): Observable<Task1[]> {
    return this.http.get<Task1[]>(this.apiUrl+'/getAllTask1s').pipe(
        tap(users => this.log(`fetched getAllTask`+JSON.stringify(users) )),
        catchError(this.handleError('getAllTask', []))
      );
  }

  addTask1(task1: Task1): Observable<Task1> {
    return this.http.post<Task1>(this.apiUrl+"/add", task1).pipe(
      tap((task1: Task1) => this.log(`added`)),
      catchError(this.handleError<Task1>('addtask1'))
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
