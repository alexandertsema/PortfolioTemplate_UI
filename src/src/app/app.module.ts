import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { SkillsComponent } from './skills/skills.component';
import { SummaryComponent } from './summary/summary.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReferencesComponent } from './references/references.component';
import { Routing } from 'app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatButtonToggleModule, MatSidenavModule, MatIconModule, MatChipsModule } from '@angular/material';
import { ProjectCategoryFilterComponent } from './project-category-filter/project-category-filter.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AnimatePulseDirective } from './directives/animate/animate-pulse.directive';
import { MediaBreakpointsModule } from 'app/modules/media-breakpoints.module';
import { NavigationLinkComponent } from 'app/navigation-link/navigation-link.component';
import { NavigationMenuComponent } from 'app/navigation-menu/navigation-menu.component';
import { CustomHammerConfig } from 'app/hummer-config';

@NgModule({
  declarations: [
    AppComponent,
    CertificatesComponent,
    SkillsComponent,
    SummaryComponent,
    EducationComponent,
    ProjectsComponent,
    ContactsComponent,
    ReferencesComponent,
    ProjectCategoryFilterComponent,
    GridItemComponent,
    DetailsComponent,
    PageNotFoundComponent,
    AnimatePulseDirective,
    NavigationLinkComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing,
    BrowserAnimationsModule,
    MediaBreakpointsModule,
    MatButtonModule, MatCardModule, MatButtonToggleModule, MatSidenavModule, MatIconModule, MatChipsModule
  ],
  providers: [
    HttpClient,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomHammerConfig
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
