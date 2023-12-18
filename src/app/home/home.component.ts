import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { error } from 'console';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private dialog:MatDialog,
    private router: Router,
    private userServices: UserService) { }

  ngOnInit(): void {
    this.userServices.checkToken().subscribe((response:any)=>{
      this.router.navigate(['/restro/dashboard']);

    }, (error)=>{
      console.log(error);
    })
  }

  // handleSignupAction(){
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.width = "550px";
  //   this.dialog.open(SignupComponent, dialogConfig);
  // }

  // SignupAction(){
  //   this.router.navigateByUrl('/signup');
  // }  

  goToPage(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }
}
