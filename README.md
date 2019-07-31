# Angular Code Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## The Challenge
Using the `date`, `input`,`multiply` and `pow` components, implement the following behavior:

### `Input Component`
It will be in charge of capturing and issuing user data due to the following restrictions:
* validate that only number is accepted in the input when the data entered is not a number
  *  Add `is-invalid` class to [input].
  * show `div.error-message` element and add `invalid-feedback` to it.
* the "Reset" button will be able to clean the input and also clean validation error is any.

### `Multiply Component`
It will receive the value emitted by the `Input Component` and implement the following behaviors:
* If the value to be received is not a number, do not draw this component in the DOM.
* multiply the value received by 2 (n*2) and display it in the component.


### `Pow Component`:
It will receive the value issued by the `Input Component` and implement the following behaviors:
* If the value to be received is not a number, do not draw this component in the DOM.
* raise the value received by its same value (n ^ n) and display it in the component.v

### `Date Component`
Receive the value issued by the `Input Component` and implement the following behaviors:
* If the value to be received is not a number, do not draw this component in the DOM.
* convert the received value to a date in the format 'YYYY / MM / DD HH: MM' and display it in the component.
