import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { RechercheComponent } from "src/app/newpages/recherche/recherche.component";
import { AjoutComponent } from "src/app/newpages/ajout/ajout.component";
import { ActionSequence } from "protractor";
import { ActualiteComponent } from "src/app/newpages/actualite/actualite.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "recherche", component: RechercheComponent },
  { path: "ajout", component: AjoutComponent },
  { path: "actualite", component: ActualiteComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  // { path: "rtl", component: RtlComponent }
];
