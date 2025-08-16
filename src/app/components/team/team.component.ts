import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent implements OnInit {
  isVisible = false;
  selectedTeamMember: any = null;
  showMemberModal = false;
  activeFilter = 'all';
  @Inject(PLATFORM_ID) private platformId!: Object;

  constructor() { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    }
  }

  // Team departments
  departments = [
    { id: 'all', label: 'ทั้งหมด', count: 12 },
    { id: 'leadership', label: 'ผู้บริหาร', count: 3 },
    { id: 'development', label: 'นักพัฒนา', count: 6 },
    { id: 'design', label: 'ดีไซเนอร์', count: 2 },
    { id: 'qa', label: 'QA', count: 1 }
  ];

  // Leadership team
  leadershipTeam = [
    {
      id: 1,
      name: 'อรุณ สร้างสรรค์',
      nameEng: 'Arun Sangsang',
      position: 'Chief Executive Officer',
      positionTh: 'ประธานเจ้าหน้าที่บริหาร',
      department: 'leadership',
      bio: 'ผู้ก่อตั้งและ CEO ของ AWA ด้วยประสบการณ์กว่า 15 ปีในอุตสาหกรรมเทคโนโลยี นำทีมสู่ความสำเร็จด้วยวิสัยทัศน์และการบริหารที่เป็นเลิศ',
      avatar: '👨‍💼',
      image: 'team-ceo.jpg',
      experience: '15+ ปี',
      education: 'M.Eng Computer Science, Chulalongkorn University',
      specialties: ['Strategic Planning', 'Business Development', 'Technology Leadership'],
      achievements: [
        'นำบริษัทเติบโต 300% ใน 3 ปี',
        'รางวัล CEO of the Year 2023',
        'วิทยากรในงาน Tech Conference ระดับชาติ'
      ],
      social: {
        linkedin: 'https://linkedin.com/in/arun-sangsang',
        twitter: 'https://twitter.com/arunawa',
        email: 'arun@awa.co.th'
      },
      quote: 'เทคโนโลยีคือเครื่องมือที่ช่วยให้มนุษย์สร้างสรรค์สิ่งดีๆ ให้กับโลก'
    },
    {
      id: 2,
      name: 'สุมาลี เทคโนโลยี',
      nameEng: 'Sumalee Technology',
      position: 'Chief Technology Officer',
      positionTh: 'ประธานเจ้าหน้าที่เทคโนโลยี',
      department: 'leadership',
      bio: 'ผู้เชี่ยวชาญด้านเทคโนโลยีที่มีประสบการณ์กว่า 12 ปี ดูแลทีมพัฒนาและกำหนดทิศทางเทคโนโลยีของบริษัท',
      avatar: '👩‍💻',
      image: 'team-cto.jpg',
      experience: '12+ ปี',
      education: 'M.S. Software Engineering, KMUTT',
      specialties: ['Cloud Architecture', 'AI/ML', 'System Design'],
      achievements: [
        'สร้างสถาปัตยกรรมคลาวด์รองรับผู้ใช้ 1M+',
        'ได้รับรางวัล Innovation Award 2023',
        'ผู้เขียนหนังสือ "Cloud-First Development"'
      ],
      social: {
        linkedin: 'https://linkedin.com/in/sumalee-tech',
        github: 'https://github.com/sumalee-awa',
        email: 'sumalee@awa.co.th'
      },
      quote: 'เทคโนโลยีที่ดีต้องเข้าใจได้ง่ายและใช้งานได้จริง'
    },
    {
      id: 3,
      name: 'วิชัย ธุรกิจดี',
      nameEng: 'Wichai Businessgood',
      position: 'Chief Operating Officer',
      positionTh: 'ประธานเจ้าหน้าที่ปฏิบัติการ',
      department: 'leadership',
      bio: 'ผู้เชี่ยวชาญด้านการดำเนินงานและการจัดการโปรเจค มีประสบการณ์กว่า 10 ปีในการนำทีมสู่ความสำเร็จ',
      avatar: '👨‍🔧',
      image: 'team-coo.jpg',
      experience: '10+ ปี',
      education: 'MBA, Thammasat University',
      specialties: ['Project Management', 'Operations', 'Team Leadership'],
      achievements: [
        'จัดการโปรเจคสำเร็จ 200+ รายการ',
        'PMP Certified',
        'ลดเวลาการส่งมอบงาน 40%'
      ],
      social: {
        linkedin: 'https://linkedin.com/in/wichai-biz',
        email: 'wichai@awa.co.th'
      },
      quote: 'การทำงานเป็นทีมคือกุญแจสู่ความสำเร็จ'
    }
  ];

  // Development team
  developmentTeam = [
    {
      id: 4,
      name: 'ธนาคาร โค้ดดี',
      nameEng: 'Thanakarn Codegood',
      position: 'Senior Full Stack Developer',
      positionTh: 'นักพัฒนาซอฟต์แวร์อาวุโส',
      department: 'development',
      bio: 'นักพัฒนาเก่งกาจที่มีประสบการณ์ทั้ง Frontend และ Backend พร้อมทำงานกับเทคโนโลยีหลากหลาย',
      avatar: '👨‍💻',
      image: 'team-dev1.jpg',
      experience: '8 ปี',
      education: 'B.Eng Computer Engineering, KMITL',
      specialties: ['React', 'Node.js', 'AWS', 'TypeScript'],
      achievements: [
        'พัฒนาระบบรองรับผู้ใช้ 500K+',
        'AWS Certified Solutions Architect',
        'Core contributor ใน Open Source projects'
      ],
      social: {
        github: 'https://github.com/thanakarn-awa',
        linkedin: 'https://linkedin.com/in/thanakarn-dev',
        email: 'thanakarn@awa.co.th'
      },
      quote: 'Clean code คือ code ที่คนอื่นอ่านแล้วเข้าใจ'
    },
    {
      id: 5,
      name: 'นรา ฟรอนต์เอนด์',
      nameEng: 'Nara Frontend',
      position: 'Senior Frontend Developer',
      positionTh: 'นักพัฒนา Frontend อาวุโส',
      department: 'development',
      bio: 'ผู้เชี่ยวชาญด้าน Frontend ที่สร้าง User Interface ที่สวยงามและใช้งานง่าย',
      avatar: '👩‍💻',
      image: 'team-frontend.jpg',
      experience: '6 ปี',
      education: 'B.S. Information Technology, Mahidol University',
      specialties: ['Angular', 'Vue.js', 'CSS3', 'UI/UX Implementation'],
      achievements: [
        'สร้าง Component Library ที่ใช้ในโปรเจค 50+',
        'Performance optimization ที่ลดเวลาโหลด 60%',
        'Mentor ให้กับ junior developers'
      ],
      social: {
        github: 'https://github.com/nara-frontend',
        codepen: 'https://codepen.io/nara-awa',
        email: 'nara@awa.co.th'
      },
      quote: 'User experience ที่ดีเริ่มต้นจากการใส่ใจในรายละเอียด'
    },
    {
      id: 6,
      name: 'สมศักดิ์ แบ็คเอนด์',
      nameEng: 'Somsak Backend',
      position: 'Senior Backend Developer',
      positionTh: 'นักพัฒนา Backend อาวุโส',
      department: 'development',
      bio: 'ผู้เชี่ยวชาญด้านการพัฒนา API และระบบ Backend ที่มีประสิทธิภาพสูง',
      avatar: '👨‍🔧',
      image: 'team-backend.jpg',
      experience: '7 ปี',
      education: 'B.Eng Software Engineering, Kasetsart University',
      specialties: ['Python', 'Java', 'PostgreSQL', 'Microservices'],
      achievements: [
        'ออกแบบ API ที่รองรับ 10M requests/day',
        'ลดต้นทุน infrastructure 50%',
        'Docker & Kubernetes expert'
      ],
      social: {
        github: 'https://github.com/somsak-backend',
        linkedin: 'https://linkedin.com/in/somsak-dev',
        email: 'somsak@awa.co.th'
      },
      quote: 'ระบบที่ดีต้องทำงานได้แม้เราไม่อยู่'
    },
    {
      id: 7,
      name: 'มานิตา โมบายล์',
      nameEng: 'Manita Mobile',
      position: 'Mobile App Developer',
      positionTh: 'นักพัฒนาแอปมือถือ',
      department: 'development',
      bio: 'ผู้เชี่ยวชาญด้านการพัฒนาแอปพลิเคชันมือถือทั้ง iOS และ Android',
      avatar: '👩‍📱',
      image: 'team-mobile.jpg',
      experience: '5 ปี',
      education: 'B.S. Computer Science, Chiang Mai University',
      specialties: ['React Native', 'Flutter', 'iOS', 'Android'],
      achievements: [
        'พัฒนาแอปที่มี downloads 1M+',
        'App Store rating เฉลี่ย 4.8/5',
        'Google Developer Expert for Flutter'
      ],
      social: {
        github: 'https://github.com/manita-mobile',
        twitter: 'https://twitter.com/manita_dev',
        email: 'manita@awa.co.th'
      },
      quote: 'แอปที่ดีต้องทำให้ชีวิตง่ายขึ้น'
    }
  ];

  // Design team
  designTeam = [
    {
      id: 8,
      name: 'ศิริพร ดีไซน์',
      nameEng: 'Siriporn Design',
      position: 'Senior UI/UX Designer',
      positionTh: 'นักออกแบบ UI/UX อาวุโส',
      department: 'design',
      bio: 'ผู้เชี่ยวชาญด้านการออกแบบ User Interface และ User Experience ที่สร้างสรรค์และใช้งานง่าย',
      avatar: '👩‍🎨',
      image: 'team-uiux.jpg',
      experience: '6 ปี',
      education: 'M.A. Digital Design, Silpakorn University',
      specialties: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      achievements: [
        'ออกแบบ UI ที่ใช้ในโปรเจค 100+',
        'รางวัล Best UI Design 2023',
        'เพิ่ม user engagement 80%'
      ],
      social: {
        behance: 'https://behance.net/siriporn-awa',
        dribbble: 'https://dribbble.com/siriporn',
        email: 'siriporn@awa.co.th'
      },
      quote: 'การออกแบบที่ดีต้องสื่อสารได้โดยไม่ต้องคำอธิบาย'
    },
    {
      id: 9,
      name: 'กิตติศักดิ์ กราฟิก',
      nameEng: 'Kittisak Graphic',
      position: 'Graphic Designer',
      positionTh: 'นักออกแบบกราฟิก',
      department: 'design',
      bio: 'นักออกแบบกราฟิกที่สร้างสรรค์ผลงานที่สวยงามและสื่อความหมายได้ดี',
      avatar: '👨‍🎨',
      image: 'team-graphic.jpg',
      experience: '4 ปี',
      education: 'B.A. Visual Communication Design, Bangkok University',
      specialties: ['Branding', 'Illustration', 'Motion Graphics', 'Print Design'],
      achievements: [
        'สร้าง brand identity ให้ลูกค้า 50+',
        'รางวัล Creative Design Award',
        'ผลงานใน Design magazine'
      ],
      social: {
        behance: 'https://behance.net/kittisak-awa',
        instagram: 'https://instagram.com/kittisak_design',
        email: 'kittisak@awa.co.th'
      },
      quote: 'การออกแบบคือภาษาที่ทุกคนเข้าใจ'
    }
  ];

  // QA team
  qaTeam = [
    {
      id: 10,
      name: 'วิไลลักษณ์ คุณภาพ',
      nameEng: 'Wilailak Quality',
      position: 'Senior QA Engineer',
      positionTh: 'วิศวกร QA อาวุโส',
      department: 'qa',
      bio: 'ผู้เชี่ยวชาญด้านการทดสอบคุณภาพซอฟต์แวร์ ดูแลให้ผลงานมีคุณภาพสูงก่อนส่งมอบ',
      avatar: '👩‍🔬',
      image: 'team-qa.jpg',
      experience: '7 ปี',
      education: 'B.Eng Computer Engineering, KMUTNB',
      specialties: ['Test Automation', 'Performance Testing', 'Security Testing', 'CI/CD'],
      achievements: [
        'สร้าง test coverage 95%+',
        'ลด bug ใน production 70%',
        'ISTQB Certified Tester'
      ],
      social: {
        linkedin: 'https://linkedin.com/in/wilailak-qa',
        github: 'https://github.com/wilailak-qa',
        email: 'wilailak@awa.co.th'
      },
      quote: 'คุณภาพไม่ใช่อุบัติเหตุ แต่เป็นผลจากความตั้งใจ'
    }
  ];

  // Company culture values
  companyCulture = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'เราสนับสนุนการคิดนอกกรอบและทดลองเทคโนโลยีใหม่ๆ',
      details: 'ทุกคนมีอิสระในการเสนอไอเดียและทดลองสิ่งใหม่ เรามี Innovation Day ทุกเดือน'
    },
    {
      icon: '🤝',
      title: 'Team Collaboration',
      description: 'การทำงานร่วมกันและช่วยเหลือซึ่งกันและกัน',
      details: 'เราใช้ Agile methodology และมี daily stand-up เพื่อให้ทุกคนอัปเดทความคืบหน้า'
    },
    {
      icon: '📚',
      title: 'Continuous Learning',
      description: 'การเรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง',
      details: 'บริษัทสนับสนุนค่าอบรม คอร์สออนไลน์ และงาน conference ต่างๆ'
    },
    {
      icon: '⚖️',
      title: 'Work-Life Balance',
      description: 'สมดุลระหว่างการทำงานและชีวิตส่วนตัว',
      details: 'Flexible working hours, Work from home options, และกิจกรรมบันเทิงประจำเดือน'
    }
  ];



  getAllTeamMembers() {
    return [
      ...this.leadershipTeam,
      ...this.developmentTeam,
      ...this.designTeam,
      ...this.qaTeam
    ];
  }

  getFilteredTeamMembers() {
    if (this.activeFilter === 'all') {
      return this.getAllTeamMembers();
    }
    return this.getAllTeamMembers().filter(member => member.department === this.activeFilter);
  }

  setFilter(filterId: string): void {
    this.activeFilter = filterId;
  }

  openMemberModal(member: any): void {
    this.selectedTeamMember = member;
    this.showMemberModal = true;

    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeMemberModal(): void {
    this.showMemberModal = false;
    this.selectedTeamMember = null;

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

  getDepartmentLabel(departmentId: string): string {
    const department = this.departments.find(dept => dept.id === departmentId);
    return department ? department.label : departmentId;
  }
}