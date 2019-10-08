# Angular Code Challenge

## The Challenge
Using the `date`, `input`, `multiply` and `pow` components, implement the following behaviors:

### Input Component
The `Input Component` must __Validate__ (positive Integers only) user captured data as well implement the following behaviors:
* When the data entered __is valid__:
    * __Emit__ Value to subscribers.
* When the data entered is __NOT a positive Integer__
    * __Emit__ `null` to subscribers.
    * Add `is-invalid` class to __[input]__.
    * Add `invalid-feedback` to __div .error-message__.
* The "Reset" button __onClick__ must:
    * __Emit__ `null` to subscribers.
    * Clean the input __value__ as well any validation errors by removing `is-invalid` and `invalid-feedback` Classes from it's dom nodes.

### Multiply Component
Will listen data issued by `Input Component` and implement the following behaviors:
* Take __received value as multiplier__ and  __environment.multiplier as multiplicand__ to  calculate `factor` property.
* Show `factor` in component's view.

### Pow Component
Will listen data issued by `Input Component` and implement the following behaviors:
* Take __received value as base__ and  __environment.exponent as exponent__ to  calculate `power` property.
* Show `power` in component's view.

### Date Component
Will listen data issued by `Input Component` and implement the following behaviors:
* Take __received value__ as `Date Class constructor argument` to  calculate `date` property.
* Show `date` in component's view.
* Apply pipe to `date` in order to show `date` like in this example: "__Friday February 07 1986 AD__".