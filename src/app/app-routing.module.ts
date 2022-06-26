import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {path:'', redirectTo:'signIn', pathMatch:'full'},
  {path:'profile', component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'signIn', component:SignInComponent},

  {path:'**' , redirectTo:'signIn'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
