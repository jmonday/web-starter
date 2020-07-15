import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { concatMap, map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private endpoint = '//backend.app.local';

  private httpOptions = {
    headers: new HttpHeaders({ Accept: 'application/json' }),
    withCredentials: true,
  };

  private userSubject: BehaviorSubject<User | null>;

  public user: Observable<User | null>;

  constructor(private http: HttpClient) {
    const userItem: string | null = localStorage.getItem('user');

    this.userSubject = new BehaviorSubject<User | null>(
      userItem ? JSON.parse(userItem) : null
    );

    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User | null {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .get(`${this.endpoint}/sanctum/csrf-cookie`, this.httpOptions)
      .pipe(
        concatMap((_) => {
          return this.http
            .post<User>(
              `${this.endpoint}/login`,
              { email, password },
              this.httpOptions
            )
            .pipe(
              map((user) => {
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);

                return user;
              })
            );
        })
      );
  }

  logout(): Observable<null> {
    return this.http
      .post<null>(`${this.endpoint}/logout`, {}, this.httpOptions)
      .pipe(
        tap((_) => {
          localStorage.removeItem('user');
          this.userSubject.next(null);
        })
      );
  }
}
