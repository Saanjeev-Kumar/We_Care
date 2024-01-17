import { VaccinationRegistriesListComponent } from './components/vaccination-registries-list/vaccination-registries-list.component';
import { PlasmaDonorsListComponent } from './components/plasma-donors-list/plasma-donors-list.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { PlasmaQuizReceivalComponent } from './components/register/register-plasma-receival/plasma-quiz-receival/plasma-quiz-receival.component';
import { RegisterPlasmaReceivalComponent } from './components/register/register-plasma-receival/register-plasma-receival.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentLoginComponent } from './components/department-login/department-login.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalLoginComponent } from './components/hospital-login/hospital-login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PlasmaDonorDetailsComponent } from './components/register/plasma-donor-details/plasma-donor-details.component';
import { PlasmaDonorRegistrationSuccessComponent } from './components/register/plasma-donor-registration-success/plasma-donor-registration-success.component';
import { PlasmaQuizComponent } from './components/register/plasma-quiz/plasma-quiz.component';
import { QuizFailedComponent } from './components/register/quiz-failed/quiz-failed.component';
import { RegisterPlasmaDonationComponent } from './components/register/register-plasma-donation/register-plasma-donation.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterVaccinationComponent } from './components/register/register-vaccination/register-vaccination.component'
import { VaccineRegistrationDetailsComponent } from './components/register/register-vaccination/vaccine-registration-details/vaccine-registration-details.component';
import { ThankYouComponent } from './components/register/register-vaccination/thank-you/thank-you.component';
import { RegistrationForHospitalComponent } from './components/registration-for-hospital/registration-for-hospital.component';
import { AdminLoginForHospitalComponent } from './components/admin-login-for-hospital/admin-login-for-hospital.component';
import { AuthGuard } from './guard/auth.guard';
import { DonorDetailsComponent } from './components/admin-login/donor-details/donor-details.component';
import { ReceiverDetailsComponent } from './components/admin-login/receiver-details/receiver-details.component';
import { VaccinationRegistrationComponent } from './components/admin-login/vaccination-registration/vaccination-registration.component';
import { RegisteredComponent } from './components/register/register-plasma-receival/registered/registered.component';
import { VerifyGuard } from './guard/verify.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-plasma-donation', component: RegisterPlasmaDonationComponent },
  { path: 'plasma-quiz', component: PlasmaQuizComponent},
  { path: 'quiz-failed', component: QuizFailedComponent},
  { path: 'plasma-donor-details', component: PlasmaDonorDetailsComponent,
  canActivate:[VerifyGuard]
},
  { path: 'plasma-register-thankyou', component: PlasmaDonorRegistrationSuccessComponent},
  { path: 'register-vaccination', component: RegisterVaccinationComponent },
  { path: 'vaccine-registration-details', component: VaccineRegistrationDetailsComponent,
  canActivate:[VerifyGuard]
},
  { path: 'success', component: ThankYouComponent},
  {path: 'register-plasma-receival',component: RegisterPlasmaReceivalComponent},
  {path: 'plasma-receiver-data',component :PlasmaQuizReceivalComponent,
  canActivate:[VerifyGuard]
},
  {path: 'department-login', component: DepartmentLoginComponent},
  { path: 'department-login', component: DepartmentLoginComponent },
  { path: 'registration-for-hospital', component:RegistrationForHospitalComponent },
  {path:'registered',component:RegisteredComponent},
  { path: 'admin-login-for-hospital', component: AdminLoginForHospitalComponent},
  {
    path: 'hospital-login', component: HospitalLoginComponent,
    children:[
      {path: 'plasma-donors-list',component:PlasmaDonorsListComponent},
      {path: 'vaccination-registries-list',component:VaccinationRegistriesListComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-login', component: AdminLoginComponent, canActivate: [AuthGuard],
      children: [
        { path: 'donor-details', component: DonorDetailsComponent },
        { path: 'plasma-receiver', component: ReceiverDetailsComponent },
        { path: 'vaccination-registration', component: VaccinationRegistrationComponent}
      ]
  },
  { path: 'registered-hospital', component: AdminLoginForHospitalComponent},
  { path: 'hospital-login', component: HospitalLoginComponent,
      children:[
        {path: 'plasma-donors-list',component:PlasmaDonorsListComponent},
        {path: 'vaccination-registries-list',component:VaccinationRegistriesListComponent}
      ]
  },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
              HomeComponent,
              DashboardComponent,
              RegisterComponent,
              PlasmaQuizComponent,
              RegisterVaccinationComponent,
              VaccineRegistrationDetailsComponent,
              PlasmaDonorRegistrationSuccessComponent ,
              RegisterPlasmaDonationComponent,
              QuizFailedComponent ,
              PlasmaDonorDetailsComponent,
              DepartmentLoginComponent,
              FaqComponent,
              PageNotFoundComponent,
              ThankYouComponent,
              DepartmentLoginComponent,
              HospitalLoginComponent,
              AdminLoginComponent,
              RegistrationForHospitalComponent,
              AdminLoginForHospitalComponent,
              PlasmaDonorsListComponent,
              VaccinationRegistriesListComponent,
              RegisterPlasmaReceivalComponent,
              PlasmaQuizReceivalComponent,
              DepartmentLoginComponent,
              HospitalLoginComponent,
              FaqComponent,
              DonorDetailsComponent,
              ReceiverDetailsComponent,
              VaccinationRegistrationComponent,
              RegisteredComponent
];
