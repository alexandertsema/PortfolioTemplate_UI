import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SummaryComponent } from 'app/summary/summary.component';
import { ProjectsComponent } from 'app/projects/projects.component';
import { SkillsComponent } from 'app/skills/skills.component';
import { EducationComponent } from 'app/education/education.component';
import { ReferencesComponent } from 'app/references/references.component';
import { CertificatesComponent } from 'app/certificates/certificates.component';
import { ContactsComponent } from 'app/contacts/contacts.component';
import { DetailsComponent } from 'app/details/details.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      alias: 'alexander tsema'
    },
    component: SummaryComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  // {
  //   path: 'references',
  //   component: ReferencesComponent
  // },
  // {
  //   path: 'certificates',
  //   component: CertificatesComponent
  // },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: ':type/details/:slug',
    component: DetailsComponent
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);
