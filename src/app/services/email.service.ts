import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_tuywa4l';
const EMAILJS_TEMPLATE_ID = 'template_2xh8jcx';
const EMAILJS_PUBLIC_KEY = 'MniUZIG-F-CLt8nF7';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  enquiryType: string;
  company: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  async sendContactEmail(data: ContactFormData): Promise<void> {
    const templateParams = {
      to_email: 'sales@ripsware.com',
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      enquiry_type: data.enquiryType,
      company: data.company || 'Not provided',
      message: data.message,
    };

    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
  }
}
