import { Component, OnInit, Input } from '@angular/core';
import { MediatorDataService } from 'src/app/services/mediator-data.service';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
})
export class ChildMultiplyComponent implements OnInit {
  result = 0;
  showComponent = false;

  constructor(private dataService: MediatorDataService) { }

  ngOnInit() {
    this.dataService.valueSubjectObservable$.subscribe(value => {
      this.result = value * 2;
    });

    this.dataService.incorrectValueObservable$.subscribe(value => {
      this.showComponent = value;
    });
  }
}
