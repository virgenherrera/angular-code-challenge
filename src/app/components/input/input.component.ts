import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../../operations.service';
import { FormsModule } from '@angular/forms';

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
    this._operationService.setNumber(this.number);    
    this.showErrorClass =  this._operationService.validateType();
  }

  public reset(){
    this.showErrorClass = false;
    this.number = null;
    this._operationService.setNumber(''); 
       
  } 

}
