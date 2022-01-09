import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DataService {
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(resource: any): Observable<any> {
    return this.http.post<any>(this.url, JSON.stringify(resource))
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: { id: string; }): Observable<any> {
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .pipe( 
        catchError(this.handleError)
      );
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}