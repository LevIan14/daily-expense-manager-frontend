import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {User} from "../expense-manager";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroupLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.initAttribute();
  }

  ngOnInit(): void {
  }

  initAttribute() {
    this.formGroupLogin = this.formBuilder.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  login() {
    sessionStorage.setItem('encrypted', btoa(`${this.formGroupLogin.get('username').value.toString()}:${this.formGroupLogin.get('password').value.toString()}`));

    this.authService.authenticate(this.formGroupLogin.get('username').value.toString()).subscribe({
      next: (user: User) => {
        const userObject = {
          encrypted: btoa(`${user.username}:${user.password}`),
          id: user.id
        }
        sessionStorage.setItem('user', JSON.stringify(userObject));
        this.router.navigate(['list-transaction/all']);
      }
    });
  }

}
