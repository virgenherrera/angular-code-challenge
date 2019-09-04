import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/operations.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class ChildDateComponent implements OnInit {

  public result:string;
  constructor(private operationsService: OperationsService) {
    this.operationsService.dataChanged$.subscribe( ()=>{
      this.result = this.operationsService.date(this.operationsService._number);
    });
  }

  ngOnInit() {
  }

}
