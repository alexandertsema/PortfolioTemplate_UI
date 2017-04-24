import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SummaryComponent } from "app/summary/summary.component";
import { ProjectsComponent } from "app/projects/projects.component";
import { SkillsComponent } from "app/skills/skills.component";
import { EducationComponent } from "app/education/education.component";
import { ReferencesComponent } from "app/references/references.component";
import { CertificatesComponent } from "app/certificates/certificates.component";
import { ContactsComponent } from "app/contacts/contacts.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/summary',
    pathMatch: 'full'
  },
  {
    path: 'summary',
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
  {
    path: 'references',
    component: ReferencesComponent
  },
  {
    path: 'certificates',
    component: CertificatesComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);