import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { industries, serviceCategories } from '../ripsware-data';

@Component({
  selector: 'app-industries',
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.scss',
})
export class IndustriesComponent {
  industries = industries;
  topServices = serviceCategories.slice(0, 4);
}
