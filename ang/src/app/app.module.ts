


import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { MainDeskComponent } from './main-desk/main-desk.component';

/*import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material';
*/
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MyserviceService} from './myservice.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";



import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { RechercheComponent } from './newpages/recherche/recherche.component';
import { AjoutComponent } from './newpages/ajout/ajout.component';
import { ActualiteComponent } from './newpages/actualite/actualite.component';
import { UserComponent } from './pages/user/user.component';
import { StartComponent } from './start/start.component';
import { UsersearchComponent } from './usersearch/usersearch.component';
import { ScrapingComponent } from './scraping/scraping.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { Chart} from 'chart.js'
//import { MDBBootstrapModule } from 'angular-bootstrap-md'; 

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    /*MatInputModule,
    MatSnackBarModule,
    MatButtonModule,*/
    ReactiveFormsModule,
    NgbModule,
   
    RouterModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
   // MDBBootstrapModule.forRoot() ,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, 
    AdminLayoutComponent,
     AuthLayoutComponent,
     AppComponent,
     LoginComponent,
     RegisterComponent,
     UserDashboardComponent,
     MainDeskComponent,
  
     RechercheComponent,
     AjoutComponent,
     ActualiteComponent,
     StartComponent,
     UsersearchComponent,
     ScrapingComponent,
     CommentairesComponent
    
     
  
  
  
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
