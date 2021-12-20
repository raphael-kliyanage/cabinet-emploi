import { Component, OnInit } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-main-contacts',
  templateUrl: './main-contacts.component.html',
  styleUrls: ['./main-contacts.component.css']
})
export class MainContactsComponent implements OnInit {

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
