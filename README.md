# Angular L2 Code Challenge
Using the `date`, `input`, `multiply` and `pow` components, implement the following behaviors:

## Input Component
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

## Multiply Component
The `Input Component` must "listen" and implement the following behaviors:
* Assign `multiplicand` property from `environment.multiplicand`.
* Assign `multiplier` property from received value.
* Take __multiplier__ and  __multiplicand__ property to  calculate `factor` property.
* Show `multiplicand` in component's view.
* Show `multiplier` in component's view.
* Show `factor` in component's view.

## Pow Component
The `Input Component` must "listen" and implement the following behaviors:
* Assign `exponent` property from `environment.exponent`.
* Assign `base` property from received value.
* Take __base__ and  __exponent__ to  calculate `power` property.
* Show `base` in component's view.
* Show `exponent` in component's view.
* Show `power` in component's view.

## Date Component
The `Input Component` must "listen" and implement the following behaviors:
* Declare `format` property with a proper format to match desired __date Format__ (e.g. "__Friday February 07 1986__").
* Take __received value__ as `Date Class constructor argument` to  calculate `date` property.
* Show `format` in component's view.
* Show `date` in component's view and apply date format from `format` property.

## App level Requirement
* Do not show `Multiply`, `Pow` nor `Date` Components When invalid data is issued by `Input Component`.

## Extra Points
* Create a __pull request__ from your __own fork__ of this (already answered) challenge to [original](https://github.com/virgenherrera/angular-code-challenge) repository.
* Publish this (already answered) challenge as __GitHub page__ in your own fork.