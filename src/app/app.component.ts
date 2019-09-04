import { Component } from '@angular/core';
import { OperationsService } from './operations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public showComponents:boolean = false;
  constructor(public _operationsService:OperationsService){
    this._operationsService.dataChanged$.subscribe( ()=>{
      this.showComponents = this._operationsService.isValid;
    });
    
  }
}
