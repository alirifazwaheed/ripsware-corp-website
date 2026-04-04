import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { serviceCategories } from '../ripsware-data';

@Component({
  selector: 'app-services',
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  serviceCategories = serviceCategories;
}
