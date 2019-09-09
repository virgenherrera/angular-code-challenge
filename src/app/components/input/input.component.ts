import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {

  protected isInvalid: boolean;
  protected invalidFeedbackMessage: string;
  private defaultInvalidMessage =  `Value that you entered is not a number!`;
  @Output() isNumberValid = new EventEmitter();

  /**
   * @method onResetClick
   * Reset values on click button
   */
  protected onResetClick(evt: UIEvent, element) {
    this.invalidFeedbackMessage = null;
    this.isInvalid = false;
    this.isNumberValid.emit({
      displayComponents: false,
      numberValue: null
    });
    element.value = null;
  }

  /**
   * @method validateData
   * Validates input data to be a number
   */
  protected validateData(element) {
    const { value } = element;
    if (value === null || value === '' ) {
      this.invalidFeedbackMessage = null;
      this.isInvalid = false;
      this.isNumberValid.emit({
        displayComponents: false,
        numberValue: null
      });
      return;
    }
    const regex = '\^[0-9]';
    const isNumber = value.match(regex);
    if (!isNumber) {
      this.isInvalid = true;
      this.invalidFeedbackMessage = this.defaultInvalidMessage;
    } else {
      this.isNumberValid.emit({
        displayComponents: true,
        numberValue: value
      });
      this.isInvalid = false;
      this.invalidFeedbackMessage = null;
    }
  }
}
