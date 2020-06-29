import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetHomeComponent } from './Pet/pet-home/pet-home.component';
import { PetCreateComponent } from './Pet/pet-create/pet-create.component';
import { PetViewComponent } from './Pet/pet-view/pet-view.component';
import { PetListComponent } from './Pet/pet-list/pet-list.component';
import { HomeComponent } from './Pet/home/home.component';
import { PetEditComponent } from './Pet/pet-edit/pet-edit.component';
import { ToyCreateComponent } from './Toy/toy-create/toy-create.component';



@NgModule({
  declarations: [
    AppComponent,
    PetHomeComponent,
    PetCreateComponent,
    PetViewComponent,
    PetListComponent,
    HomeComponent,
    PetEditComponent,
    ToyCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
