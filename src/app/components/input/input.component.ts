import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import { MediatorDataService } from 'src/app/services/mediator-data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {
  incorrectValueValidation = false;
  value: any;

  constructor(private dataService: MediatorDataService) {
  }

  ngOnInit() {
  }

  sendData() {
    if (isNaN(this.value)) {
      this.incorrectValueValidation = true;
      this.dataService.notifyIncorrectValue(false);
    } else {
      this.incorrectValueValidation = false;
      this.dataService.startProcess(this.value);
      this.dataService.notifyIncorrectValue(true);
      this.value = '';
    }
  }
}
