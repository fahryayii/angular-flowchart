import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DiagramModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
