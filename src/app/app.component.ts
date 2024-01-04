import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
      CommonModule,  // Módulo comuns, contém diretivas como ngIf, ngFor, etc.
      RouterOutlet, // Importa o módulo de roteamento aqui se estiver usando roteamento
      HeaderComponent,
      FooterComponent,
    ]
})
export class AppComponent {
  title = 'portfolio';
}
