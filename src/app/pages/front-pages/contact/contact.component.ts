
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [MaterialModule, TablerIconsModule, RouterLink, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private route = inject(ActivatedRoute);
  selectedEnquiry = 'General Enquiry';

  enquiryTypes = [
    'General Enquiry',
    'IT Support Services',
    'Software Development',
    'Mobile App Development',
    'Infrastructure & Hardware',
    'Design & Branding',
    'Digital Marketing',
    'AI & Technology Solutions',
    'Partnership Enquiry',
  ];

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['subject']) {
        this.selectedEnquiry = params['subject'];
      }
    });
  }
}
