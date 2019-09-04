import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../operations.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls:['./input.component.css']
})
export class InputComponent implements OnInit {

  //Properties
  public number:number;
  public showErrorClass:boolean; 
  constructor(private _operationService:OperationsService) {
    
   }

  ngOnInit() {

  }

  public readNumber(event){
    
    this.number = event.target.value;
    this._operationService.setNumber(this.number);    
    this.showErrorClass =  this._operationService.validateType();
  }

  public reset(){
    this.showErrorClass = false;
    this._operationService.setNumber(null);
    this.number = null;
  } 

}
