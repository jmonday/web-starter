import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private HOST = 'http://backend.app.local';

  constructor(private httpClient: HttpClient) {}

  public get(endpoint: string) {
    return this.httpClient.get(this.HOST + endpoint);
  }
}
