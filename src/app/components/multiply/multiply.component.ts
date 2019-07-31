import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-multiply',
    templateUrl: './multiply.component.html',
})
export class ChildMultiplyComponent implements OnChanges {

    @Input() public num: string;

    public value: number;

    constructor() { }


    ngOnChanges() {
        if (!/[0-9]/.test(this.num))
            this.value = null;
        else
            this.value = parseInt(this.num) * 2;
    }

}
