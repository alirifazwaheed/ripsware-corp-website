import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { packageFeatures, supportPackages } from '../ripsware-data';

@Component({
  selector: 'app-it-support-packages',
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './it-support-packages.component.html',
  styleUrl: './it-support-packages.component.scss',
})
export class ItSupportPackagesComponent {
  packages = supportPackages;
  features = packageFeatures;

  /** Matrix cells are either a yes/no marker or a descriptive value. */
  isIncluded(value: string): boolean {
    return value === 'Included';
  }

  isExcluded(value: string): boolean {
    return value === 'Not Included';
  }
}
