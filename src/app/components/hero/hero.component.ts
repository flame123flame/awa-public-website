// hero.component.ts
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID, HostListener, ChangeDetectorRef } from '@angular/core';

interface HeroContent {
 
  mainTitle: string;
  subTitle: string;
  description: string;
  highlights: string[];
  buttons: {
    primary: string;
    secondary: string;
  };
  stats: Array<{
    number: string;
    label: string;
    target: number;
  }>;
}

interface FloatingCube {
  x: number;
  y: number;
  delay: number;
}

interface Particle {
  x: number;
  y: number;
  delay: number;
  duration: number;
}

interface TechNode {
  x: number;
  y: number;
  icon: string;
  label: string;
}

interface DataPoint {
  x: number;
  y: number;
  value: string;
  delay: number;
}

interface Notification {
  title: string;
  subtitle: string;
  visible: boolean;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  
  // Component State
  isVisible = false;
  showNotifications = true;
  scrollText = 'เลื่อนลงเพื่อดูบริการ';
  
  // Animation Elements
  floatingCubes: FloatingCube[] = [];
  particles: Particle[] = [];
  techNodes: TechNode[] = [];
  dataPoints: DataPoint[] = [];
  gridLines: number[] = Array(20).fill(0);
  badgeSparkles: number[] = Array(4).fill(0);
  scrollArrows: number[] = Array(3).fill(0);
  hologramLayers: number[] = Array(3).fill(0);
  
  // Text Animation
  titleWords: string[] = [];
  subtitleWords: string[] = [];
  
  // Statistics Animation
  animatedStats: string[] = [];
  
  // Notifications
  notifications: Notification[] = [
    { title: 'โปรเจคสำเร็จ', subtitle: 'ระบบ ERP สำหรับบริษัท ABC', visible: false },
    { title: 'ลูกค้าใหม่', subtitle: 'Partnership กับ XYZ Corp', visible: false },
    { title: 'รางวัลใหม่', subtitle: 'IT Excellence Award 2024', visible: false }
  ];
  
  // Timers and Intervals
  private animationTimeout?: any;
  private statsInterval?: any;
  private notificationInterval?: any;
  private intersectionObserver?: IntersectionObserver;

  // Hero Content
  heroContent: HeroContent = {
    
    mainTitle: 'นวัตกรรม',
    subTitle: 'เทคโนโลยีเพื่อธุรกิจ',
    description: 'พัฒนาโซลูชันเทคโนโลยีสารสนเทศที่ล้ำสมัย ด้วยทีมผู้เชี่ยวชาญและเครื่องมือที่ทันสมัย เพื่อขับเคลื่อนธุรกิจของคุณไปสู่อนาคต',
    highlights: [
      'ปรึกษาและวิเคราะห์ฟรี',
      'ทีมพัฒนามืออาชีพ',
      'รับประกันคุณภาพ 100%',
      'บริการหลังการขาย 24/7'
    ],
    buttons: {
      primary: 'เริ่มต้นโปรเจค',
      secondary: 'ดูผลงาน'
    },
    stats: [
      { number: '500+', label: 'โปรเจคสำเร็จ', target: 500 },
      { number: '300+', label: 'ลูกค้าพึงพอใจ', target: 300 },
      { number: '10+', label: 'ปีประสบการณ์', target: 10 },
      { number: '40+', label: 'ผู้เชี่ยวชาญ', target: 40 }
    ]
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {
    this.initializeAnimationElements();
    this.splitTitleWords();
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeComponent();
      this.setupIntersectionObserver();
      this.startNotifications();
    }
  }

  ngOnDestroy(): void {
    this.cleanup();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updateVisibility();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.handleResize();
    }
  }

  // Initialize all animation elements
  private initializeAnimationElements(): void {
    // Initialize floating cubes
    this.floatingCubes = Array.from({ length: 6 }, () => ({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      delay: Math.random() * 4
    }));

    // Initialize particles
    this.particles = Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 4 + 6
    }));

    // Initialize tech nodes
    this.techNodes = [
      { x: 20, y: 30, icon: 'M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z', label: 'Security' },
      { x: 80, y: 25, icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z', label: 'Code' },
      { x: 15, y: 75, icon: 'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z', label: 'Database' },
      { x: 85, y: 70, icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', label: 'Cloud' }
    ];

    // Initialize data points
    this.dataPoints = [
      { x: 25, y: 20, value: '99.9%', delay: 1 },
      { x: 75, y: 15, value: 'Real-time', delay: 2 },
      { x: 20, y: 80, value: '24/7', delay: 3 },
      { x: 80, y: 85, value: 'Secure', delay: 4 }
    ];

    // Initialize animated stats
    this.animatedStats = this.heroContent.stats.map(() => '0');
  }

  private splitTitleWords(): void {
    this.titleWords = this.heroContent.mainTitle.split(' ');
    this.subtitleWords = this.heroContent.subTitle.split(' ');
  }

  private initializeComponent(): void {
    this.animationTimeout = setTimeout(() => {
      this.isVisible = true;
      this.startStatsAnimation();
      this.cdr.detectChanges();
    }, 500);
  }

  private setupIntersectionObserver(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const options = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isVisible) {
          this.isVisible = true;
          this.startStatsAnimation();
          this.cdr.detectChanges();
        }
      });
    }, options);

    const heroElement = document.getElementById('home');
    if (heroElement) {
      this.intersectionObserver.observe(heroElement);
    }
  }

  private updateVisibility(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const heroElement = document.getElementById('home');
    if (heroElement) {
      const rect = heroElement.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isInViewport && !this.isVisible) {
        this.isVisible = true;
        this.startStatsAnimation();
        this.cdr.detectChanges();
      }
    }
  }

  private handleResize(): void {
    // Reinitialize elements on resize for better responsive behavior
    if (window.innerWidth <= 768) {
      this.adjustForMobile();
    }
  }

  private adjustForMobile(): void {
    // Reduce particles and effects for mobile performance
    this.particles = this.particles.slice(0, 10);
    this.floatingCubes = this.floatingCubes.slice(0, 3);
  }

  // Statistics Animation
  private startStatsAnimation(): void {
    if (this.statsInterval) return;

    this.heroContent.stats.forEach((stat, index) => {
      this.animateStatNumber(index, stat.target, stat.number);
    });
  }

  private animateStatNumber(index: number, target: number, originalText: string): void {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      current += increment;
      step++;

      if (step >= steps) {
        this.animatedStats[index] = originalText;
        clearInterval(timer);
      } else {
        const value = Math.floor(current);
        this.animatedStats[index] = value.toString() + (originalText.includes('+') ? '+' : '');
      }

      this.cdr.detectChanges();
    }, duration / steps);
  }

  // Notifications System
  private startNotifications(): void {
    if (!this.showNotifications) return;

    this.notificationInterval = setTimeout(() => {
      this.showNotification(0);
    }, 5000);
  }

  private showNotification(index: number): void {
    if (index >= this.notifications.length) return;

    this.notifications[index].visible = true;
    this.cdr.detectChanges();

    // Hide after 3 seconds and show next
    setTimeout(() => {
      this.notifications[index].visible = false;
      this.showNotification(index + 1);
      this.cdr.detectChanges();
    }, 3000);
  }

  // User Actions
  startProject(): void {
    this.scrollToSection('contact');
    this.trackEvent('hero_start_project_clicked');
    
    // Show a success animation or notification
    if (isPlatformBrowser(this.platformId)) {
      this.showSuccessRipple();
    }
  }

  viewServices(): void {
    this.scrollToSection('services');
    this.trackEvent('hero_view_services_clicked');
  }

  private showSuccessRipple(): void {
    // Add visual feedback for button click
    const button = document.querySelector('.btn-primary-3d') as HTMLElement;
    if (button) {
      button.style.transform = 'translateY(-8px) rotateY(10deg) rotateX(10deg) scale(1.05)';
      setTimeout(() => {
        button.style.transform = '';
      }, 300);
    }
  }

  private scrollToSection(sectionId: string): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 90;
      const elementPosition = element.offsetTop - headerHeight;
      
      // Enhanced smooth scroll with custom easing
      this.smoothScrollTo(elementPosition);
    }
  }

  private smoothScrollTo(targetPosition: number): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = Math.min(Math.abs(distance) / 2, 1000);
    let start: number | null = null;

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Custom easing function (ease-out-cubic)
      const ease = 1 - Math.pow(1 - progress, 3);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  // Helper Methods
  getStatIcon(index: number): string {
    const icons = [
      'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Success icon
      'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', // Team icon
      'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', // Time icon
      'M13 10V3L4 14h7v7l9-11h-7z' // Power/Expert icon
    ];
    return icons[index] || icons[0];
  }

  getNodeTransform(node: TechNode): string {
    return `translate(${node.x}%, ${node.y}%)`;
  }

  // Performance Tracking
  trackByParticle(index: number, particle: Particle): string {
    return `${particle.x}-${particle.y}-${particle.delay}`;
  }

  trackByStatIndex(index: number, stat: any): number {
    return index;
  }

  trackByCube(index: number, cube: FloatingCube): string {
    return `${cube.x}-${cube.y}-${cube.delay}`;
  }

  // Analytics
  private trackEvent(eventName: string, data?: any): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log(`Event: ${eventName}`, data);
      
      // Example: Google Analytics 4
      // gtag('event', eventName, {
      //   event_category: 'hero_interaction',
      //   event_label: eventName,
      //   custom_parameter: data
      // });
    }
  }

  // Accessibility
  onKeyDown(event: KeyboardEvent, action: () => void): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  }

  onButtonFocus(event: FocusEvent): void {
    const target = event.target as HTMLElement;
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  }

  // Performance Optimization
  private preloadAssets(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // Preload critical images or assets
    const imageUrls: string[] = [
      // Add any image URLs that need preloading
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

  // Error Handling
  onImageError(event: Event): void {
    const target = event.target as HTMLImageElement;
    if (target) {
      target.style.display = 'none';
      console.warn('Hero image failed to load:', target.src);
    }
  }

  // SEO and Meta Tags
  updateMetaTags(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', this.heroContent.description);
    }

    document.title = `${this.heroContent.mainTitle} ${this.heroContent.subTitle} - AWA IT Solutions`;
  }

  // Theme Management
  getCurrentTheme(): 'light' | 'dark' {
    if (!isPlatformBrowser(this.platformId)) return 'light';
    
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }

  // Performance Monitoring
  private measureComponentPerformance(): void {
    if (!isPlatformBrowser(this.platformId) || !window.performance) return;

    const startTime = performance.now();
    
    requestAnimationFrame(() => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      if (renderTime > 16) { // More than one frame (60fps)
        console.warn(`Hero component render time: ${renderTime.toFixed(2)}ms`);
      }
    });
  }

  // Cleanup
  private cleanup(): void {
    if (this.animationTimeout) {
      clearTimeout(this.animationTimeout);
    }
    
    if (this.statsInterval) {
      clearTimeout(this.statsInterval);
    }
    
    if (this.notificationInterval) {
      clearTimeout(this.notificationInterval);
    }

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  // Utility Methods
  getAnimationDelay(index: number, baseDelay: number = 0): string {
    return `${baseDelay + (index * 0.1)}s`;
  }

  formatNumber(num: number): string {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  // Dynamic Content Management
  updateHeroContent(newContent: Partial<HeroContent>): void {
    this.heroContent = { ...this.heroContent, ...newContent };
    this.splitTitleWords();
    this.cdr.detectChanges();
  }

  // Interaction Handlers
  onOrbClick(): void {
    this.trackEvent('orb_clicked');
    // Add any special interaction for the central orb
  }

  onNodeClick(node: TechNode): void {
    this.trackEvent('tech_node_clicked', { node: node.label });
    // Show more information about the technology
  }

  // State Management
  toggleNotifications(): void {
    this.showNotifications = !this.showNotifications;
    
    if (this.showNotifications) {
      this.startNotifications();
    } else {
      this.notifications.forEach(notification => {
        notification.visible = false;
      });
    }
    
    this.cdr.detectChanges();
  }

  // Data Management
  refreshStats(): void {
    this.animatedStats = this.heroContent.stats.map(() => '0');
    this.startStatsAnimation();
  }

  // Interaction Effects
  onHover(elementType: string): void {
    this.trackEvent('element_hovered', { type: elementType });
  }

  onClick(elementType: string): void {
    this.trackEvent('element_clicked', { type: elementType });
  }
}