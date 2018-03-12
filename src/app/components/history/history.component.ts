import { Component, OnInit } from '@angular/core';
import {HistoryService} from "./history.service";
import {HistoryDto} from "./history-dto";
import {AppService} from "../../app.service";
import {History} from "./history";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyList:HistoryDto[];
  history:History = new History(3213,3213,"sadasdEN","dasdaEN","dasdasRO","dasdasRO");

  constructor(private historyService:HistoryService, private appService:AppService) {
  }

  testSave(){
    this.historyService.save(this.history).subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit() {
    console.log(this.appService.getCurrentUser());
    this.historyService.getAll().subscribe(data => {
      console.log(data);
      this.historyList = data;
      console.log(this.historyList);
    });
  }

}
