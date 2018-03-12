import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class SiteComponentsService {
  constructor(private http:HttpClient) { }
  siteCompoents = {};

  getSiteComponents(){
    this.http.get("http://localhost:8081/api/siteComponents/all", {withCredentials:true}).subscribe(data =>{
      for(let i=0; i<data.length; i++) {
        this.siteCompoents[data[i].component] = data[i].content;
      }
    })
  }
}
