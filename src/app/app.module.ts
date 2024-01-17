import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterModule } from './materials/register/register.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarousalComponent } from './components/carousal/carousal.component';
import { PlasmaQuizComponent } from './components/register/plasma-quiz/plasma-quiz.component';
import { QuizFailedComponent } from './components/register/quiz-failed/quiz-failed.component';
import { PlasmaDonorDetailsComponent } from './components/register/plasma-donor-details/plasma-donor-details.component';
import { PlasmaDonorRegistrationSuccessComponent } from './components/register/plasma-donor-registration-success/plasma-donor-registration-success.component'
import { DashboardModule } from './materials/dashboard/dashboard.module';
import { ChartComponent } from './components/chart/chart.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterVaccinationComponent } from './components/register/register-vaccination/register-vaccination.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RegisterPlasmaDonationComponent } from './components/register/register-plasma-donation/register-plasma-donation.component';
import { VaccineRegistrationDetailsComponent } from './components/register/register-vaccination/vaccine-registration-details/vaccine-registration-details.component';
import { ThankYouComponent } from './components/register/register-vaccination/thank-you/thank-you.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HospitalLoginComponent } from './components/hospital-login/hospital-login.component';
import { HospitalService } from './services/hospital.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatOptionModule } from '@angular/material/core';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RegisterPlasmaReceivalComponent } from './components/register/register-plasma-receival/register-plasma-receival.component';
import { PlasmaQuizReceivalComponent } from './components/register/register-plasma-receival/plasma-quiz-receival/plasma-quiz-receival.component';
import { FooterComponent } from './components/footer/footer.component';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { AuthGuard } from './guard/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DonorDetailsComponent } from './components/admin-login/donor-details/donor-details.component';
import { ReceiverDetailsComponent } from './components/admin-login/receiver-details/receiver-details.component';
import { VaccinationRegistrationComponent } from './components/admin-login/vaccination-registration/vaccination-registration.component';
import { VaccinationRegistriesListComponent } from './components/vaccination-registries-list/vaccination-registries-list.component';
import { CorousalTextComponent } from './components/home/corousal-text/corousal-text.component';
import { TextScrollComponent } from './components/home/text-scroll/text-scroll.component';
import { RegisteredComponent } from './components/register/register-plasma-receival/registered/registered.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
    routingComponents,
    PlasmaQuizComponent,
    QuizFailedComponent,
    PlasmaDonorDetailsComponent,
    PlasmaDonorRegistrationSuccessComponent,
    ChartComponent,
    RegisterComponent,
    RegisterVaccinationComponent,
    RegisterPlasmaDonationComponent,
    VaccineRegistrationDetailsComponent,
    ThankYouComponent,
    AdminLoginComponent,
    HospitalLoginComponent,
    RegisterPlasmaReceivalComponent,
    PlasmaQuizReceivalComponent,
    FooterComponent,
    DonorDetailsComponent,
    ReceiverDetailsComponent,
    VaccinationRegistrationComponent,
    VaccinationRegistriesListComponent,
    CorousalTextComponent,
    TextScrollComponent,
    RegisteredComponent
    // HospitalLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RegisterModule,
    DashboardModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [HospitalService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
  }

}
