import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-main-index',
  templateUrl: './main-index.component.html',
  styleUrls: ['./main-index.component.css']
  
})
export class MainIndexComponent implements OnInit {

  constructor() { }
  //Property for the work function
  public workfunction!: string[];
  //Property for the user
  public user!:User;

  ngOnInit(): void {
    
    this.workfunction = ['Sans Emploi','Etudiant','Employé'];
    //Create a new user object
    this.user = new User({
      userlastname:"",
      userfirstname:"",
      userworkfunction: this.workfunction[0],
      useremail:"", 
      userphone:"",
      userskype:"",
      userinterviewdate:"",
      usermessage:"",
      userfile:"",
      userinterview: { ftf: false, tel: false, skyp: false },
      terms: false
    });
  }
}
export class InputHint{}