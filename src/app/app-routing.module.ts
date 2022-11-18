import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmptyRouteComponent} from "./empty-route/empty-route.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guard/auth.guard";
import {MainContainerComponent} from "./main-container/main-container.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-transaction/all',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: MainContainerComponent,
    children: [
      {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: () => import('./main-container/main-container.module').then(m => m.MainContainerModule)
      }
    ]
  },
  {
    path: '404',
    component: EmptyRouteComponent
  },
  {
    path: '**',
    redirectTo: '404'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
