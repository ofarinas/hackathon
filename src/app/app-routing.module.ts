import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { HomeComponent } from './pages/home/home.component';
import { AnalyseComponent } from './pages/analyse/analyse.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'analyse',
    component: AnalyseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
