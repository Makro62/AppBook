import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './pages/edit/edit.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent 
  },
  {
    path: "home/:id",
    component:HomeComponent
  },
  {
    path: "home/edit/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
