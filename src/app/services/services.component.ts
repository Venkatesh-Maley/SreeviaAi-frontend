import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('SreeVia AI Services | Transforming Industries with AI');

    this.meta.updateTag({ name: 'description', content: 'Explore SreeVia AI\'s services, including AI Academy, consulting, and custom solutions for healthcare, education, and more. Contact +919848022338 today.' });
    this.meta.updateTag({ name: 'keywords', content: 'AI services, AI academy, AI consulting, custom AI solutions, healthcare AI, education AI' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
