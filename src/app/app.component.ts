import { Component } from '@angular/core';
import {HistoryService} from "./components/history/history.service";
import {HistoryDto} from "./components/history/history-dto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {

  }


  ngOnInit(){

  }


}
