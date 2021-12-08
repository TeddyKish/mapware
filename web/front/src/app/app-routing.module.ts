import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyzePageComponent } from './components/analyze-page/analyze-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [

  {path: 'analyze', component: AnalyzePageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', redirectTo: "/dashboard"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }