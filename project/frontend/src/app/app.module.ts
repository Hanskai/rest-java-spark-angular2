import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2TableModule } from 'ng2-table';

import AllComponents, { AppComponent } from './';
import AllServices from './shared';
import { FrontendRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AllComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    Ng2TableModule,
    FrontendRoutingModule
  ],
  providers: [
    AllServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
