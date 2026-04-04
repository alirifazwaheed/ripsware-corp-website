import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { caseStudies, clientLogos } from '../ripsware-data';

@Component({
  selector: 'app-portfolio',
  imports: [MaterialModule, CommonModule, FooterComponent, RouterLink, TablerIconsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  caseStudies = caseStudies;
  clientLogos = clientLogos;
}
