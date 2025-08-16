// hero.component.ts
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

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  
  // State
  isVisible = false;
  
  // Timer
  private animationTimeout: any;

  // IT Solutions Hero Content
  heroContent: HeroContent = {
    badge: {
      icon: '💡',
      text: 'Leading IT Solutions Provider'
    },
    mainTitle: 'นวัตกรรม IT Solutions',
    subTitle: 'เพื่อธุรกิจที่เติบโต',
    description: 'พัฒนาโซลูชันเทคโนโลยีสารสนเทศที่ตอบโจทย์ทุกความต้องการของธุรกิจสมัยใหม่ ด้วยทีมผู้เชี่ยวชาญและเทคโนโลยีล้ำสมัย',
    buttons: {
      primary: 'เริ่มต้นใช้งาน',
      secondary: 'ดูบริการ'
    },
    stats: [
      { number: '500+', label: 'โปรเจคสำเร็จ' },
      { number: '300+', label: 'ลูกค้าพึงพอใจ' },
      { number: '10+', label: 'ปีประสบการณ์' },
      { number: '40+', label: 'ผู้เชี่ยวชาญ' }
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
    this.animationTimeout = setTimeout(() => {
      this.isVisible = true;
    }, 300);
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
    console.log('Start project clicked');
  }

  viewServices(): void {
    this.scrollToSection('services');
    console.log('View services clicked');
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

  // Performance tracking
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
}