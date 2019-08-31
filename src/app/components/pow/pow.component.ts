import { Component, OnInit } from '@angular/core';
import { MediatorDataService } from 'src/app/services/mediator-data.service';

@Component({
  selector: 'app-pow',
  templateUrl: './pow.component.html',
})
export class ChildPowComponent implements OnInit {
  result = 0;
  showComponent = false;

  constructor(private dataService: MediatorDataService) { }

  ngOnInit() {
    this.dataService.valueSubjectObservable$.subscribe(value => {
      this.result = Math.pow(value, value);
    });

    this.dataService.incorrectValueObservable$.subscribe(value => {
      this.showComponent = value;
    });
  }

}
