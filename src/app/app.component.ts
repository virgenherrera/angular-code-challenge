import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected displayComponents: boolean;

  public mutiplyValue: number;
  public powValue: number;
  public dateIsoValue: any;

  constructor() {
    this.displayComponents = false;
  }

  /**
   * @method showComponents
   * Displays components based on value only if is a valid number
   * @param event The event param with properties to display the components and the value.
   * @return Number
   */
  protected showComponents(event: any) {
    const { displayComponents, numberValue } = event;
    this.displayComponents = displayComponents;
    if (this.displayComponents) {
      this.mutiplyValue = this.calculateMultiply(numberValue);
      this.powValue = this.calculatePow(numberValue);
      this.dateIsoValue = this.setDateIso(numberValue);
    }
  }

  /**
   * @method calculateMultiply
   * Computes value multiplying it by 2
   * @param value The value param
   * @return Number
   */
  private calculateMultiply(value: number): number {
    const multiplyBy = 2;
    return value * multiplyBy;
  }

  /**
   * @method calculatePow
   * Computes value pow it by itself.
   * @param value The value param
   * @return Number
   */
  private calculatePow(value): number {
    return Math.pow(value, value);
  }

  /**
   * @method setDateIso
   * Computes value to Date using ISOString.
   * @param value The value param
   * @return Date
   */
  private setDateIso(value) {
    return moment(value, 'YY/MM/DD HH:MM').toISOString();
  }
}
