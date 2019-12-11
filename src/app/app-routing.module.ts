import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  {
    path: 'get',
    component: GetAllComponent
  },
  {
    path: 'get/:id',
    component: DetailsComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'get/:id/edit',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
