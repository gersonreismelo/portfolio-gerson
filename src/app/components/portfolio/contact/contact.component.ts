import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { addDoc, collection } from 'firebase/firestore';

// Definição da interface para representar os dados do formulário de contato
interface Contato {
  nome: string;
  email: string;
  mensagem: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  ngOnInit(): void { }

  // Injeção do serviço Firestore para interação com o Firebase Firestore
  constructor(private firestore: Firestore) {

  }

  // Objeto de modelo para armazenar os dados do formulário de contato
  contato: Contato = {
    nome: '',
    email: '',
    mensagem: '',
  }

  // Função chamada quando o formulário é enviado
  async onSubmit() {
    // Função chamada quando o formulário é enviado
    if (!this.contato.nome || !this.contato.email || !this.contato.mensagem) {
      alert('Por favor, preencha todos os campos.');
      return
    } else {
      // Criação de uma coleção 'emails' no Firestore e adição do documento com os dados do contato
      const salvarContato =  collection(this.firestore, 'emails')
      await addDoc(salvarContato, this.contato)

      // Limpeza dos campos do formulário após o envio bem-sucedido
      this.contato = {
        nome: '',
        email: '',
        mensagem: '',
      };
    }
  }
}
