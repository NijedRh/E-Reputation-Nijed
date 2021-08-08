import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  bankForm:FormGroup;
  submitted : boolean = false;
  
  uploadError: string = '';
  successMessage: string;
  Message: string;
  user: Object;
  selected: any ;
 
  users: any;

  

  constructor(public fb: FormBuilder,private _router: Router,
    private cd: ChangeDetectorRef,private _http: HttpClient,private _myservice: MyserviceService) { 
      
      this.bankForm = new FormGroup({
       
        Bank_Name:new FormControl("",[]),
          email:new FormControl("",[]),
          Branche:new FormControl("", []),
          URL: new FormControl("", []),
          city: new FormControl("", []),
          country : new FormControl("", []),
          Address : new FormControl("", []),
          imageUpload :new FormControl("", [])
    
        });
       
       // this.bankForm.getRawValue();
      // this.bankForm.controls.Bank_Name.disable({onlySelf: true});
      }

      
  ngDoCheck(){

  }
     /* retrieveUserbank(){
        let email = localStorage.getItem('email');
        this._myservice.getUserBank({'email':email})
            .subscribe(
              data => {
                this.user = data;
                console.log(this.user);
              },
              error => {
                console.log(error);
              });
              
              
      
      }*/
     

      logout(){
        localStorage.removeItem('token');
        this._router.navigate(['/main/login']);
      }












    
   registrationForm = this.fb.group({
     file: [null]
    })  
    /*########################## File Upload ########################*/
  @ViewChild('fileInput') el: ElementRef;
  imageUrl: any = 'https://d7ieeqxtzpkza.cloudfront.net/wp-content/uploads/2019/10/papier-banque-1-450x300.jpg';
  editFile: boolean = true;
  removeUpload: boolean = false;

    onChange(event) {
    if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.bankForm.get('imageUpload').setValue(file);
    
    }}
  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
       // When file uploads set it to file formcontrol
       reader.onload = () => {
        this.imageUrl = reader.result;
        
        //this.bankForm.get('imageUpload').setValue(reader.result);
       
        this.bankForm.patchValue({
          imageUpload: reader.result
        });
        console.log(this.bankForm.get('imageUpload').value);
        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();        
    }
  }

  // Function to remove uploaded file
  removeUploadedFile() {
    let newFileList = Array.from(this.el.nativeElement.files);
    this.imageUrl = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';
    this.editFile = true;
    this.removeUpload = false;
    this.registrationForm.patchValue({
      file: [null]
    });
  }
  
  // Submit Registration Form
 /* onSubmit() {
    this.submited = true;
    if(!this.registrationForm.valid) {
      alert('Please fill all the required fields to create a super hero!')
      return false;
    } else {
      console.log(this.registrationForm.value)
    }*/













    
  ngOnInit(): void {  this.retrieveonebank()}
  
 /* retrieveAllbanknames(){
    //let email = localStorage.getItem('email');
    this._myservice.getAllbanknames()
        .subscribe(
          data => {
            this.users = data;
            console.log(this.users);
          },
          error => {
            console.log(error);
          });  
          
      
        
  }*/

  retrieveonebank(){
    let email = localStorage.getItem('email');
    this._myservice.getUserBank({'email':email})
        .subscribe(
          data => {
            this.users = data;
            console.log(this.users);
          },
          error => {
            console.log(error);
          });  

  }
  
  
  
  
  valueChange(event){
    console.log("selected value",event.target.value ,
    'value of selected',this.selected);
    //this.selected = event.target.value;
    
  }

  



  
  /*this.submitted = true;
  if(!this.bankForm.valid) {
    return false;
  }
  
  let objRequest = {
    Bank_Name: this.bankForm.controls['Bank_Name'].value,
    URL: this.bankForm.controls['URL'].value,
    Address: this.bankForm.controls['Address'].value,
    city: this.bankForm.controls['city'].value,
    country: this.bankForm.controls['country'].value,
    imageUpload:this.bankForm.controls['imageUpload'].value

  }

console.log(objRequest);




  const formData = new FormData();
  formData.append('Bank_Name', this.bankForm.controls.Bank_Name.value);
  formData.append('URL', this.bankForm.controls.URL.value);
  formData.append('Address', this.bankForm.controls.Address.value);
  formData.append('city', this.bankForm.controls.city.value);
  formData.append('country', this.bankForm.controls.country.value);
  formData.append('imageUpload', this.bankForm.get('imageUpload').value);
  console.log(formData);
  console.log(this.bankForm.get('Bank_Name').value);
  if (this.bankForm.valid) {
  this._myservice.add(formData).subscribe(resp => {
    if(resp['status'] == 'success') {
      alert('File saved in file-upload-server/uploads');
    }
  }, (resp)=> {
    this.uploadError = 'Some error occured please try later';
    console.log(resp);
  });
  
}
}*/
t
PostData() {
let email = localStorage.getItem('email');
let Bank_Name = localStorage.getItem('Bank_Name');
this.bankForm.patchValue({'email':email});
this.bankForm.patchValue({'Bank_Name':this.users.Bank_Name});

console.log(this.bankForm.value);

if (this.bankForm.valid) {
  this._myservice.addbanka(this.bankForm.value)
    .subscribe(

      data =>{
        
        this.successMessage = 'Registration Success';
        console.log("yyyyyyyyyy",data);
        console.log("yyyyyyyyyy",this.successMessage);} ,
      err =>
      { this.successMessage = 'SOme error'}
      
    );
    
  
}}




}

