import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class ChildDateComponent {
  @Input('resultValue') public value;
}
