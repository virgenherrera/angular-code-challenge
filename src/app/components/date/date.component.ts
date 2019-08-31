import { Component, OnInit } from '@angular/core';
import { MediatorDataService } from 'src/app/services/mediator-data.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
})
export class ChildDateComponent implements OnInit {
  result = '';
  showComponent = false;

  constructor(private dataService: MediatorDataService) { }

  ngOnInit() {
    this.dataService.valueSubjectObservable$.subscribe(value => {
      this.result = new Date(value).toISOString();
    });

    this.dataService.incorrectValueObservable$.subscribe(value => {
      this.showComponent = value;
    });
  }

}
