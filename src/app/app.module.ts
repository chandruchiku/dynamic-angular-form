import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { LineContextComponent } from './line/line-context/line-context.component';
import { ChartContextItemComponent } from './line/chart-context-item/chart-context-item.component';


import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
   declarations: [
      AppComponent,
      LineComponent,
      LineContextComponent,
      ChartContextItemComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      InputsModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
