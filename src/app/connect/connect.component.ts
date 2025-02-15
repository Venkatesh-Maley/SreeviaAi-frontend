import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../seo-service/seo.service';

@Component({
  selector: 'app-connect',
  imports: [HttpClientModule, FormsModule],
  standalone: true, 
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})

export class ConnectComponent implements OnInit {
  constructor(private http: HttpClient, private meta: Meta, private title: Title, private seoService: SeoService) {
    this.title.setTitle('Connect with SreeVia AI | Your AI Solutions Partner');
    
    this.meta.updateTag({ name: 'description', content: 'Reach out to SreeVia AI for AI consulting, training, and custom solutions that transform businesses. Contact us at +919848022338 for inquiries.' });
    this.meta.updateTag({ name: 'keywords', content: 'contact SreeVia AI, AI solutions partner, AI consulting, AI training, custom AI solutions' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
  ngOnInit(): void {
    this.seoService.updateCanonicalUrl('https://www.sreeviaai.com/connect');
  }

  formData = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  private apiUrl = 'https://sreevia-ai-backend.vercel.app/api/create-connect';

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.phoneNumber && this.formData.message) {
      this.http.post(this.apiUrl, this.formData)
        .subscribe({
          next: (response) => {
            alert('Your message has been submitted successfully!');
            console.log('Response:', response);
            this.resetForm();
          },
          error: (error) => {
            alert('There was an error while submitting the form. Please try again later.');
            console.error('Error:', error);
          }
        });
    } else {
      alert('Please fill in all the fields.');
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
  }
}
