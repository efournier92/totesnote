import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'http://localhost:8080/api'
  
  constructor(private http: HttpClient) { }



}
