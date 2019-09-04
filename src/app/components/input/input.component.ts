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

  public readNumber(){
    this.showErrorClass =  this.validateType();
  }

  public reset(){
    this.showErrorClass = false;
    this._operationService.setNumber(null);
    this.number = null;
  }

  //It will return true if the value is a number
  validateType(): boolean {
    try {
      let result = false;
      result = !isNaN(this.number);
      this._operationService.setNumber(this.number);
      this._operationService.isValid = result;
      return result;
    } catch (ex) {
      console.log("Here we have an error: ", ex.mesagge);
      return false;

    }
  }

}
