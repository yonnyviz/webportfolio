import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { SoftwareStackComponent } from './components/software-stack/software-stack.component';
import { WorkSectionComponent } from './components/work-section/work-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ServicesSectionComponent } from './components/services-section/services-section.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  declarations: [
    HomepageComponent,
    HomeSectionComponent,
    SoftwareStackComponent,
    WorkSectionComponent,
    PortfolioSectionComponent,
    ServicesSectionComponent
  ]
})
export class HomeModule { }
