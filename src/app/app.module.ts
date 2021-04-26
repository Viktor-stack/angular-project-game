import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FieldPlayGameComponent } from './components/Field/field-play-game/field-play-game.component';
import { AlertComponent } from './util/alert/alert.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FieldPlayComponent } from './components/Field/field-play-game/field-play/field-play.component';


@NgModule({
  declarations: [
    AppComponent,
    FieldPlayGameComponent,
    AlertComponent,
    FieldPlayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
