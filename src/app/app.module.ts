import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }        from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { StaticsComponent } from './statics/statics.component';
import { ClientsComponent } from './clients/clients.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { ShareService } from './share.service';
import { EditComponent } from './home/edit/edit.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ClientFeedbackComponent } from './client-feedback/client-feedback.component';
import { AgmCoreModule } from '@agm/core';
import { QustFormComponent } from './qust-form/qust-form.component';
/** Routing module */
/* Quest Form */
import { NavbarComponent }    from './qust-form/navbar/navbar.component';
import { PersonalComponent }  from './qust-form/personal/personal.component';
import { WorkComponent }      from './qust-form/work/work.component';
import { AddressComponent }   from './qust-form/address/address.component';
import { ResultComponent }    from './qust-form/result/result.component';

/* Shared Service */
import { FormDataService }    from './qust-form/data/formData.service';
import { WorkflowService }    from './qust-form/workflow/workflow.service';
import { WorkflowGuard }        from './qust-form/workflow/workflow-guard.service';

import { EmailService } from './email.service';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent,data: { title: 'Innoappstech InnoAppsTech' } },
  { path: 'about-us', component: AboutComponent,data: { title: 'About us | InnoAppsTech' }},
  { path: 'portfolio', component: PortfolioComponent,data: { title: 'Portfolio | InnoAppsTech' }},
  { path: 'contact-us', component: ContactComponent,data: { title: 'Contact us InnoAppsTech'} },
  { path: 'questions', component: QustFormComponent,data: { title: 'Questions InnoAppsTech'},
  children: [
    // 1st Route
   { path: 'personal',  component: PersonalComponent, outlet:'qust' },
   // 2nd Route
   { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard], outlet:'qust' },
   // 3rd Route
   { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard], outlet:'qust' },
   // 4th Route
   { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard], outlet:'qust' },
   // 5th Route
  // { path: '',   redirectTo: '/personal', pathMatch: 'full' },
  ]
},
   
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    StaticsComponent,
    ClientsComponent,
    EditComponent,
    ClientFeedbackComponent,
    QustFormComponent,
    NavbarComponent, 
    PersonalComponent, 
    WorkComponent, 
    AddressComponent, 
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes ),
    //AppRoutingModule.
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    OwlModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBS2UT2VWO44L05UTSfsSxecbryzJfDtNc'
    })
    
  ],
  providers: [ShareService, WorkflowGuard, EmailService, { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
