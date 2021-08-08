import { Component, OnInit } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

import { HttpClient } from '@angular/common/http';


import { ActivatedRoute, Router } from '@angular/router';

import {take} from 'rxjs/operators';
import { Chart} from 'chart.js'
import { hasOnlyExpressionInitializer } from 'typescript';
import { MyserviceService } from "src/app/myservice.service";

@Component({
  selector: "app-notifications",
  templateUrl: "notifications.component.html"
})
export class NotificationsComponent implements OnInit {
  staticAlertClosed  = false;
  staticAlertClosed1 = false;
  staticAlertClosed2 = false;
  staticAlertClosed3 = false;
  staticAlertClosed4 = false;
  staticAlertClosed5 = false;
  staticAlertClosed6 = false;
  staticAlertClosed7 = false;
  details:Object;
  a: any;
  b:any;
  c:any;
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public myChartData;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  d: any;
  e: any;
  f: any;
  g: any;
  aa: any;
  bb: any;
  cc: any;
  somme: void;
  y: any;
  m: any;
  h: any;


  constructor(private toastr: ToastrService,private _router: Router,private _http: HttpClient,private _myservice: MyserviceService,private _activatedRoute: ActivatedRoute) {let URL = localStorage.getItem('URL');}
  PieChart=[];
  showNotification(from, align){

      const color = Math.floor((Math.random() * 5) + 1);

      switch(color){
        case 1:
        this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-info alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 2:
        this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-success alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 3:
        this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           closeButton: true,
           enableHtml: true,
           toastClass: "alert alert-warning alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
        break;
        case 4:
        this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
           disableTimeOut: true,
           enableHtml: true,
           closeButton: true,
           toastClass: "alert alert-danger alert-with-icon",
           positionClass: 'toast-' + from + '-' +  align
         });
         break;
         case 5:
         this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
            disableTimeOut: true,
            closeButton: true,
            enableHtml: true,
            toastClass: "alert alert-primary alert-with-icon",
            positionClass: 'toast-' + from + '-' +  align
          });
        break;
        default:
        break;
      }
  }

  ngOnInit() {this.getdetails(); this.chartme();this.react_stat();this.sent_stat();
  
  
    var gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 800,
            padding: 20,
            fontColor: "#2380f7"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#2380f7"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 800,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 10,
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9a9a9a"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
            padding: 20,
            fontColor: "#ff8a76"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#ff8a76"
          }
        }]
      }
    };

    var gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 800,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };


    var gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 800,
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e"
          }
        }]
      }
    };

    this.canvas = document.getElementById("chartLineRed");
    this.ctx = this.canvas.getContext("2d");

    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: "Data",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });


    this.canvas = document.getElementById("chartLineGreen");
    this.ctx = this.canvas.getContext("2d");


    var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors

    var data = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [90, 27, 60, 12, 80],
      }]
    };

    var myChart = new Chart(this.ctx, {
      
      type: 'line',
      data: data,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });
  
  }
  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }
 
 sent_stat(){
   
  let URL = localStorage.getItem('URL');
    
  this._myservice.detailspy({'URL':URL})
  .subscribe(
    data => {
      this.details = Object.values( data[0])
      let x: any[] = [];
      let z: any[] = [];
      let l: any[] = [];
      for (var i=1; i< 20;i++){
        this.y =this.details[i]['commentaires']['nbr_comm_neutre'];
        this.h =this.details[i]['commentaires']['nbr_comm_positive'];
        this.m =this.details[i]['commentaires']['nbr_comm_negative'];
        x.push(this.y);
        z.push(this.h);
        l.push(this.m);
        //this.bb= this.details[i]['commentaires']['nbr_comm_neutre'];
        //this.cc = this.details[i]['commentaires']['nbr_comm_positive'];
      
        console.log("taw");
        console.log(x);
        console.log(z);
        console.log(l);}
        //console.log(this.bb);
        //console.log(this.cc);
        /*console.log(this.aa);
        console.log(this.bb);
        console.log(this.cc);
        //console.log(this.details[i])*/
        
  var chart_labels = ['Post1', 'Post2', 'Post3', 'Post4','Post5', 'Post6', 'Post7', 'Post8','Post9', 'Post10', 'Post11', 'Post12','Post13', 'Post14', 'Post15', 'Post16','Post17', 'Post18', 'Post19']
  this.datasets = [
    [x[0], x[1], x[2], x[3],x[4], x[5], x[6], x[7],x[8], x[9], x[10], x[11],x[12], x[13], x[14], x[15],x[16], x[17], x[18], x[19]],  
    [z[0], z[1], z[2], z[3],z[4], z[5], z[6], z[7],z[8], z[9], z[10], z[11],z[12], z[13], z[14], z[15],z[16], z[17], z[18], z[19]],
    [l[0], l[1], l[2], l[3],l[4], l[5], l[6], l[7],l[8], l[9], l[10], l[11],l[12], l[13], l[14], l[15],l[16], l[17], l[18], l[19]],
  ];
  this.data = this.datasets[0];
  


  this.canvas = document.getElementById("chartBig1");
  this.ctx = this.canvas.getContext("2d");

  var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

  gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
  gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
  gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
  var gradientChartOptionsConfigurationWithTooltipRed: any = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 0,
          suggestedMax: 10,
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(233,32,16,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9a9a9a"
        }
      }]
    }
  };

  var config = {
    type: 'line',
    data: {
      labels: chart_labels,
      datasets: [{
        label: "My First dataset",
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: this.data,
        
      }]
    },
    options: gradientChartOptionsConfigurationWithTooltipRed,
  };
  
  this.myChartData = new Chart(this.ctx, config);
  
     


},
error => {
  console.log(error);
}); 

 }










  react_stat(){
   

  //debut  
  let URL = localStorage.getItem('URL');
    
  this._myservice.detailspy({'URL':URL})
  .subscribe(
    data => {
      this.details = Object.values( data[0])
      this.somme=this.details[21] + this.details[22]+this.details[23]+this.details[24]
      console.log(this.details);
      this.d = this.details[24];
      this.e = this.details[25];
      this.f = this.details[26];
      this.g = this.details[27];

     /* this.d = 300;
      this.e = 400;
      this.f = 500;
      this.g = 300;*/
      console.log("hhhhhhhh")

      console.log(this.d);
      console.log(this.e);
      console.log(this.f);
      console.log(this.g);
      this.canvas = document.getElementById("CountryChart");
      this.ctx  = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
      var myChart = new Chart(this.ctx, {
  
        type: 'bar',
        responsive: true,
        legend: {
          display: false
        },
        data: {
          labels: ['JAIME', 'JADORE', 'HAHA', 'GRR'],
          datasets: [{
            label: "nombres",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#1f8ef1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [this.d,this.e,this.f, this.g],
          }]
        },
       // options: gradientBarChartConfiguration
      });
    },
    error => {
      console.log(error);
    }); 
//fin

  
  }
  
  /*clickme(){
    let URL = localStorage.getItem('URL');
    
    this._myservice.detailspy({'URL':URL})
    .subscribe(
      data => {
        this.details = Object.values( data[0])
  
        console.log(this.details);
        this.d = this.details[24];
        this.e = this.details[25];
        this.f = this.details[26];
        this.g = this.details[27];
        console.log("hhhhhhhh")

        console.log(this.d);
        console.log(this.e);
        console.log(this.f);

      },
      error => {
        console.log(error);
      }); 



     


      this.canvas = document.getElementById("CountryChart");
      this.ctx  = this.canvas.getContext("2d");
      var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
  
      gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
      gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
      gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
  
  
  
  
  
      
     
  
  
      var myChart = new Chart(this.ctx, {
        type: 'bar',
        responsive: true,
        legend: {
          display: false
        },
        data: {
          labels: ['JAIME', 'JADORE', 'HAHA', 'GRR'],
          datasets: [{
            label: "Countries",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: '#1f8ef1',
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: [100,200, 500, 300],
          }]
        },
        //options: gradientBarChartConfiguration
      });
  



  }*/



















  getdetails(){
    let URL = localStorage.getItem('URL');
    
    this._myservice.detailspy({'URL':URL})
    .subscribe(
      data => {
        this.details = Object.values( data[0]);
        console.log("dadadada");
        console.log(this.details["nbr-com-t"]);
        
         /* console.log("taw")
          console.log(this.aa);
          console.log(this.bb);
          console.log(this.cc
            );
          console.log(this.details[i])*/
           
        
        /*this.d = this.details[24];
        this.e = this.details[25];
        this.f=this.details[26];
        this.g=this.details[27];
        console.log(this.details[24]);
        console.log(this.details[21]);*/
  
     
        // this.a = this.details[1]['commentaires']['nbr_comm_negative'];
        //this.b = this.details[1]['commentaires']['nbr_comm_positive'];
        //this.c = this.details[1]['commentaires']['nbr_comm_positive'];
        //console.log("hahahahahah")
        //console.log(this.b);
        //console.log(this.b);
       // console.log(this.c);

      },
      error => {
        console.log(error);
      });     
  }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }

  chartme(){
    let URL = localStorage.getItem('URL');
    
    this._myservice.detailspy({'URL':URL})
    .subscribe(
      data => {
        this.details = Object.values( data[0])
        
  
        console.log(this.details);
        this.a = this.details[21];
        this.b = this.details[22];
        this.c = this.details[23];
        
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);

      },
      error => {
        console.log(error);
      }); 
      this.PieChart= new Chart('pieChart',{
        type:'pie',
        data:{
          labels:["positifs","negatifs","neutres"],
          datasets:[{
            data:[this.a,this.b,this.c],
            backgroundColor:[
              'rgba(40,23,244,0.9)',
              'rgba(192,255,0,0.9)',
              'rgba(239,23,240,0.9)',

            ]
          }]
        },
        options:{
          title:{
            Text:"PostChart",
            display:true
          },
          scales:{
            yAxes:[{
              ticks:{
                begainAtZero:true
              }
            }]
          }
        }
      })


  }





}
