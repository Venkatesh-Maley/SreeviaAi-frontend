import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  updateCanonicalUrl(url: string): void {
    if (isPlatformBrowser(this.platformId)) {
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
}
