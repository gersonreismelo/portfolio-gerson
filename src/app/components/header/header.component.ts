import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private matIconRegistry = inject(MatIconRegistry)
  private domSanitizer = inject(DomSanitizer)

  isMenuVisible = false;  // Variável de controle para a visibilidade do menu

  constructor() {
    this.matIconRegistry
    .addSvgIconSet(this.domSanitizer.
      bypassSecurityTrustResourceUrl('../../../assets/svg-header.svg')
    )
  }

  // Método para alternar a visibilidade do menu
  async toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; // Alterna o estado da variável isMenuVisible
    document.querySelector("html")!.style.overflow = this.isMenuVisible ? "hidden" : "auto"; // Altera o overflow do HTML baseado na visibilidade do menu


    if (this.isMenuVisible) {
      // Verifica a alteração da media query para esconder o menu em telas maiores
      const mediaQuery = window.matchMedia("(max-width: 768px)");
      mediaQuery.addEventListener("change", () => {
        if (!mediaQuery.matches) {
          this.toggleMenu(); // Esconde o menu se a largura da tela não corresponder à condição da media query
        }
      });
    }
  }
}
