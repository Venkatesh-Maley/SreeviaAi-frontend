import { Component } from '@angular/core';
import { SeoService } from '../seo-service/seo.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projectsCompleted = 0;
  clientsTrusted = 0;
  employeesCount = 0;
  projectsCount =0;

  targetProjects = 10;
  targetClients = 10;
  targetEmployees = 20;
  targetLaunch = 3;

  // Add index signature to the class to allow dynamic property access
  [key: string]: any;

  constructor(private meta: Meta, private title: Title, private seoService: SeoService) {
    // Add metadata for SEO
    this.title.setTitle('SreeVia AI Technologies');
    this.meta.updateTag({ name: 'description', content: 'SreeVia AI offers cutting-edge AI solutions for various industries, enhancing efficiency and innovation.' });
    this.meta.updateTag({ name: 'keywords', content: 'AI, Artificial Intelligence, AI Solutions, Industry AI, SreeVia AI' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  ngOnInit(): void {

    this.seoService.updateCanonicalUrl('https://www.sreeviaai.com/');

    this.animateNumber('projectsCompleted', this.targetProjects, 10);
    this.animateNumber('clientsTrusted', this.targetClients, 10);
    this.animateNumber('employeesCount', this.targetEmployees, 10);
    this.animateNumber('projectsCount', this.targetLaunch, 10)
  }

  animateNumber(variableName: string, target: number, speed: number): void {
    let currentValue = 0;
    const interval = setInterval(() => {
      if (currentValue < target) {
        currentValue++;
        this[variableName] = currentValue; // Access the property dynamically
      } else {
        clearInterval(interval);
      }
    }, speed);
  }
}