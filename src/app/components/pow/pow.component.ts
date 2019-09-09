import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pow',
  templateUrl: './pow.component.html',
})
export class ChildPowComponent {
  @Input('resultValue') protected value: number;
}
