import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { SummaryComponent } from "app/summary/summary.component";
import { ProjectsComponent } from "app/projects/projects.component";
import { SkillsComponent } from "app/skills/skills.component";
import { EducationComponent } from "app/education/education.component";
import { ReferencesComponent } from "app/references/references.component";
import { CertificatesComponent } from "app/certificates/certificates.component";
import { ContactsComponent } from "app/contacts/contacts.component";
import { DetailsComponent } from "app/details/details.component";
import { PageNotFoundComponent } from "app/page-not-found/page-not-found.component";

export const navMenuRoutes: Routes = [
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
  }
];

const otherRoutes: Routes = [
  {
    path: ':type/details/:id',
    component: DetailsComponent
  }
];

const baseRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
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

const routes = navMenuRoutes.concat(otherRoutes, baseRoutes);
export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);