import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, HostListener } from '@angular/core';

interface HeroContent {
  badge: {
    icon: string;
    text: string;
  };
  mainTitle: string;
  subTitle: string;
  description: string;
  buttons: {
    primary: string;
    secondary: string;
  };
  stats: Array<{
    number: string;
    label: string;
  }>;
}

declare var gtag: Function;

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  
  // State
  isVisible = false;
  
  // Timer
  private animationTimeout: any;

  // Subtle Green Hero Content
  heroContent: HeroContent = {
    badge: {
      icon: '🚀',
      text: 'Leading IT Solutions in Thailand'
    },
    mainTitle: 'นวัตกรรมเทคโนโลยี',
    subTitle: 'สำหรับธุรกิจยุคใหม่',
    description: 'เราพัฒนาโซลูชันที่ตอบโจทย์ทุกความต้องการของธุรกิจ ด้วยเทคโนโลยีล่าสุดและทีมงานมืออาชีพ',
    buttons: {
      primary: 'เริ่มต้นโปรเจค',
      secondary: 'ดูผลงาน'
    },
    stats: [
      { number: '500+', label: 'โปรเจคสำเร็จ' },
      { number: '200+', label: 'ลูกค้าพึงพอใจ' },
      { number: '15+', label: 'ปีประสบการณ์' },
      { number: '50+', label: 'ทีมผู้เชี่ยวชาญ' }
    ]
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeComponent();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.cleanup();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibility();
    }
  }

  private initializeComponent(): void {
    // Smooth initialization with subtle timing
    this.animationTimeout = setTimeout(() => {
      this.isVisible = true;
    }, 200);

    this.updateVisibility();
  }

  private cleanup(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
  }

  private updateVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.isVisible = true;
  }

  // Actions
  startProject(): void {
    this.scrollToSection('contact');
    this.trackEvent('start_project_clicked');
  }

  viewPortfolio(): void {
    this.scrollToSection('portfolio');
    this.trackEvent('view_portfolio_clicked');
  }

  private scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId) || typeof document === 'undefined') return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  // Content Management Methods
  updateHeroContent(newContent: Partial<HeroContent>): void {
    this.heroContent = { ...this.heroContent, ...newContent };
    this.saveContent();
    this.trackEvent('content_updated', Object.keys(newContent));
  }

  updateBadge(icon: string, text: string): void {
    this.heroContent.badge = { icon, text };
    this.saveContent();
    this.trackEvent('badge_updated');
  }

  updateTitles(mainTitle: string, subTitle: string): void {
    this.heroContent.mainTitle = mainTitle;
    this.heroContent.subTitle = subTitle;
    this.saveContent();
    this.trackEvent('titles_updated');
  }

  updateDescription(description: string): void {
    this.heroContent.description = description;
    this.saveContent();
    this.trackEvent('description_updated');
  }

  updateButtons(primary: string, secondary: string): void {
    this.heroContent.buttons = { primary, secondary };
    this.saveContent();
    this.trackEvent('buttons_updated');
  }

  updateStats(stats: Array<{ number: string; label: string }>): void {
    this.heroContent.stats = stats;
    this.saveContent();
    this.trackEvent('stats_updated');
  }

  addStat(number: string, label: string): void {
    this.heroContent.stats.push({ number, label });
    this.saveContent();
    this.trackEvent('stat_added');
  }

  removeStat(index: number): void {
    if (index >= 0 && index < this.heroContent.stats.length) {
      this.heroContent.stats.splice(index, 1);
      this.saveContent();
      this.trackEvent('stat_removed');
    }
  }

  updateStat(index: number, number: string, label: string): void {
    if (index >= 0 && index < this.heroContent.stats.length) {
      this.heroContent.stats[index] = { number, label };
      this.saveContent();
      this.trackEvent('stat_updated');
    }
  }

  // Content Persistence
  private saveContent(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    try {
      const contentJson = JSON.stringify(this.heroContent);
      localStorage.setItem('subtleGreenHeroContent', contentJson);
      console.log('Subtle green hero content saved:', this.heroContent);
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  }

  loadContent(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    try {
      const saved = localStorage.getItem('subtleGreenHeroContent');
      if (saved) {
        const parsed = JSON.parse(saved);
        this.heroContent = { ...this.heroContent, ...parsed };
      }
    } catch (error) {
      console.error('Failed to load content:', error);
    }
  }

  // Import/Export
  exportContent(): string {
    return JSON.stringify(this.heroContent, null, 2);
  }

  importContent(contentJson: string): boolean {
    try {
      const parsed = JSON.parse(contentJson);
      this.validateContent(parsed);
      this.heroContent = parsed;
      this.saveContent();
      this.trackEvent('content_imported');
      return true;
    } catch (error) {
      console.error('Failed to import content:', error);
      this.trackEvent('content_import_failed');
      return false;
    }
  }

  private validateContent(content: any): void {
    const required = ['badge', 'mainTitle', 'subTitle', 'description', 'buttons'];
    
    for (const field of required) {
      if (!content[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
    
    if (!content.badge.icon || !content.badge.text) {
      throw new Error('Badge must have icon and text');
    }
    
    if (!content.buttons.primary || !content.buttons.secondary) {
      throw new Error('Both buttons must be defined');
    }
  }

  // Reset to Default
  resetToDefault(): void {
    const defaultContent: HeroContent = {
      badge: {
        icon: '🚀',
        text: 'Leading IT Solutions in Thailand'
      },
      mainTitle: 'นวัตกรรมเทคโนโลยี',
      subTitle: 'สำหรับธุรกิจยุคใหม่',
      description: 'เราพัฒนาโซลูชันที่ตอบโจทย์ทุกความต้องการของธุรกิจ ด้วยเทคโนโลยีล่าสุดและทีมงานมืออาชีพ',
      buttons: {
        primary: 'เริ่มต้นโปรเจค',
        secondary: 'ดูผลงาน'
      },
      stats: [
        { number: '500+', label: 'โปรเจคสำเร็จ' },
        { number: '200+', label: 'ลูกค้าพึงพอใจ' },
        { number: '15+', label: 'ปีประสบการณ์' },
        { number: '50+', label: 'ทีมผู้เชี่ยวชาญ' }
      ]
    };
    
    this.heroContent = defaultContent;
    this.saveContent();
    this.trackEvent('content_reset');
  }

  // Theme Variations
  setThemeVariation(variation: 'subtle' | 'vibrant' | 'minimal'): void {
    const themeClass = `theme-${variation}`;
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.className = document.body.className
        .replace(/theme-\w+/g, '')
        .trim();
      document.body.classList.add(themeClass);
      
      this.trackEvent('theme_variation_changed', { variation });
    }
  }

  // Analytics
  private trackEvent(eventName: string, eventData?: any): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const trackingData = {
      event: eventName,
      data: eventData,
      timestamp: new Date().toISOString(),
      component: 'subtle-green-hero'
    };

    console.log('Event tracked:', trackingData);
    
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: 'subtle_green_hero',
        event_label: JSON.stringify(eventData),
        value: 1
      });
    }
  }

  // Performance
  trackByStatIndex(index: number, stat: { number: string; label: string }): number {
    return index;
  }

  // Accessibility
  onKeyDown(event: KeyboardEvent): void {
    if (!isPlatformBrowser(this.platformId)) return;

    if (event.key === 'Enter' || event.key === ' ') {
      if (event.target instanceof HTMLButtonElement) {
        event.preventDefault();
        event.target.click();
      }
    }
  }

  // Theme Utilities
  getThemeColors(): { [key: string]: string } {
    return {
      primary: '#22c55e',
      secondary: '#16a34a',
      accent: '#10b981',
      background: '#f0fdf4',
      text: '#374151'
    };
  }

  previewTheme(colors: { [key: string]: string }): void {
    if (!isPlatformBrowser(this.platformId)) return;
    
    // Apply custom CSS properties for theme preview
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--preview-${key}`, value);
    });
    
    this.trackEvent('theme_previewed', colors);
  }

  // Component Health
  isComponentHealthy(): boolean {
    return !!(
      this.heroContent &&
      this.heroContent.mainTitle &&
      this.heroContent.description &&
      this.heroContent.buttons.primary
    );
  }

  getComponentStatus(): string {
    if (!this.isComponentHealthy()) return 'error';
    if (!this.isVisible) return 'loading';
    return 'ready';
  }

  // Lifecycle
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadContent();
      this.trackEvent('component_initialized');
    }
  }
}