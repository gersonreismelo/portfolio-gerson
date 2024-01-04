import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule], // Importação do MatIconModule
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private matIconRegistry = inject(MatIconRegistry) // Injeção do MatIconRegistry
  private domSanitizer = inject(DomSanitizer) // Injeção do DomSanitizer

  constructor() {
    // Adiciona um conjunto de ícones SVG usando o MatIconRegistry e DomSanitizer
    this.matIconRegistry
    .addSvgIconSet(this.domSanitizer.
      bypassSecurityTrustResourceUrl('../../../assets/svg-footer.svg')
    )
  }
}
