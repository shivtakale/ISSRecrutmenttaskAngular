import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FairDetailsComponent } from './shared/component/fair-details/fair-details.component';
import { FairListComponent } from './shared/component/fair-list/fair-list.component';
import { FairCardComponent } from './shared/component/fair-list/fair-card/fair-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FairDetailsComponent,
    FairListComponent,
    FairCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
