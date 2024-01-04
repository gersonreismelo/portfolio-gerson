import { Injectable } from '@angular/core'; // Importa o decorador Injectable para criar serviços
import { HttpClient } from '@angular/common/http'; // Importa o módulo HttpClient para fazer solicitações HTTP
import { Observable } from 'rxjs'; // Importa Observable do RxJS para lidar com objetos assíncronos

@Injectable({
  providedIn: 'root' // Especifica que este serviço será injetado em toda a aplicação (root)
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users/gersonreismelo/repos'; // URL da API do GitHub para buscar os repositórios

  // Construtor do serviço, injetando o HttpClient
  constructor(private http: HttpClient) { }

  // Método para obter os repositórios ordenados por data de criação
  getReposSortedByCreationDate(): Observable<any[]> {
    // Constrói a URL incluindo parâmetros para ordenação por data de criação (decrescente)
    const url = `${this.apiUrl}?sort=created&direction=desc`;
    // Realiza uma chamada HTTP GET para recuperar os repositórios ordenados por data de criação
    return this.http.get<any[]>(url);
  }
}
