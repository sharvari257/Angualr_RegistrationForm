import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component'
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {path: "forms", component: FormsComponent },
  { path: '', redirectTo:'/forms', pathMatch: 'full'},
  {path: "register", component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
