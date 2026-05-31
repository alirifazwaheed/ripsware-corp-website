
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';
import { EmailService } from 'src/app/services/email.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [MaterialModule, TablerIconsModule, RouterLink, FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  sending = false;
  sendSuccess = false;
  sendError = '';

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

  contactForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    enquiryType: ['General Enquiry', Validators.required],
    company: [''],
    message: ['', Validators.required],
  });

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['subject']) {
        this.contactForm.patchValue({ enquiryType: params['subject'] });
      }
    });
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.sending = true;
    this.sendSuccess = false;
    this.sendError = '';

    try {
      await this.emailService.sendContactEmail(this.contactForm.value);
      this.sendSuccess = true;
      this.contactForm.reset({ enquiryType: 'General Enquiry' });
    } catch {
      this.sendError = 'Failed to send message. Please try again or email us directly at sales@ripsware.com.';
    } finally {
      this.sending = false;
    }
  }
}
