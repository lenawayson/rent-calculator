import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component'
import {ResultsComponent} from './results/results.component';


const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'results/:id', component: ResultsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
