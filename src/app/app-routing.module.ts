import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AudidisplayComponent } from './core/audidisplay/audidisplay.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
 // {path: 'audidisplay'}, component: AudidisplayComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
