import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
})
export class ChildMultiplyComponent {
  @Input('resultValue') protected value: number;
}
