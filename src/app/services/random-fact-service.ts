import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type RequestedFact = {contents: {quotes: {quote: string}[]}}

@Injectable({
  providedIn: 'root'
})
export class RandomFactService{

  constructor(private http: HttpClient) { }

  uri = 'https://quotes.rest/qod'

  getFact(): Observable<any> {
    console.log(this.http.get<RequestedFact>(this.uri))
    return this.http.get(this.uri)
  }

}
