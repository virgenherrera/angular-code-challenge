import { Component, OnInit } from '@angular/core';
import { OperationsService } from 'src/app/operations.service';

@Component({
  selector: 'app-pow',
  templateUrl: './pow.component.html',
})
export class ChildPowComponent implements OnInit {
  public result:number;
  constructor(private operationsService: OperationsService) {
    this.operationsService.dataChanged$.subscribe( ()=>{
      this.result = this.operationsService.pow(this.operationsService._number);
    });
  }

  ngOnInit() {
  }

}
