import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-service',
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent implements OnInit {
  isVisible = false;
  activeService = 0;
  @Inject(PLATFORM_ID) private platformId!: Object
  constructor() { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    }
  }

  // Main Services
  mainServices = [
    {
      id: 'web-development',
      title: 'Web Development',
      subtitle: 'เว็บแอปพลิเคชันสมัยใหม่',
      description: 'พัฒนาเว็บแอปพลิเคชันที่รวดเร็ว ปลอดภัย และใช้งานง่าย ด้วยเทคโนโลยีล่าสุด',
      icon: '💻',
      image: 'web-dev.svg',
      features: [
        'Responsive Design ทุกหน้าจอ',
        'Progressive Web App (PWA)',
        'SEO Optimized',
        'Fast Loading Speed',
        'Cross-browser Compatible',
        'Modern UI/UX Design'
      ],
      technologies: ['React', 'Angular', 'Vue.js', 'Node.js', 'TypeScript'],
      pricing: 'เริ่มต้น 50,000 บาท',
      timeline: '4-8 สัปดาห์',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      subtitle: 'แอปมือถือครบครัน',
      description: 'สร้างแอปพลิเคชันมือถือที่ใช้งานได้ทั้ง iOS และ Android พร้อมประสบการณ์ผู้ใช้ที่ยอดเยี่ยม',
      icon: '📱',
      image: 'mobile-dev.svg',
      features: [
        'Native iOS & Android',
        'Cross-platform Development',
        'Offline Functionality',
        'Push Notifications',
        'In-app Purchases',
        'App Store Optimization'
      ],
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Firebase'],
      pricing: 'เริ่มต้น 80,000 บาท',
      timeline: '6-12 สัปดาห์',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      subtitle: 'โซลูชันคลาวด์ครบวงจร',
      description: 'บริการคลาวด์ที่ช่วยลดต้นทุน เพิ่มประสิทธิภาพ และรองรับการเติบโตของธุรกิจ',
      icon: '☁️',
      image: 'cloud-solutions.svg',
      features: [
        'Cloud Migration',
        'Auto Scaling',
        'Load Balancing',
        'Backup & Recovery',
        'Monitoring & Analytics',
        '24/7 Support'
      ],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'],
      pricing: 'เริ่มต้น 30,000 บาท/เดือน',
      timeline: '2-4 สัปดาห์',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      subtitle: 'ออกแบบประสบการณ์ผู้ใช้',
      description: 'ออกแบบ User Interface และ User Experience ที่สวยงาม ใช้งานง่าย และเพิ่มยอดขาย',
      icon: '🎨',
      image: 'ui-ux-design.svg',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Usability Testing',
        'Design System',
        'Brand Identity'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      pricing: 'เริ่มต้น 25,000 บาท',
      timeline: '3-6 สัปดาห์',
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Additional Services
  additionalServices = [
    {
      title: 'E-commerce Solutions',
      description: 'แพลตฟอร์มอีคอมเมิร์ซครบครัน',
      icon: '🛍️',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management']
    },
    {
      title: 'API Development',
      description: 'พัฒนา API ที่มีประสิทธิภาพ',
      icon: '🔌',
      features: ['RESTful API', 'GraphQL', 'API Documentation']
    },
    {
      title: 'DevOps Services',
      description: 'CI/CD และ Infrastructure Management',
      icon: '⚙️',
      features: ['Continuous Deployment', 'Monitoring', 'Security']
    },
    {
      title: 'Digital Transformation',
      description: 'ปรับเปลี่ยนธุรกิจสู่ดิจิทัล',
      icon: '🚀',
      features: ['Strategy Planning', 'Process Automation', 'Training']
    },
    {
      title: 'Maintenance & Support',
      description: 'ดูแลและบำรุงรักษาระบบ',
      icon: '🛠️',
      features: ['24/7 Monitoring', 'Bug Fixes', 'Performance Optimization']
    },
    {
      title: 'Consulting Services',
      description: 'ให้คำปรึกษาด้านเทคโนโลยี',
      icon: '💡',
      features: ['Technology Audit', 'Solution Architecture', 'Best Practices']
    }
  ];

  // Service Process
  serviceProcess = [
    {
      step: '01',
      title: 'ปรึกษาและวิเคราะห์',
      description: 'รับฟังความต้องการและวิเคราะห์โปรเจค',
      icon: '🤝',
      duration: '1-2 สัปดาห์'
    },
    {
      step: '02',
      title: 'วางแผนและออกแบบ',
      description: 'สร้างแผนงานและออกแบบระบบ',
      icon: '📋',
      duration: '1-3 สัปดาห์'
    },
    {
      step: '03',
      title: 'พัฒนาและทดสอบ',
      description: 'เขียนโค้ดและทดสอบระบบ',
      icon: '⚡',
      duration: '4-12 สัปดาห์'
    },
    {
      step: '04',
      title: 'ปรับแต่งและส่งมอบ',
      description: 'ปรับแต่งตามฟีดแบ็คและส่งมอบงาน',
      icon: '✅',
      duration: '1-2 สัปดาห์'
    },
    {
      step: '05',
      title: 'ดูแลและบำรุงรักษา',
      description: 'ให้การสนับสนุนและอัปเดทระบบ',
      icon: '🔧',
      duration: 'ต่อเนื่อง'
    }
  ];

  // Why Choose Us
  whyChooseUs = [
    {
      title: 'ทีมงานมืออาชีพ',
      description: 'ทีมนักพัฒนาและดีไซเนอร์ที่มีประสบการณ์สูง',
      icon: '👨‍💻',
      stats: '5+ ปี ประสบการณ์เฉลี่ย'
    },
    {
      title: 'เทคโนโลยีล่าสุด',
      description: 'ใช้เครื่องมือและเทคโนโลยีที่ทันสมัยที่สุด',
      icon: '🚀',
      stats: '20+ เทคโนโลยี'
    },
    {
      title: 'การันตีคุณภาพ',
      description: 'ผลงานผ่านการทดสอบและมีการรับประกัน',
      icon: '⭐',
      stats: '99% ลูกค้าพึงพอใจ'
    },
    {
      title: 'ส่งมอบตรงเวลา',
      description: 'มีการวางแผนที่ดีและส่งมอบงานตรงตามกำหนด',
      icon: '⏰',
      stats: '95% ส่งมอบตรงเวลา'
    }
  ];


  setActiveService(index: number): void {
    this.activeService = index;
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

  getCurrentService() {
    return this.mainServices[this.activeService];
  }
}