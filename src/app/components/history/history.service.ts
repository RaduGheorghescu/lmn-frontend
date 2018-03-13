import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {History} from "./history";

@Injectable()
export class HistoryService {
  httpService: HttpClient;
  constructor(httpService: HttpClient) {
    this.httpService = httpService;
  }
  getAll(): Observable<any>{
    return this.httpService.get("https://lmndev.herokuapp.com/api/history", {withCredentials: true});
  }
  save(history: History):Observable<any>{
    return this.httpService.post("https://lmndev.herokuapp.com/api/history", history, {withCredentials: true});
  }

}
