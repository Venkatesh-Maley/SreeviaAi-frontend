import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import HttpClient
import { HttpClientModule } from '@angular/common/http';  // Add HttpClientModule here
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { environment } from '../../environment/environment';

@Component({
  selector: 'app-connect',
  imports: [HttpClientModule, FormsModule],
  standalone: true, // Marking the component as standalone
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})
export class ConnectComponent {
  formData = {
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  // API endpoint for the contact form submission
  private apiUrl = 'https://sreevia-ai-backend.vercel.app/api/create-connect';

  constructor(private http: HttpClient) {}

  // Method to handle form submission
  onSubmit(): void {
    // Make sure form data is valid before sending to backend
    if (this.formData.name && this.formData.email && this.formData.phoneNumber && this.formData.message) {
      this.http.post(this.apiUrl, this.formData)
        .subscribe({
          next: (response) => {
            alert('Your message has been submitted successfully!');
            console.log('Response:', response);
            // Reset the form after successful submission
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

  // Method to reset form fields
  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      phoneNumber: '',
      message: ''
    };
  }
}
