import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/recherche",
    title: "Gestion de recherches ",
    rtlTitle: "إدارة البحث ",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/ajout",
    title: "Gestion de banques",
    rtlTitle: "إدارة البنك",
    icon: "icon-atom",
    class: ""
  },
  {
    path: "/actualite",
    title: "Actualité de banques",
    rtlTitle: "أخبار البنك",
    icon: "icon-pin",
    class: "" },
  /*{
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    class: ""
  },*/

    {
    path: "/user",
    title: "Users",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/recherche",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/notifications",
    title: "Charts",
    rtlTitle: "قائمة ",
    icon: "icon-puzzle-10",
    class: ""
  },
 /* {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: ""
  },*/
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
 
}
