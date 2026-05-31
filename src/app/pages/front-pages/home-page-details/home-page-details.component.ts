import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { serviceCategories, techStack, clientLogos, caseStudies } from '../ripsware-data';

@Component({
  selector: 'app-home-page-details',
  imports: [
    MaterialModule,
    TablerIconsModule,
    CommonModule,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './home-page-details.component.html',
  styleUrl: './home-page-details.component.scss',
})
export class HomePageDetailsComponent {
  serviceCategories = serviceCategories;
  techStack = techStack;
  clientLogos = clientLogos;
  caseStudies = caseStudies.slice(0, 2);

  stats = [
    { value: '6+', label: 'Years of Experience', icon: 'calendar-stats', color: 'text-primary' },
    { value: '50+', label: 'Projects Delivered', icon: 'checkup-list', color: 'text-success' },
    { value: '99.9%', label: 'Uptime SLA', icon: 'shield-check', color: 'text-warning' },
    { value: '24/7', label: 'Support Available', icon: 'headset', color: 'text-error' },
  ];
}
