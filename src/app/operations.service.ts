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
      this.isValid = !isNaN(this._number);
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

  multiply(number):number{
    this._number = number*2;
    return this._number;
  }

  getNumber():number{
    return this._number;
  }

  pow(number):number{
    this._number = number*number;
    return this._number;
  }

  date(number):string{
    return new Date(this._number.toString()).toISOString();
  }
}
