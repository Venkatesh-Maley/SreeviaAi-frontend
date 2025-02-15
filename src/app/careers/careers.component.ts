import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../seo-service/seo.service';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit  {

  constructor(private meta: Meta, private title: Title, private seoService: SeoService) {
    this.title.setTitle('Careers at Sreevia AI | Join Our Team and Shape the Future of AI');

    this.meta.updateTag({ name: 'description', content: 'Explore exciting career opportunities at Sreevia AI. Join our team of AI innovators and grow your career in artificial intelligence, machine learning, and technology-driven solutions.' });
    this.meta.updateTag({ name: 'keywords', content: 'AI careers, artificial intelligence jobs, machine learning careers, job openings at Sreevia AI, AI engineer jobs, data science jobs, deep learning jobs, technology careers, AI company hiring, careers in AI and ML' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' }); // Ensure search engines index and follow links
  }

  ngOnInit(): void {
    this.seoService.updateCanonicalUrl('https://www.sreeviaai.com/careers');
  }


  // Job data (For demonstration, you can replace this with your actual data)
  jobs = [
    { title: 'Software Engineer', location: 'Hyderabad', type: 'Full-Time', description: 'Develop and maintain web applications using Angular and Node.js.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCEhpFvlml6scBiIFDkRbOEHv67YfcztcqALgCixqxQ3GtNw/viewform'
     },
    { title: 'IOS and Android developers', location: 'Hyderabad', type: 'Full-Time', description: 'Develop and maintain IOS and Android Applications',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCEhpFvlml6scBiIFDkRbOEHv67YfcztcqALgCixqxQ3GtNw/viewform'
    },
    { title: 'Data Scientist', location: 'Hyderabad', type: 'Full-Time', description: 'Analyze large datasets to derive actionable insights and build predictive models.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCEhpFvlml6scBiIFDkRbOEHv67YfcztcqALgCixqxQ3GtNw/viewform'
    },
    { title: 'Frontend Developer', location: 'Hyderabad', type: 'Full-Time', description: 'Build and maintain the front end of web applications using Angular or React.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCEhpFvlml6scBiIFDkRbOEHv67YfcztcqALgCixqxQ3GtNw/viewform'
     },
    { title: 'Backend Developer', location: 'Hyderabad', type: 'Full-Time', description: 'Design and implement server-side logic using Node.js, Express.js, and MongoDB.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCEhpFvlml6scBiIFDkRbOEHv67YfcztcqALgCixqxQ3GtNw/viewform'
    },
    { title: 'UX/UI Designer', location: 'Hyderabad', type: 'Full-Time', description: 'Design intuitive and engaging user interfaces for web and mobile apps.',
      formLink: 'https://docs.google.com/forms/d/e/1FAIpQLScCEhpFvlml6scBiIFDkRbOEHv67YfcztcqALgCixqxQ3GtNw/viewform'
    }
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

  applyNow(job: any): void {
    window.open(job.formLink, '_blank');
  }

}
