import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-careers',
  imports: [CommonModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss'
})
export class CareersComponent implements OnInit {
  isVisible = false;
  selectedJob: any = null;
  showJobModal = false;
  activeFilter = 'all';
  @Inject(PLATFORM_ID) private platformId!: Object;

  constructor() {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    }
  }

  // Job categories
  jobCategories = [
    { id: 'all', label: 'ทั้งหมด', count: 8 },
    { id: 'development', label: 'นักพัฒนา', count: 4 },
    { id: 'design', label: 'ดีไซเนอร์', count: 2 },
    { id: 'management', label: 'ผู้บริหาร', count: 1 },
    { id: 'qa', label: 'QA', count: 1 }
  ];

  // Open positions
  openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      titleTh: 'นักพัฒนาซอฟต์แวร์อาวุโส',
      department: 'development',
      location: 'กรุงเทพฯ / Remote',
      type: 'Full-time',
      experience: '5+ ปี',
      salary: '50,000 - 80,000 บาท',
      description: 'เราต้องการนักพัฒนาที่มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันแบบ Full Stack มาร่วมทีมกับเรา',
      responsibilities: [
        'พัฒนาและดูแลเว็บแอปพลิเคชัน Frontend และ Backend',
        'ออกแบบ Database และ API Architecture',
        'ทำงานร่วมกับทีม UI/UX และ Product Manager',
        'Code Review และ Mentoring สำหรับ Junior Developer',
        'ปรับปรุงประสิทธิภาพและความปลอดภัยของระบบ'
      ],
      requirements: [
        'ประสบการณ์ 5+ ปีในการพัฒนา Web Application',
        'เชี่ยวชาญ JavaScript, TypeScript, React หรือ Angular',
        'มีประสบการณ์ Node.js, Express, และ Database (PostgreSQL/MongoDB)',
        'เข้าใจ Git, CI/CD, และ Agile Development',
        'มีประสบการณ์ Cloud Platform (AWS, GCP หรือ Azure) จะได้รับการพิจารณาเป็นพิเศษ'
      ],
      benefits: [
        'เงินเดือน 50,000 - 80,000 บาท',
        'โบนัสประจำปี 2-4 เดือน',
        'ประกันสุขภาพและประกันชีวิต',
        'ค่าอบรมและพัฒนาทักษะ',
        'Work from Home ได้',
        'MacBook Pro หรือ PC ตามความต้องการ'
      ],
      posted: '2024-01-15',
      featured: true,
      urgent: false
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      titleTh: 'นักออกแบบ UI/UX',
      department: 'design',
      location: 'กรุงเทพฯ',
      type: 'Full-time',
      experience: '3+ ปี',
      salary: '35,000 - 55,000 บาท',
      description: 'มาร่วมสร้างประสบการณ์ผู้ใช้ที่ยอดเยี่ยมและออกแบบ Interface ที่สวยงาม ใช้งานง่าย',
      responsibilities: [
        'วิเคราะห์ User Requirements และทำ User Research',
        'สร้าง Wireframes, Mockups และ Prototypes',
        'ออกแบบ UI ที่สวยงามและใช้งานง่าย',
        'ทำงานร่วมกับทีม Development ในการ Implement Design',
        'ทำ Usability Testing และปรับปรุง Design'
      ],
      requirements: [
        'ประสบการณ์ 3+ ปีในการออกแบบ UI/UX',
        'เชี่ยวชาญ Figma, Adobe XD, Sketch',
        'เข้าใจ Design Principles และ User-Centered Design',
        'มีประสบการณ์ User Research และ Usability Testing',
        'Portfolio ที่แสดงผลงานที่หลากหลายและมีคุณภาพ'
      ],
      benefits: [
        'เงินเดือน 35,000 - 55,000 บาท',
        'โบนัสประจำปี',
        'ประกันสุขภาพ',
        'ค่าอบรมและ Design Conference',
        'Creative Software License',
        'Flexible Working Hours'
      ],
      posted: '2024-01-10',
      featured: true,
      urgent: false
    },
    {
      id: 3,
      title: 'Frontend Developer',
      titleTh: 'นักพัฒนา Frontend',
      department: 'development',
      location: 'กรุงเทพฯ / Remote',
      type: 'Full-time',
      experience: '2+ ปี',
      salary: '30,000 - 50,000 บาท',
      description: 'พัฒนา User Interface ที่สวยงามและมีประสิทธิภาพด้วย React, Angular หรือ Vue.js',
      responsibilities: [
        'พัฒนา Frontend ของเว็บแอปพลิเคชัน',
        'แปลง Design เป็น Code ที่มีคุณภาพ',
        'ปรับปรุงประสิทธิภาพและ User Experience',
        'ทำงานร่วมกับทีม Backend และ Designer',
        'เขียน Unit Tests และ Integration Tests'
      ],
      requirements: [
        'ประสบการณ์ 2+ ปีในการพัฒนา Frontend',
        'เชี่ยวชาญ HTML5, CSS3, JavaScript ES6+',
        'มีประสบการณ์ React, Angular หรือ Vue.js',
        'เข้าใจ Responsive Design และ Cross-browser Compatibility',
        'มีประสบการณ์ Git และ Agile Development'
      ],
      benefits: [
        'เงินเดือน 30,000 - 50,000 บาท',
        'โบนัสประจำปี',
        'ประกันสุขภาพ',
        'ค่าอบรมเทคโนโลยี',
        'Work from Home Options',
        'อุปกรณ์การทำงานครบครัน'
      ],
      posted: '2024-01-08',
      featured: false,
      urgent: true
    },
    {
      id: 4,
      title: 'Mobile App Developer',
      titleTh: 'นักพัฒนาแอปมือถือ',
      department: 'development',
      location: 'กรุงเทพฯ',
      type: 'Full-time',
      experience: '3+ ปี',
      salary: '40,000 - 60,000 บาท',
      description: 'พัฒนาแอปพลิเคชันมือถือที่ใช้งานง่ายและมีประสิทธิภาพสำหรับ iOS และ Android',
      responsibilities: [
        'พัฒนาแอปมือถือสำหรับ iOS และ Android',
        'ใช้ React Native หรือ Flutter ในการพัฒนา',
        'ปรับปรุงประสิทธิภาพและ User Experience',
        'ทำงานร่วมกับทีม Backend และ Designer',
        'ทำ App Store Optimization'
      ],
      requirements: [
        'ประสบการณ์ 3+ ปีในการพัฒนา Mobile App',
        'เชี่ยวชาญ React Native หรือ Flutter',
        'มีประสบการณ์ Native iOS (Swift) หรือ Android (Kotlin)',
        'เข้าใจ Mobile Design Patterns และ User Experience',
        'มีประสบการณ์ App Store และ Google Play Store'
      ],
      benefits: [
        'เงินเดือน 40,000 - 60,000 บาท',
        'โบนัสประจำปี',
        'ประกันสุขภาพ',
        'iPhone/Android Device สำหรับการทดสอบ',
        'Developer Account Fees',
        'Conference และ Training'
      ],
      posted: '2024-01-12',
      featured: false,
      urgent: false
    },
    {
      id: 5,
      title: 'Backend Developer',
      titleTh: 'นักพัฒนา Backend',
      department: 'development',
      location: 'กรุงเทพฯ / Remote',
      type: 'Full-time',
      experience: '3+ ปี',
      salary: '35,000 - 55,000 บาท',
      description: 'พัฒนาและดูแลระบบ Backend, API และ Database ที่มีประสิทธิภาพและปลอดภัย',
      responsibilities: [
        'พัฒนาและดูแล RESTful API',
        'ออกแบบและจัดการ Database',
        'ปรับปรุงประสิทธิภาพและความปลอดภัยของระบบ',
        'ทำงานร่วมกับทีม Frontend และ DevOps',
        'เขียน Documentation และ Unit Tests'
      ],
      requirements: [
        'ประสบการณ์ 3+ ปีในการพัฒนา Backend',
        'เชี่ยวชาญ Node.js, Python หรือ Java',
        'มีประสบการณ์ Database (PostgreSQL, MongoDB)',
        'เข้าใจ Microservices และ API Design',
        'มีประสบการณ์ Docker และ Cloud Platform'
      ],
      benefits: [
        'เงินเดือน 35,000 - 55,000 บาท',
        'โบนัสประจำปี',
        'ประกันสุขภาพ',
        'Cloud Platform Credits',
        'Technical Books และ Courses',
        'Remote Work Options'
      ],
      posted: '2024-01-06',
      featured: false,
      urgent: false
    },
    {
      id: 6,
      title: 'Graphic Designer',
      titleTh: 'นักออกแบบกราฟิก',
      department: 'design',
      location: 'กรุงเทพฯ',
      type: 'Full-time',
      experience: '2+ ปี',
      salary: '25,000 - 40,000 บาท',
      description: 'สร้างสรรค์ผลงานกราฟิกที่สวยงามและสื่อความหมายได้ดีสำหรับลูกค้าและโปรเจคของบริษัท',
      responsibilities: [
        'ออกแบบ Brand Identity และ Logo',
        'สร้าง Marketing Materials และ Presentation',
        'ออกแบบ Social Media Graphics',
        'ทำงานร่วมกับทีม Marketing และ UI/UX',
        'จัดการ Brand Guidelines'
      ],
      requirements: [
        'ประสบการณ์ 2+ ปีในการออกแบบกราฟิก',
        'เชี่ยวชาญ Adobe Creative Suite (Photoshop, Illustrator, InDesign)',
        'มีความคิดสร้างสรรค์และ Aesthetic Sense ที่ดี',
        'เข้าใจ Brand Identity และ Visual Communication',
        'Portfolio ที่แสดงผลงานที่หลากหลาย'
      ],
      benefits: [
        'เงินเดือน 25,000 - 40,000 บาท',
        'โบนัสประจำปี',
        'ประกันสุขภาพ',
        'Adobe Creative Cloud License',
        'Design Resources และ Stock Photos',
        'Creative Workshops'
      ],
      posted: '2024-01-05',
      featured: false,
      urgent: false
    }
  ];

  // Company benefits
  companyBenefits = [
    {
      icon: '💰',
      title: 'เงินเดือนและโบนัส',
      description: 'เงินเดือนที่แข่งขันได้พร้อมโบนัสประจำปี',
      details: [
        'เงินเดือนตามความสามารถ',
        'โบนัสประจำปี 2-4 เดือน',
        'ขึ้นเงินเดือนปีละ 2 ครั้ง',
        'Profit Sharing'
      ]
    },
    {
      icon: '🏥',
      title: 'ประกันและสวัสดิการ',
      description: 'ประกันสุขภาพและสวัสดิการครบครัน',
      details: [
        'ประกันสุขภาพเหมาจ่าย',
        'ประกันชีวิต',
        'ประกันอุบัติเหตุ',
        'เงินช่วยเหลือต่างๆ'
      ]
    },
    {
      icon: '📚',
      title: 'การเรียนรู้และพัฒนา',
      description: 'สนับสนุนการเรียนรู้และพัฒนาทักษะ',
      details: [
        'ค่าอบรมและคอร์สเรียน',
        'Conference และ Workshop',
        'Online Learning Platform',
        'Technical Books'
      ]
    },
    {
      icon: '⏰',
      title: 'ความยืดหยุ่นในการทำงาน',
      description: 'สมดุลระหว่างการทำงานและชีวิตส่วนตัว',
      details: [
        'Flexible Working Hours',
        'Work from Home Options',
        'วันลาพักผ่อน 15 วัน',
        'วันลาป่วย 30 วัน'
      ]
    },
    {
      icon: '🖥️',
      title: 'อุปกรณ์และเครื่องมือ',
      description: 'อุปกรณ์การทำงานที่ทันสมัยและครบครัน',
      details: [
        'MacBook Pro หรือ PC',
        'Monitor ขนาดใหญ่',
        'Software License',
        'ออฟฟิศที่ทันสมัย'
      ]
    },
    {
      icon: '🎉',
      title: 'กิจกรรมและสังคม',
      description: 'กิจกรรมสร้างความสัมพันธ์ในทีม',
      details: [
        'Company Trip ประจำปี',
        'Team Building Activities',
        'Birthday Party',
        'Friday Night Drinks'
      ]
    }
  ];

  // Application process
  applicationProcess = [
    {
      step: '01',
      title: 'สมัครงานออนไลน์',
      description: 'ส่ง Resume และ Portfolio ผ่านฟอร์มออนไลน์',
      icon: '📝',
      duration: '5 นาที'
    },
    {
      step: '02',
      title: 'คัดเลือกใบสมัคร',
      description: 'ทีม HR จะตรวจสอบและคัดเลือกผู้สมัคร',
      icon: '👁️',
      duration: '3-5 วัน'
    },
    {
      step: '03',
      title: 'สัมภาษณ์เบื้องต้น',
      description: 'สัมภาษณ์ทางโทรศัพท์หรือ Video Call',
      icon: '📞',
      duration: '30 นาที'
    },
    {
      step: '04',
      title: 'ทดสอบทักษะ',
      description: 'ทำแบบทดสอบหรือ Assignment ตามตำแหน่ง',
      icon: '💻',
      duration: '1-2 ชั่วโมง'
    },
    {
      step: '05',
      title: 'สัมภาษณ์รอบสุดท้าย',
      description: 'สัมภาษณ์กับทีมงานและผู้บริหาร',
      icon: '🤝',
      duration: '1 ชั่วโมง'
    },
    {
      step: '06',
      title: 'รับเข้าทำงาน',
      description: 'แจ้งผลและเริ่มงานวันแรก',
      icon: '🎉',
      duration: '1-2 สัปดาห์'
    }
  ];


  getFilteredJobs() {
    if (this.activeFilter === 'all') {
      return this.openPositions;
    }
    return this.openPositions.filter(job => job.department === this.activeFilter);
  }

  getFeaturedJobs() {
    return this.openPositions.filter(job => job.featured);
  }

  setFilter(filterId: string): void {
    this.activeFilter = filterId;
  }

  openJobModal(job: any): void {
    this.selectedJob = job;
    this.showJobModal = true;
    
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeJobModal(): void {
    this.showJobModal = false;
    this.selectedJob = null;
    
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
    const category = this.jobCategories.find(cat => cat.id === categoryId);
    return category ? category.label : categoryId;
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}