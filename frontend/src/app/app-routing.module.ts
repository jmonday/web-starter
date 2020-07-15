import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { ProfileComponent } from './profile';
import { WidgetsComponent } from './widgets';
import { AuthorizationGuardGuard } from './_guards';

const routes: Routes = [
  { path: 'widgets', component: WidgetsComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthorizationGuardGuard],
  },
  // Catchall route
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
