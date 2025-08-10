import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  isVisible = false;
  currentYear = new Date().getFullYear();
  foundedYear = 2019;
  yearsInBusiness = this.currentYear - this.foundedYear;
@Inject(PLATFORM_ID) private platformId!: Object
  constructor() {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Trigger animations when component loads
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    }
  }

  // Company story data
  companyStory = {
    mission: 'สร้างสรรค์โซลูชันเทคโนโลยีที่ช่วยให้ธุรกิจเติบโตอย่างยั่งยืน ด้วยนวัตกรรมที่ตอบโจทย์ความต้องการที่แท้จริง',
    vision: 'เป็นผู้นำด้านเทคโนโลยีสารสนเทศในประเทศไทย ที่สร้างคุณค่าให้กับสังคมผ่านการพัฒนาเทคโนโลยี',
    description: 'AWA เริ่มต้นจากความหลงใหลในเทคโนโลยีและความต้องการที่จะสร้างสิ่งดีๆ ให้กับสังคม เราเป็นทีมงานมืออาชีพที่มีประสบการณ์หลากหลายในการพัฒนาซอฟต์แวร์ และเรามุ่งมั่นที่จะเป็นพันธมิตรที่เชื่อถือได้ของลูกค้า'
  };

  // Core values
  coreValues = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'มุ่งมั่นสู่ความเป็นเลิศในทุกผลงาน',
      details: 'เราไม่หยุดนิ่งกับการพัฒนาและปรับปรุงให้ดีขึ้นเสมอ'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'สร้างความสัมพันธ์ที่ยั่งยืนกับลูกค้า',
      details: 'เราเป็นมากกว่าผู้ให้บริการ แต่เป็นพันธมิตรในการเติบโต'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'สร้างสรรค์นวัตกรรมที่เปลี่ยนโลก',
      details: 'เราใช้เทคโนโลยีล่าสุดเพื่อแก้ปัญหาที่ซับซ้อน'
    },
    {
      icon: '🌱',
      title: 'Growth',
      description: 'เติบโตไปพร้อมกับลูกค้าและทีมงาน',
      details: 'การเรียนรู้และพัฒนาอย่างต่อเนื่องคือหัวใจของเรา'
    }
  ];

  // Company timeline
  timeline = [
    {
      year: '2019',
      title: 'ก่อตั้งบริษัท',
      description: 'เริ่มต้นด้วยทีมงาน 3 คน ในอพาร์ทเมนต์เล็กๆ',
      icon: '🏢',
      achievements: ['ลูกค้าแรก 5 ราย', 'เว็บไซต์แรก', 'แอปพลิเคชันแรก']
    },
    {
      year: '2020',
      title: 'ขยายทีมงาน',
      description: 'เติบโตเป็น 10 คน และย้ายออฟฟิศใหม่',
      icon: '👥',
      achievements: ['ทีมงาน 10 คน', 'ออฟฟิศใหม่', 'โปรเจค 20+ แล้ว']
    },
    {
      year: '2021',
      title: 'ขยายบริการ',
      description: 'เพิ่มบริการ Cloud Solutions และ Mobile Development',
      icon: '☁️',
      achievements: ['Cloud Services', 'Mobile Apps', 'ลูกค้าใหญ่ 5+ ราย']
    },
    {
      year: '2022',
      title: 'รางวัลแรก',
      description: 'ได้รับรางวัล Best Startup IT Company',
      icon: '🏆',
      achievements: ['รางวัล Best Startup', 'ทีมงาน 20 คน', 'โปรเจค 100+']
    },
    {
      year: '2023',
      title: 'ขยายสาขา',
      description: 'เปิดสาขาใหม่และเพิ่มบริการ AI Solutions',
      icon: '🤖',
      achievements: ['สาขาใหม่', 'AI Solutions', 'ลูกค้า 50+ ราย']
    },
    {
      year: '2024',
      title: 'ปัจจุบัน',
      description: 'ทีมงาน 30+ คน พร้อมรับโปรเจคใหญ่',
      icon: '🚀',
      achievements: ['ทีมงาน 30+ คน', 'โปรเจค 200+', 'พันธมิตรเทคโนโลยี']
    }
  ];

  // Company stats
  stats = [
    {
      value: '200+',
      label: 'โปรเจคสำเร็จ',
      description: 'ผลงานที่ส่งมอบให้ลูกค้า',
      icon: '📊'
    },
    {
      value: '50+',
      label: 'ลูกค้าพึงพอใจ',
      description: 'บริษัทที่วางใจให้เราดูแล',
      icon: '🤝'
    },
    {
      value: '30+',
      label: 'ทีมงานมืออาชีพ',
      description: 'ผู้เชี่ยวชาญด้านเทคโนโลยี',
      icon: '👨‍💻'
    },
    {
      value: '99%',
      label: 'ลูกค้าแนะนำต่อ',
      description: 'อัตราความพึงพอใจสูง',
      icon: '⭐'
    },
    {
      value: '5+',
      label: 'ปีประสบการณ์',
      description: 'ในตลาดเทคโนโลยีไทย',
      icon: '📅'
    },
    {
      value: '24/7',
      label: 'การสนับสนุน',
      description: 'ดูแลลูกค้าตลอดเวลา',
      icon: '🛠️'
    }
  ];

  // Technologies we work with
  technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      icon: '🎨'
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PHP', 'Java', '.NET'],
      icon: '⚙️'
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'Xamarin'],
      icon: '📱'
    },
    {
      category: 'Cloud',
      items: ['AWS', 'Google Cloud', 'Azure', 'Firebase', 'Heroku'],
      icon: '☁️'
    },
    {
      category: 'Database',
      items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'DynamoDB'],
      icon: '🗄️'
    },
    {
      category: 'DevOps',
      items: ['Docker', 'Kubernetes', 'CI/CD', 'Git', 'Jenkins'],
      icon: '🔧'
    }
  ];

  // Office locations
  offices = [
    {
      name: 'สำนักงานใหญ่',
      address: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110',
      phone: '+66 2 xxx xxxx',
      email: 'bangkok@awa.co.th',
      image: 'office-bangkok.jpg',
      features: ['ทีมพัฒนา', 'ฝ่ายขาย', 'ฝ่ายบริหาร']
    }
  ];

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
}