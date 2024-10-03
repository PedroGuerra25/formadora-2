import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit { 
  public cadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.cadastro = this.formBuilder.group({
      nome: ['', Validators.required], 
      email: ['', [Validators.required, Validators.email]], 
      senha: ['', [Validators.required, Validators.minLength(6)]], 
      cpf: ['', Validators.required], 
    });
  }

  ngOnInit() {}

  formCadastro() {
    if (this.cadastro.valid) {
      console.log("Formulário válido, dados: ", this.cadastro.value);
      this.cadastro.reset(); 
    } else {
      console.log("Formulário inválido");
    }
  }
}