import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard'
import { NonAuthGuard } from './auth/non-auth.guard';
import { ProfileComponent } from './pages/profile/profile.component'
import { BlankComponent } from './pages/blank/blank.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component'
import { LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component'


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
     canActivate: [AuthGuard],
     canActivateChild: [AuthGuard],
     
     children:[
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'blank',
        component: BlankComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
     ]
    },
    {
      path: 'login',
      component: LoginComponent,
      canActivate: [NonAuthGuard]
    },
    {
      path: 'register',
      component: RegisterComponent,
      canActivate: [NonAuthGuard]
    },
    { path: '**', redirectTo: '' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
