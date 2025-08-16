import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isMobileMenuOpen = false;
  isScrolled = false;
  currentSection = 'hero';

  @Inject(PLATFORM_ID) private platformId!: Object;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScrollPosition();
      this.updateActiveNavigation();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
   
      this.checkScrollPosition();
      this.updateActiveNavigation();

  }

  private checkScrollPosition(): void {
    this.isScrolled = window.scrollY > 20;
  }

  private updateActiveNavigation(): void {
    const sections = ['hero', 'about', 'service', 'portfolio', 'team', 'careers', 'contact'];
    const scrollPosition = window.scrollY + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.querySelector(`app-${sections[i]}`) as HTMLElement;
      if (element && element.offsetTop <= scrollPosition) {
        this.currentSection = sections[i];
        
        // Update navigation items
        this.navigationItems.forEach(item => {
          item.active = item.id === this.currentSection;
        });
        break;
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    if (isPlatformBrowser(this.platformId)) {
      if (this.isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }


  scrollToSectionMenu(sectionId: string , item:any): void {
    // if (!isPlatformBrowser(this.platformId)) return;
  this.navigationItems.forEach(navItem => {
    navItem.active = false;
  });
  
  // Set item ที่คลิกให้เป็น active
  item.active = true;
    const element = document.querySelector(`app-${sectionId}`) as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after navigation
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  scrollToSection(sectionId: string ): void {
    // if (!isPlatformBrowser(this.platformId)) return;
    
    const element = document.querySelector(`app-${sectionId}`) as HTMLElement;
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu after navigation
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.style.overflow = 'auto';
    }
  }

  // Navigation items - อัพเดทให้ตรงกับ sections จริง
  navigationItems = [
    { id: 'hero', label: 'หน้าแรก', active: true },
    { id: 'about', label: 'เกี่ยวกับเรา', active: false },
    { id: 'service', label: 'บริการ', active: false },
    { id: 'portfolio', label: 'ผลงาน', active: false },
    { id: 'team', label: 'ทีมงาน', active: false },
    { id: 'careers', label: 'ร่วมงาน', active: false },
    { id: 'contact', label: 'ติดต่อเรา', active: false }
  ];

  trackByFn(index: number, item: any): any {
  return item.id;
}
}
