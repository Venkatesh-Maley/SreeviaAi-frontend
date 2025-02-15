import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('About SreeVia AI | Empowering Innovation Through AI');
    this.meta.updateTag({ name: 'description', content: 'Learn about SreeVia AI\'s mission to democratize AI for all sectors with education, consulting, and tailored solutions. Call us at +919848022338.' });
    this.meta.updateTag({ name: 'keywords', content: 'about SreeVia AI, AI democratization, AI for all sectors, innovation, consulting, education' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' }); // Ensure search engines index and follow links
  }
}
