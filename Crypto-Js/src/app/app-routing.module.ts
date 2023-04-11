import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { RegisteredComponent } from './registered/registered.component';
import { ShowDataComponent } from './show-data/show-data.component';

const routes: Routes = [
  {path:'' , pathMatch:'full',component:FormComponent },
  {path:'registered' , component:RegisteredComponent },
  {path:'showData' , component:ShowDataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
