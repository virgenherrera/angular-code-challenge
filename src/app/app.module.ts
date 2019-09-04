import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ChildMultiplyComponent } from './components/multiply/multiply.component';
import { ChildPowComponent } from './components/pow/pow.component';
import { ChildDateComponent } from './components/date/date.component';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ChildMultiplyComponent,
    ChildPowComponent,
    ChildDateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
