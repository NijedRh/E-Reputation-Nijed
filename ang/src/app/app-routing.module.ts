import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { LoginComponent } from './login/login.component';
import { MainDeskComponent } from './main-desk/main-desk.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RechercheComponent } from "./newpages/recherche/recherche.component";
import { TablesComponent } from "./pages/tables/tables.component";
import { UserComponent } from "./pages/user/user.component";
import { StartComponent } from "./start/start.component";
import { UsersearchComponent } from "./usersearch/usersearch.component";
import { ScrapingComponent } from "./scraping/scraping.component";
import { CommentairesComponent } from "./commentaires/commentaires.component";
import {NotificationsComponent} from "./pages/notifications/notifications.component";


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  
  {
    path: 'main', component: MainDeskComponent, children: [
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'start', component: StartComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'pages/dashboard', component: DashboardComponent },
        { path: 'pages/notifications', component: NotificationsComponent },
        { path: 'usersearch', component: UsersearchComponent },
        { path: 'scraping', component: ScrapingComponent },
        { path: 'commentaires', component: CommentairesComponent },


  
        
        { path: 'newpages/recherche', component: RechercheComponent }

        
        

      ]},  
     
  {path: 'dash' , component: UserDashboardComponent},
  
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
      },
      { path: 'pages/tables', component: TablesComponent },
      { path: 'pages/user', component: UserComponent },
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      },
      
    ]
  },

  {
    path: "**",
    redirectTo: "dashboard"
  }
];
 

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
