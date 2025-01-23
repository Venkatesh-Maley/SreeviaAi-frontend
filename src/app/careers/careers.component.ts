import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent {
  // Job data (For demonstration, you can replace this with your actual data)
  jobs = [
    { title: 'Software Engineer', location: 'Hyderabad', type: 'Full-Time', description: 'Develop and maintain web applications using Angular and Node.js.' },
    { title: 'Data Scientist', location: 'Remote', type: 'Part-Time', description: 'Analyze large datasets to derive actionable insights and build predictive models.' },
    { title: 'Frontend Developer', location: 'Bangalore', type: 'Full-Time', description: 'Build and maintain the front end of web applications using Angular or React.' },
    { title: 'Backend Developer', location: 'Pune', type: 'Full-Time', description: 'Design and implement server-side logic using Node.js, Express.js, and MongoDB.' },
    { title: 'UX/UI Designer', location: 'Remote', type: 'Part-Time', description: 'Design intuitive and engaging user interfaces for web and mobile apps.' },
    { title: 'Product Manager', location: 'Delhi', type: 'Full-Time', description: 'Lead product development initiatives and collaborate with cross-functional teams.' },
  ];

  // Initial visible jobs (First 3)
  visibleJobs = this.jobs.slice(0, 3);

  // Additional jobs that will be shown when the "More" button is clicked
  extraJobs = this.jobs.slice(3);

  // Track whether extra jobs are shown or hidden
  showExtraJobs = false;

  // Function to toggle the visibility of extra jobs
  toggleExtraJobs(): void {
    this.showExtraJobs = !this.showExtraJobs;

    if (this.showExtraJobs) {
      this.visibleJobs = this.jobs; // Show all jobs
    } else {
      this.visibleJobs = this.jobs.slice(0, 3); // Show only first 3 jobs
    }
  }

}
