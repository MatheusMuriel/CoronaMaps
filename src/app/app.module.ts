import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from '@angular/material/tooltip';


// Meterial
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card';
//

import { MapsComponent } from './maps/maps.component';
import { LondrinaComponent } from './londrina/londrina.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrasilComponent } from './brasil/brasil.component';
import { ParanaComponent } from './parana/parana.component';
//import { ShareButtonsModule } from '@ngx-share/buttons';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    LondrinaComponent,
    AgradecimentoComponent,
    BrasilComponent,
    ParanaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FontAwesomeModule,
    MatTooltipModule,
    NgbModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
