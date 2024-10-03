import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.login = this.formBuilder.group({
      login: ([Validators.required]), 
      senha: ( [Validators.required]) 
    });
  }

  ngOnInit() { }

  formLogin() {
    if (this.login.valid) {
      console.log("Formulário válido, dados: ", this.login.value);
      this.login.reset(); 
    } else {
      console.log("Formulário inválido");
    }
  }
}