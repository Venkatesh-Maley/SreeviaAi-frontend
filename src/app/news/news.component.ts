import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../seo-service/seo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  constructor(private meta: Meta, private title: Title, private seoService: SeoService, private router: Router) {
    this.title.setTitle('Latest AI News | SreeVia AI Updates & Innovations');

    this.meta.updateTag({ name: 'description', content: 'Stay updated with the latest AI advancements, innovations, and strategic partnerships from SreeVia AI Technologies. Explore news and events now.' });
    this.meta.updateTag({ name: 'keywords', content: 'SreeVia AI news, AI innovations, AI partnerships, AI conferences, AI awards' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
  ngOnInit(): void {
    this.seoService.updateCanonicalUrl('https://www.sreeviaai.com/news');
  }
   posts = [
    { title: 'Strengthening AI through Strategic Partnerships', description: 'Sreevia AI CEO attended the APTA Katalyst Global Business Conference 2025 held in Hyderabad.', date: 'January 5, 2025', image: 'image2.png' },
    { title: 'SreeVia Ai recognized by Global C-Suite Community platform', description: 'SreeVia AI Technologies has been recognized with a prestigious award for AI Innovation.', date: 'December 7, 2025', image: 'image1.png' },
    { title: 'AI meeting conducted by the IESA.', description: 'SreeVia AI CEO attend an AI meeting conducted by the India Electronics and Semiconductor Association (IESA).', date: 'March 15, 2025', image: 'image3.jpg' },
    // { title: 'AI-driven Healthcare Solutions', description: 'Sreevia AI is pioneering solutions in healthcare, transforming patient diagnosis and treatment using AI.', date: 'March 12, 2025', image: 'image3.png' },
    // { title: 'AI in Autonomous Vehicles', description: 'The future of transportation is here, and Sreevia AI is at the forefront of autonomous vehicle technology.', date: 'March 10, 2025', image: 'image3.png' },
    // { title: 'Breaking Boundaries in Natural Language Processing', description: 'Sreevia AI\'s breakthrough in NLP is making waves in industries ranging from healthcare to finance.', date: 'March 8, 2025', image: 'image3.png' },
  ];

  // Initial visible posts (First 3)
  visiblePosts = this.posts.slice(0, 3);

  // Additional posts that will be shown when the "More" button is clicked
  extraPosts = this.posts.slice(3);

  // Track whether extra posts are shown or hidden
  showExtraPosts = false;

  // Function to toggle the visibility of extra posts
  toggleExtraPosts(): void {
    this.showExtraPosts = !this.showExtraPosts;

    if (this.showExtraPosts) {
      this.visiblePosts = this.posts; // Show all posts
    } else {
      this.visiblePosts = this.posts.slice(0, 3); // Show only first 3 posts
    }
  }

  goToDetails(): void {
    this.router.navigate(['/news/readmore']);
  }
}
