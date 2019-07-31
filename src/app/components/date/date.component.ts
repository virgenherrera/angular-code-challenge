import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-date',
    templateUrl: './date.component.html',
})
export class ChildDateComponent implements OnInit {

    @Input() public aDate: number;

    public newDate: Date;

    constructor() { }

    ngOnInit() {
        if (typeof this.aDate !== 'number')
            this.aDate = null;
        else
            this.newDate= new Date(this.aDate);
    }

}
