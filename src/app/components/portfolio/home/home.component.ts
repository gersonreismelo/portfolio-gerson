import { Component, inject } from '@angular/core';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private matIconRegistry = inject(MatIconRegistry)
  private domSanitizer = inject(DomSanitizer)

  constructor() {
    this.matIconRegistry
    .addSvgIconSet(this.domSanitizer.
      bypassSecurityTrustResourceUrl('../../../assets/svg-home.svg')
    )
  }
}
