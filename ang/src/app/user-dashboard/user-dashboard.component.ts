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
  imageUrl
  url: Object;
  uu: Object;

  constructor(private _http: HttpClient,private sanitizer: DomSanitizer,
  private _router: Router, private _activatedRoute: ActivatedRoute,private _myservice: MyserviceService) { 
    
   
  }
  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit():void { this.retrieveUserbank(); this.retrieveURL() }
  
   
  

   retrieveURL(){
    let email = localStorage.getItem('email');
    

    this._myservice.getAlldetails({'email':email})
        .subscribe(
          data => {
            this.uu =  Object.values( data[0]);
            console.log("cigggg");
            console.log(this.uu);
            console.log('hy')
            //localStorage.setItem('Bank_Name',data['Bank_Name']);
            //this.retrieveImagebank(data)
          },
          error => {
            console.log(error);
          });
          
   }



    retrieveUserbank(){
    let email = localStorage.getItem('email');
    

    this._myservice.getUserBank({'email':email})
        .subscribe(
          data => {
            this.user = data;
            localStorage.setItem('Bank_Name',data['Bank_Name']);
            this.retrieveImagebank(data)
          },
          error => {
            console.log(error);
          });
          
          
  
  }
  retrieveImagebank(data){
    let Bank_Name = localStorage.getItem('Bank_Name');
    this._myservice.getBankImage({'Bank_Name':data['Bank_Name']})
    .subscribe((baseImage : any)=> 
    
     {
      this.createImageFromBlob(baseImage);
    })
  }

  fbClick(from){
    switch (from) {
      case "facebook":
        window.open(this.uu[2],"_blank"); 
        break;
    
      default:
        break;
    }
   
  }

    createImageFromBlob(image: Blob) {
      let TYPED_ARRAY = new Uint8Array(image[0]['imageUpload']['data']);
      const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
        return data + String.fromCharCode(byte);
        }, '');
        let base64String = btoa(STRING_CHAR);
        this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64String);
        console.log(this.imageUrl);
        
  }

  getphoto ( ){
    setTimeout(() => {
      console.log('hola');
      
      return this.sanitizer.bypassSecurityTrustResourceUrl(this.imageUrl)
    }, 3000);
  }
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

