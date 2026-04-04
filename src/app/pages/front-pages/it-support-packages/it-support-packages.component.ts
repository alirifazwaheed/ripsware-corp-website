import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { supportPackages } from '../ripsware-data';

@Component({
  selector: 'app-it-support-packages',
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './it-support-packages.component.html',
  styleUrl: './it-support-packages.component.scss',
})
export class ItSupportPackagesComponent {
  packages = supportPackages;
}
