import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ActivateScreenComponent} from './components/activate-screen/activate-screen.component';
import {AnalyzeScreenComponent} from './components/analyze-screen/analyze-screen.component';
import {CreateFilterScreenComponent} from './components/create-filter-screen/create-filter-screen.component';
import {CreateSurveyScreenComponent} from './components/create-survey-screen/create-survey-screen.component';
import {ForgotPassScreenComponent} from './components/forgot-pass-screen/forgot-pass-screen.component';
import {GratificationScreenComponent} from './components/gratification-screen/gratification-screen.component';
import {HomeScreenComponent} from './components/home-screen/home-screen.component';
import {LoginScreenComponent} from "./components/login-screen/login-screen.component";
import {NaviBarComponent} from './components/navi-bar/navi-bar.component';
import {OwnerSurveyScreenComponent} from './components/owner-survey-screen/owner-survey-screen.component';
import {PersonalScreenComponent} from './components/personal-screen/personal-screen.component';
import {RegisterScreenComponent} from './components/register-screen/register-screen.component';
import {ResetPasswordScreenComponent} from './components/reset-password-screen/reset-password-screen.component';
import {CreateQueryScreenComponent} from './components/create-query-screen/create-query-screen.component';
import {ResearchScreenComponent} from './components/research-screen/research-screen.component';
import {AdminScreenComponent} from './components/admin-screen/admin-screen.component';

const routes: Routes = [
  {path: '', component: LoginScreenComponent},
  {path: 'reg', component: RegisterScreenComponent},
  {path: 'fp', component: ForgotPassScreenComponent},
  {path: 'acc/:key', component: ActivateScreenComponent},
  {path: 'res/:key', component: ResetPasswordScreenComponent},
  {path: 'home', component: HomeScreenComponent},
  {path: 'person', component: PersonalScreenComponent},
  {path: 'cs', component: CreateSurveyScreenComponent},
  {path: 'an/:id', component: AnalyzeScreenComponent},
  {path: 'grat', component: GratificationScreenComponent},
  {path: 'sl', component: OwnerSurveyScreenComponent},
  {path: 'cf/:id', component: CreateFilterScreenComponent},
  {path: 'cq/:id', component: CreateQueryScreenComponent},
  {path: 'r/:id', component: ResearchScreenComponent},
  {path: 'admin', component: AdminScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [LoginScreenComponent, NaviBarComponent, RegisterScreenComponent, ForgotPassScreenComponent
  , ActivateScreenComponent, ResetPasswordScreenComponent, HomeScreenComponent, PersonalScreenComponent
  , CreateQueryScreenComponent, ResearchScreenComponent, CreateSurveyScreenComponent, CreateFilterScreenComponent
  , AnalyzeScreenComponent, GratificationScreenComponent, OwnerSurveyScreenComponent, AdminScreenComponent];
