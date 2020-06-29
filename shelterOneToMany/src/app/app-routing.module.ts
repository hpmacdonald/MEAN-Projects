import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetHomeComponent } from './Pet/pet-home/pet-home.component';
import { PetViewComponent } from './Pet/pet-view/pet-view.component';
import { PetCreateComponent } from './Pet/pet-create/pet-create.component';
import { PetListComponent } from './Pet/pet-list/pet-list.component';
import { PetEditComponent } from './Pet/pet-edit/pet-edit.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './Pet/home/home.component';
import { ToyCreateComponent } from './Toy/toy-create/toy-create.component';

const enableTracing = false && !environment.production;

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pets',
    pathMatch: 'full',
  },
{
path: 'pets',
children: [
  {
    path: '',
    component: PetListComponent
  },
  {
      path: ':id/edit',
      component: PetEditComponent
    },
    {
      path: 'create',
      component: PetCreateComponent
    },
    {
      path: ':id',
      component: PetViewComponent
    },
    {
      path: ':id/toys',
      component: ToyCreateComponent
    }
  ]
}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
