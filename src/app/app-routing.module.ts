
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent, data: { breadcrumbs: 'Dashboard'}},
  { path: 'Employee', data: { breadcrumbs: 'Employee' },
children:[
  { path: '', component: EmployeeComponent, data: { breadcrumbs: 'Employee Details' } },
  {  path:':EmployeeDetails', component: EmployeeDetailsComponent, data:{breadcrumbs:'Employee Details'}}
]},
  { path: '**', component: PageNotFoundComponent,data: { breadcrumbs: 'Page Not Found' } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),McBreadcrumbsModule.forRoot()],
  exports: [RouterModule, McBreadcrumbsModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent, PageNotFoundComponent]

