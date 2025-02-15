import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor() {}

  updateCanonicalUrl(url: string): void {
    const existingLink: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    
    if (existingLink) {
      existingLink.href = url;
    } else {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }
}
