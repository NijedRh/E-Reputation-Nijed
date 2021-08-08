import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Router,ActivatedRoute  } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  videoIcon:string = "./assets/images/play.png";
  play:string = "Play";
  videodisabled:boolean = true;
 
  banks: Object;
  user: Object;
  username = '';
  bank: Object;
  image: any;
  thumbnail: any;
  yy: string;
  imageUrl: string | ArrayBuffer;

  constructor(private _http: HttpClient,
  private _router: Router, private _activatedRoute: ActivatedRoute,private _myservice: MyserviceService,private sanitizer:DomSanitizer) { 
    
   
  }
  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit():void {this.retrieveUserbank(); }
  

  





    retrieveUserbank(){
    let email = localStorage.getItem('email');
    let Bank_Name = localStorage.getItem('Bank_Name');
    

    this._myservice.getUserBank({'email':email})
        .subscribe(
          data => {
            this.user = data;
            console.log(this.user);
          },
          error => {
            console.log(error);
          });
          
          
  
  }
  /*retrieveImagebank(){
    let Bank_Name = localStorage.getItem('Bank_Name');
    this._myservice.getBankImage({'Bank_Name':Bank_Name})
    .subscribe(//(baseImage : any)=> 
    
    /*(data: Blob) => {
      this.createImageFromBlob(data);
    })
  }

    createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageUrl= reader.result;
    }, false);
  if (image) {
      reader.readAsDataURL(image);
    }
  }*/
   /* data=>
    {
      this.image=data;
      console.log(this.image)
      
      /*let binary = '';
      let bytes = new Uint8Array(this.image);

      let len = bytes.byteLength;
      for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
      }
      console.log(bytes);
       
      
      this.yy= window.btoa(binary)*/
    
     

      
      
  
     
      //alert(JSON.stringify(data.image));
      /*let objectURL = 'data:imageUpload/jpeg;base64,' + baseImage.image;

       this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    console.log(this.thumbnail)*/  
     
      
  
 
  
  
  changeImg(){
    if(this.play == "Play")
    {
      this.play = "Pause",
      this.videoIcon = "./assets/images/pause.png",
      this.videodisabled = false
    }
    else
    {
      this.videoIcon = "./assets/images/play.png",
      this.play = "Play",
      this.videodisabled = true
    }
  }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }
  see() {
    this._router.navigate(['/main/start'], { relativeTo: this._activatedRoute });
  }
}

