import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TuiButton, TuiDropdown } from '@taiga-ui/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TuiButton, TuiDropdown],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  protected readonly navItems = [
    { label: 'Accueil', fragment: '#home' },
    { label: 'À propos', fragment: '#about' },
    { label: 'Projets', fragment: '#projects' },
    { label: 'Compétences', fragment: '#skills' },
    { label: 'Blog', fragment: '#blog' },
  ];

  protected socialLinks = [
    { icon: 'mdi:github', url: '#', label: 'GitHub' },
    { icon: 'mdi:linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'mdi:twitter', url: '#', label: 'Twitter' },
  ];

  protected menuOpen = false;
  protected isDarkMode = true;
  protected currentLang = 'FR';

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.syncBodyScroll();
  }

  protected closeMenu(): void {
    this.menuOpen = false;
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    if (typeof document === 'undefined') {
      return;
    }

    document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  protected toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.documentElement.classList.remove('light-theme');
        document.body.classList.remove('light-theme');
      } else {
        document.documentElement.classList.add('light-theme');
        document.body.classList.add('light-theme');
      }
    }
  }

  protected selectLanguage(lang: string): void {
    this.currentLang = lang;
  }
}
