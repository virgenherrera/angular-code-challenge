import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    public value = null;

    public changeValue(val): void {
        console.log('VAL:', val)
        if (!/[0-9]/.test(val)) {
            this.value = null
        } else {
            this.value = parseInt(val);
        }

    }
}
