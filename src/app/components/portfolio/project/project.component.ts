import { Component } from '@angular/core';
import { GithubService } from './githubservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  repos: any[] = []; // Array para armazenar os repositórios do GitHub

  constructor(private githubService: GithubService) { } // Injeção do serviço GithubService no componente

  ngOnInit(): void {
    this.getGithubRepos(); // Ao inicializar o componente, chama a função para buscar os repositórios do GitHub
  }

  // Função para obter os repositórios do GitHub utilizando o serviço GithubService
  getGithubRepos(): void {
     // Chama a função do serviço que retorna os repositórios, ordenados por data de criação
    this.githubService.getReposSortedByCreationDate().subscribe(
      (repos: any[]) => {
        this.repos = repos; // Atribui os repositórios obtidos ao array 'repos'
      },
      (error) => {
        console.error('Erro ao buscar repositórios do GitHub:', error);
      }
    );
  }

}
