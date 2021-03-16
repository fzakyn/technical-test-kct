import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/components/login/login.component";
import { RegisterComponent } from "./auth/components/register/register.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const appRoutingModule = RouterModule.forRoot(routes);
