import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { RouterLink, RouterModule } from '@angular/router';
import { BrandingComponent } from 'src/app/layouts/full/vertical/sidebar/branding.component';

@Component({
  selector: 'app-footer',
  imports: [
    MaterialModule,
    TablerIconsModule,
    RouterLink,
    RouterModule,
    BrandingComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  servicesLinks = [
    { title: 'IT Support', href: '/front-pages/services/it-support' },
    { title: 'Infrastructure', href: '/front-pages/services/infrastructure' },
    { title: 'Software Development', href: '/front-pages/services/software-development' },
    { title: 'Mobile Development', href: '/front-pages/services/mobile-development' },
    { title: 'Design & Branding', href: '/front-pages/services/design-branding' },
    { title: 'Digital Marketing', href: '/front-pages/services/digital-marketing' },
  ];

  companyLinks = [
    { title: 'About Us', href: '/front-pages/about' },
    { title: 'Portfolio', href: '/front-pages/portfolio' },
    { title: 'Technology', href: '/front-pages/technology' },
    { title: 'Industries', href: '/front-pages/industries' },
    { title: 'Contact', href: '/front-pages/contact' },
  ];

  socialIcons = [
    { src: 'assets/images/front-end/icon-facebook.svg', tooltip: 'Facebook' },
    { src: 'assets/images/front-end/icon-twitter.svg', tooltip: 'Twitter' },
    { src: 'assets/images/front-end/icon-instagram.svg', tooltip: 'Instagram' },
  ];

  currentYear = new Date().getFullYear();
}
