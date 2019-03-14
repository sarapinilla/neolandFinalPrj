import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private adminService: AdminService,
    private router: Router
    ) {
    
   }

  ngOnInit() {
  }
//LOGIN ADMIN
  singIn(user, password){
    // console.log(user, password)
    this.adminService.accessLogin(user,password).subscribe(res => {
      localStorage.setItem('token', res.toString())
      this.router.navigate(['admin','registros'])

    })
  }

  signOut(token){
    localStorage.removeItem('token')
  } //En admin.service.ts ?? --> btn tabla registros
}
