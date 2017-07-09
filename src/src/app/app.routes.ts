import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SummaryComponent } from "app/summary/summary.component";
import { ProjectsComponent } from "app/projects/projects.component";
import { SkillsComponent } from "app/skills/skills.component";
import { EducationComponent } from "app/education/education.component";
import { ReferencesComponent } from "app/references/references.component";
import { CertificatesComponent } from "app/certificates/certificates.component";
import { ContactsComponent } from "app/contacts/contacts.component";
import { ProjectDetailsComponent } from "app/project-details/project-details.component";

const routes: Routes = [
  {
    path: 'home',
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
    path: 'project',
    component: ProjectDetailsComponent
  },
  {
    path: 'projectdetails',
    component: ProjectDetailsComponent
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
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { // todo: implement 404
    path: '**', 
    component: SummaryComponent 
  }
];


export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);