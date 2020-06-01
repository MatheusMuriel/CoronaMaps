import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from "./maps/maps.component";
import { BrasilComponent } from "./brasil/brasil.component";


const routes: Routes = [
  {
    path:  'londrina',
    component:  MapsComponent
  },
  {
    path:  'brazil',
    component:  BrasilComponent
  },
  {
    path:  '',
    component:  BrasilComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
