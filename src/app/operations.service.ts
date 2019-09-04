import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  public _number:number;
  public isValid:boolean;
  constructor() { 

  }

  

  setNumber(number){
    this._number = number;
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
