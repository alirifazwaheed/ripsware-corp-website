import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { serviceCategories, ServiceCategory } from '../ripsware-data';

@Component({
  selector: 'app-service-detail',
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss',
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  category: ServiceCategory | undefined;
  otherCategories: ServiceCategory[] = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['category'];
      this.category = serviceCategories.find(c => c.id === id);
      this.otherCategories = serviceCategories.filter(c => c.id !== id).slice(0, 3);
    });
  }
}
