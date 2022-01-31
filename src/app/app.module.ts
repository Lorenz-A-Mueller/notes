import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CreatedNoteComponent } from './created-note/created-note.component';
import { ButtonComponent } from './button/button.component';
import { GreenTextDirective } from './directives/greenText.directive';
import { BetterGreenTextDirective } from './directives/better-green-text.directive';
import { InputDirectiveDirective } from './directives/inputDirective.directive';
import {InteractiveDirective} from './directives/interactive.directive';
import { IfDivisibleByThreeDirective } from './directives/if-divisible-by-three.directive'

@NgModule({
  declarations: [
    AppComponent,
    CreatedNoteComponent,
    ButtonComponent,
    GreenTextDirective,
    BetterGreenTextDirective,
    InputDirectiveDirective,
    InteractiveDirective,
    IfDivisibleByThreeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
