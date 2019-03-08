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
  MatTabsModule
} from '@angular/material';
import { HomeComponent } from './pages/home/home.component';
import { AnalyseComponent } from './pages/analyse/analyse.component';
import { BarDiagramComponent } from './components/bar-diagram/bar-diagram.component';
import { PieDiagrammComponent } from './components/pie-diagramm/pie-diagramm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnalyseComponent,
    BarDiagramComponent,
    PieDiagrammComponent
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
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
