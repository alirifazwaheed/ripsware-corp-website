import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { teamMembers } from '../ripsware-data';

@Component({
  selector: 'app-about-us',
  imports: [MaterialModule, TablerIconsModule, CommonModule, FooterComponent, RouterLink],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  teamMembers = teamMembers;

  milestones = [
    { year: '2019', title: 'Founded', description: 'Ripsware established as an IT services company.', color: 'primary' },
    { year: '2020', title: 'First Major Contract', description: 'Secured enterprise IT support for a national utility provider.', color: 'warning' },
    { year: '2021', title: 'Development Division', description: 'Expanded into custom software and mobile app development.', color: 'success' },
    { year: '2022', title: 'AI & Digital Marketing', description: 'Launched AI solutions and digital marketing services.', color: 'secondary' },
    { year: '2023', title: 'Regional Expansion', description: 'Grew to serve clients across multiple industries and regions.', color: 'error' },
    { year: '2024', title: '50+ Projects', description: 'Milestone of 50+ successfully delivered projects.', color: 'primary' },
  ];

  values = [
    { icon: 'target', title: 'Client-First', description: 'Every decision starts with understanding your business needs.' },
    { icon: 'bulb', title: 'Innovation', description: 'We stay at the forefront of technology to deliver modern solutions.' },
    { icon: 'shield-check', title: 'Reliability', description: 'We deliver on our promises and stand behind our work.' },
    { icon: 'users-group', title: 'Collaboration', description: 'We work as an extension of your team, not just a vendor.' },
  ];
}
