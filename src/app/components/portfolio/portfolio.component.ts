import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  isVisible = false;
  activeFilter = 'all';
  selectedProject: any = null;
  showProjectModal = false;
  @Inject(PLATFORM_ID) private platformId!: Object
  constructor() { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    }
  }

  // Filter categories
  filterCategories = [
    { id: 'all', label: 'ทั้งหมด', count: 12 },
    { id: 'web-app', label: 'Web Application', count: 5 },
    { id: 'mobile-app', label: 'Mobile App', count: 3 },
    { id: 'e-commerce', label: 'E-commerce', count: 2 },
    { id: 'cloud', label: 'Cloud Solutions', count: 1 },
    { id: 'ui-ux', label: 'UI/UX Design', count: 1 }
  ];

  // Portfolio projects
  portfolioProjects = [
    {
      id: 1,
      title: 'TechMart E-commerce Platform',
      subtitle: 'แพลตฟอร์มอีคอมเมิร์ซครบครัน',
      category: 'e-commerce',
      client: 'TechMart Co., Ltd.',
      description: 'แพลตฟอร์มการค้าออนไลน์ที่รองรับการขายสินค้าเทคโนโลยี พร้อมระบบจัดการสต็อก การชำระเงิน และการจัดส่ง',
      image: 'portfolio-ecommerce-1.jpg',
      gallery: [
        'portfolio-ecommerce-1.jpg',
        'portfolio-ecommerce-2.jpg',
        'portfolio-ecommerce-3.jpg'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'ระบบจัดการสินค้า 10,000+ รายการ',
        'Payment Gateway หลากหลายช่องทาง',
        'ระบบแนะนำสินค้าด้วย AI',
        'Admin Dashboard แบบ Real-time',
        'Mobile-first Responsive Design'
      ],
      results: [
        { label: 'เพิ่มยอดขาย', value: '300%' },
        { label: 'ลดเวลาโหลด', value: '70%' },
        { label: 'User Satisfaction', value: '4.8/5' }
      ],
      timeline: '4 เดือน',
      year: '2024',
      status: 'completed',
      liveUrl: 'https://techmart.example.com',
      featured: true
    },
    {
      id: 2,
      title: 'HealthCare Mobile App',
      subtitle: 'แอปพลิเคชันดูแลสุขภาพ',
      category: 'mobile-app',
      client: 'MedCenter Hospital',
      description: 'แอปพลิเคชันบนมือถือสำหรับการจองนัดหมายแพทย์ ติดตามสุขภาพ และปรึกษาแพทย์ออนไลน์',
      image: 'portfolio-healthcare.jpg',
      gallery: [
        'portfolio-healthcare-1.jpg',
        'portfolio-healthcare-2.jpg',
        'portfolio-healthcare-3.jpg'
      ],
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Node.js', 'MongoDB'],
      features: [
        'จองนัดหมายแพทย์ออนไลน์',
        'Video Call กับแพทย์',
        'ติดตามประวัติการรักษา',
        'แจ้งเตือนทานยา',
        'แชร์ข้อมูลกับครอบครัว'
      ],
      results: [
        { label: 'ผู้ใช้งาน', value: '50K+' },
        { label: 'การจองนัด', value: '90%' },
        { label: 'App Rating', value: '4.7/5' }
      ],
      timeline: '6 เดือน',
      year: '2024',
      status: 'completed',
      featured: true
    },
    {
      id: 3,
      title: 'SmartOffice Management System',
      subtitle: 'ระบบจัดการสำนักงานอัจฉริยะ',
      category: 'web-app',
      client: 'Corporate Solutions Ltd.',
      description: 'ระบบบริหารจัดการสำนักงานแบบครบครัน รวมการจัดการพนักงาน การประชุม และทรัพยากรบริษัท',
      image: 'portfolio-office.jpg',
      gallery: [
        'portfolio-office-1.jpg',
        'portfolio-office-2.jpg',
        'portfolio-office-3.jpg'
      ],
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'SignalR'],
      features: [
        'จัดการข้อมูลพนักงาน',
        'ระบบจองห้องประชุม',
        'ติดตามเวลาทำงาน',
        'Dashboard สำหรับผู้บริหาร',
        'การแจ้งเตือนแบบ Real-time'
      ],
      results: [
        { label: 'ประสิทธิภาพ', value: '+40%' },
        { label: 'ลดเวลาการทำงาน', value: '60%' },
        { label: 'ROI', value: '250%' }
      ],
      timeline: '8 เดือน',
      year: '2023',
      status: 'completed',
      featured: false
    },
    {
      id: 4,
      title: 'EduTech Learning Platform',
      subtitle: 'แพลตฟอร์มการเรียนรู้ออนไลน์',
      category: 'web-app',
      client: 'EduTech Academy',
      description: 'แพลตฟอร์มการเรียนรู้ออนไลน์ที่รองรับคอร์สเรียนหลากหลาย พร้อมระบบติดตามความก้าวหน้า',
      image: 'portfolio-edutech.jpg',
      gallery: [
        'portfolio-edutech-1.jpg',
        'portfolio-edutech-2.jpg'
      ],
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS S3'],
      features: [
        'ระบบคอร์สเรียนออนไลน์',
        'Live Streaming สำหรับเรียน',
        'Quiz และ Assignment',
        'ติดตามความก้าวหน้า',
        'Certificate หลังจบคอร์ส'
      ],
      results: [
        { label: 'นักเรียน', value: '25K+' },
        { label: 'คอร์สเรียน', value: '500+' },
        { label: 'Completion Rate', value: '85%' }
      ],
      timeline: '5 เดือน',
      year: '2023',
      status: 'completed',
      featured: false
    },
    {
      id: 5,
      title: 'Financial Dashboard',
      subtitle: 'แดชบอร์ดการเงินแบบ Real-time',
      category: 'web-app',
      client: 'InvestPro Financial',
      description: 'แดชบอร์ดการวิเคราะห์และติดตามการลงทุน พร้อมกราฟและรายงานแบบ Real-time',
      image: 'portfolio-fintech.jpg',
      gallery: [
        'portfolio-fintech-1.jpg',
        'portfolio-fintech-2.jpg'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'WebSocket', 'Chart.js'],
      features: [
        'Real-time Market Data',
        'Portfolio Tracking',
        'Risk Analysis Tools',
        'Custom Reports',
        'Alert System'
      ],
      results: [
        { label: 'ผู้ใช้งาน', value: '15K+' },
        { label: 'ข้อมูล Real-time', value: '99.9%' },
        { label: 'User Engagement', value: '+80%' }
      ],
      timeline: '3 เดือน',
      year: '2024',
      status: 'completed',
      featured: false
    },
    {
      id: 6,
      title: 'FoodDelivery Mobile App',
      subtitle: 'แอปสั่งอาหารออนไลน์',
      category: 'mobile-app',
      client: 'QuickEats Co.',
      description: 'แอปพลิเคชันสั่งอาหารที่เชื่อมต่อร้านอาหารกับลูกค้า พร้อมระบบติดตามการจัดส่ง',
      image: 'portfolio-food-delivery.jpg',
      gallery: [
        'portfolio-food-1.jpg',
        'portfolio-food-2.jpg'
      ],
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps'],
      features: [
        'สั่งอาหารจากร้านหลากหลาย',
        'Real-time Order Tracking',
        'Multiple Payment Options',
        'Rating & Review System',
        'Push Notifications'
      ],
      results: [
        { label: 'Downloads', value: '100K+' },
        { label: 'ร้านอาหาร', value: '2,000+' },
        { label: 'App Rating', value: '4.6/5' }
      ],
      timeline: '4 เดือน',
      year: '2024',
      status: 'completed',
      featured: false
    }
  ];



  // Success metrics
  successMetrics = [
    {
      icon: '📈',
      title: 'เพิ่มยอดขาย',
      value: '300%',
      description: 'เฉลี่ยการเพิ่มขึ้นของยอดขาย'
    },
    {
      icon: '⚡',
      title: 'ปรับปรุงประสิทธิภาพ',
      value: '250%',
      description: 'เพิ่มความเร็วและประสิทธิภาพ'
    },
    {
      icon: '👥',
      title: 'ผู้ใช้งานรวม',
      value: '500K+',
      description: 'จำนวนผู้ใช้งานทั้งหมด'
    },
    {
      icon: '⭐',
      title: 'คะแนนเฉลี่ย',
      value: '4.7/5',
      description: 'ความพึงพอใจจากผู้ใช้งาน'
    }
  ];

  setFilter(filterId: string): void {
    this.activeFilter = filterId;
  }

  getFilteredProjects() {
    if (this.activeFilter === 'all') {
      return this.portfolioProjects;
    }
    return this.portfolioProjects.filter(project => project.category === this.activeFilter);
  }

  getFeaturedProjects() {
    return this.portfolioProjects.filter(project => project.featured);
  }

  openProjectModal(project: any): void {
    this.selectedProject = project;
    this.showProjectModal = true;

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeProjectModal(): void {
    this.showProjectModal = false;
    this.selectedProject = null;

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }

  getCategoryLabel(categoryId: string): string {
    const category = this.filterCategories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  }
}