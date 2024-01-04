import { Routes } from '@angular/router';
import { HomeComponent } from './components/portfolio/home/home.component';
import { AboutComponent } from './components/portfolio/about/about.component';
import { ContactComponent } from './components/portfolio/contact/contact.component';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { ContactSentComponent } from './components/portfolio/contact/contact-sent/contact-sent.component';
import { CandidateHiringSystemComponent } from './components/portfolio/project/projetos/candidate-hiring-system/candidate-hiring-system.component';
import { SeniorSmartComponent } from './components/portfolio/project/projetos/senior-smart/senior-smart.component';

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
    'path': 'project/candidateHiringSystem',
    component: CandidateHiringSystemComponent
  },
  {
    'path': 'project/seniorSmart',
    component: SeniorSmartComponent
  },
  {
    'path': 'contact/contactSent',
    component: ContactSentComponent
  },
];
