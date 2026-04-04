import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';
import { techStack, TechItem } from '../ripsware-data';

@Component({
  selector: 'app-technology',
  imports: [CommonModule, MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.scss',
})
export class TechnologyComponent {
  categories: { key: string; label: string; icon: string; items: TechItem[] }[] = [
    { key: 'frontend', label: 'Frontend', icon: 'browser', items: techStack.filter(t => t.category === 'frontend') },
    { key: 'backend', label: 'Backend & Databases', icon: 'server', items: techStack.filter(t => t.category === 'backend') },
    { key: 'mobile', label: 'Mobile Development', icon: 'device-mobile', items: techStack.filter(t => t.category === 'mobile') },
    { key: 'erp', label: 'ERP Systems', icon: 'building-factory', items: techStack.filter(t => t.category === 'erp') },
    { key: 'ai', label: 'AI & Analytics', icon: 'brain', items: techStack.filter(t => t.category === 'ai') },
    { key: 'cloud', label: 'Cloud & DevOps', icon: 'cloud', items: techStack.filter(t => t.category === 'cloud') },
  ];
}
