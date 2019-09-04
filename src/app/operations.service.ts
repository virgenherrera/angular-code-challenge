import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public _number:number;
  public isValid:boolean;
  public dataChanged$: Subject<any> = new Subject();
  constructor() { 

  }

   //It will return true if the value is a number
   validateType(): boolean {
    try {     
      if(!this._number){
        this.isValid = false;        
      }
      else{
        this.isValid = !isNaN(this._number);              
      } 
      return this.isValid;     
    } catch (ex) {
      console.log("Here we have an error: ", ex.mesagge);
      return false;

    }
  }

  

  setNumber(number){
    this._number = number;
    this.validateType();
    this.dataChanged$.next();
  }

  multiply():number{    
    if(this.isValid){
      return this._number*2;
    }
    else{
      return 0;
    }    
  }

  getNumber():number{
    return this._number;
  }

  pow():number{    
    if(this.isValid){
      return this._number*this._number;
    }
    else{
      return 0;
    }

    
  }

  date():string{
    if(this.isValid && this._number){
      return new Date(this._number.toString()).toISOString();
    }
    else{
      return '';
    }
    
  }
}
