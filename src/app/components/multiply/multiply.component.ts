import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../operations.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
})
export class ChildMultiplyComponent implements OnInit {

  public result:number;
  constructor(private operationsService: OperationsService) {
    this.result = this.operationsService.multiply();
    this.operationsService.dataChanged$.subscribe( ()=>{
      this.result = this.operationsService.multiply();
    });
    
  }

  ngOnInit() {
  }

}
