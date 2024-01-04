import { Routes } from '@angular/router';
import { HomeComponent } from './components/portfolio/home/home.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { ContactComponent } from './components/portfolio/contact/contact.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { CandidateHiringSystemComponent } from './components/portfolio/projetos/candidate-hiring-system/candidate-hiring-system.component';
import { SeniorSmartComponent } from './components/portfolio/projetos/senior-smart/senior-smart.component';

// Definição das rotas da aplicação
export const routes: Routes = [
  {
    'path': '',
    component: HomeComponent
  },
  {
    'path': 'about',
    component: AboutComponent
  },
  {
    'path': 'contact',
    component: ContactComponent
  },
  {
    'path': 'project',
    component: ProjectComponent
  },
  {
    'path': 'candidatehiringsystem',
    component: CandidateHiringSystemComponent
  },
  {
    'path': 'seniorsmart',
    component: SeniorSmartComponent
  },
];
