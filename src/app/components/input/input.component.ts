import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

    public inputControl: FormControl = null;
    
    @Output() public emitValue: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    public createControl(): void {
        this.inputControl = new FormControl(null, Validators.pattern(/[0-9]/));

        this.inputControl.valueChanges.subscribe( val => {
            console.log('emit')
            this.emitValue.emit(val);
        });
    }

    public cleanInput(): void {
        this.inputControl.reset();
    }

    ngOnInit() {
        this.createControl();
    }

}
