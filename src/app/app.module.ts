import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSliderModule
} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { AnalyseComponent } from './pages/analyse/analyse.component';
import { BarDiagramComponent } from './components/bar-diagram/bar-diagram.component';
import { PieDiagrammComponent } from './components/pie-diagramm/pie-diagramm.component';
import { MoneyPipe } from './pipes/money/money.pipe';
import { ValueRowComponent } from './components/value-row/value-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalyseComponent,
    BarDiagramComponent,
    PieDiagrammComponent,
    MoneyPipe,
    ValueRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
