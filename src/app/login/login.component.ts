import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService) {
    
   }

  ngOnInit() {
  }

  singIn(user, password){
    // console.log(user, password)
    this.adminService.accessLogin(user,password).subscribe(res => {
      console.log(res)
    })
  }

  

}
