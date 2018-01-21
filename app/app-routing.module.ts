import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LgnComponent } from './login/lgn/lgn.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { ErrComponent } from './err/err/err.component';
import { RegisterComponent } from './register/register/register.component';
import { ViewComponent } from './view/view/view.component';

const routes: Routes = [
  { path : '',component : LgnComponent },
  { path :'dash/:usNm',component : DashboardComponent },
  { path : 'err',component : ErrComponent },
  { path :'register',component:RegisterComponent},
  { path:'view',component:ViewComponent},
  { path : '**',component : ErrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
