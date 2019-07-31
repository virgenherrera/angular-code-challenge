import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'app-pow',
    templateUrl: './pow.component.html',
})
export class ChildPowComponent implements OnChanges {

    @Input() public num: string;
    public value: number;

    constructor() { }

    ngOnChanges() {
        if (!/[0-9]/.test(this.num))
            this.value = null;
        else
            this.value = parseInt(this.num) ** 2;
    }

}
