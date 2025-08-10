import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule , ReactiveFormsModule]  ,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  isVisible = false;
  contactForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  @Inject(PLATFORM_ID) private platformId!: Object;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      company: [''],
      subject: ['', [Validators.required]],
      budget: [''],
      message: ['', [Validators.required]],
      timeline: ['']
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.isVisible = true;
      }, 200);
    }
  }

  // Contact Information
  contactInfo = [
    {
      id: 'office',
      title: 'สำนักงานใหญ่',
      description: 'มาเยี่ยมชมสำนักงานของเรา',
      icon: '🏢',
      details: [
        '123 อาคาร AWA Tower ชั้น 25',
        'ถนนสุขุมวิท แขวงคลองตัน',
        'เขตวัฒนา กรุงเทพฯ 10110'
      ],
      color: 'from-blue-500 to-cyan-500',
      link: 'https://maps.google.com'
    },
    {
      id: 'phone',
      title: 'โทรศัพท์',
      description: 'ติดต่อเราได้ทุกเวลา',
      icon: '📞',
      details: [
        'สำนักงาน: 02-123-4567',
        'มือถือ: 095-123-4567',
        'ฮอตไลน์: 1234'
      ],
      color: 'from-emerald-500 to-teal-500',
      link: 'tel:+6621234567'
    },
    {
      id: 'email',
      title: 'อีเมล',
      description: 'ส่งข้อความถึงเรา',
      icon: '✉️',
      details: [
        'ทั่วไป: info@awa.co.th',
        'ขาย: sales@awa.co.th',
        'สนับสนุน: support@awa.co.th'
      ],
      color: 'from-purple-500 to-pink-500',
      link: 'mailto:info@awa.co.th'
    },
    {
      id: 'hours',
      title: 'เวลาทำการ',
      description: 'เรายินดีให้บริการ',
      icon: '🕒',
      details: [
        'จันทร์ - ศุกร์: 8:30 - 18:00',
        'เสาร์: 9:00 - 16:00',
        'อาทิตย์: ปิด (ฉุกเฉิน 24/7)'
      ],
      color: 'from-orange-500 to-red-500',
      link: null
    }
  ];

  // Subject Options
  subjectOptions = [
    { value: 'web-development', label: 'พัฒนาเว็บไซต์/เว็บแอป', icon: '💻' },
    { value: 'mobile-app', label: 'พัฒนาแอปมือถือ', icon: '📱' },
    { value: 'ui-ux-design', label: 'ออกแบบ UI/UX', icon: '🎨' },
    { value: 'cloud-solutions', label: 'โซลูชันคลาวด์', icon: '☁️' },
    { value: 'consulting', label: 'ปรึกษาเทคโนโลยี', icon: '💡' },
    { value: 'maintenance', label: 'ดูแลและบำรุงรักษา', icon: '🛠️' },
    { value: 'other', label: 'อื่นๆ', icon: '📝' }
  ];

  // Budget Options
  budgetOptions = [
    { value: 'under-50k', label: 'ต่ำกว่า 50,000 บาท' },
    { value: '50k-100k', label: '50,000 - 100,000 บาท' },
    { value: '100k-300k', label: '100,000 - 300,000 บาท' },
    { value: '300k-500k', label: '300,000 - 500,000 บาท' },
    { value: 'over-500k', label: 'มากกว่า 500,000 บาท' },
    { value: 'discuss', label: 'ต้องการปรึกษา' }
  ];

  // Timeline Options
  timelineOptions = [
    { value: 'asap', label: 'ด่วนที่สุด (ภายใน 1 เดือน)' },
    { value: '1-3months', label: '1-3 เดือน' },
    { value: '3-6months', label: '3-6 เดือน' },
    { value: '6months+', label: 'มากกว่า 6 เดือน' },
    { value: 'flexible', label: 'ยืดหยุ่นได้' }
  ];

  // FAQ Data
  faqData = [
    {
      question: 'ระยะเวลาในการพัฒนาโปรเจคโดยเฉลี่ยเท่าไหร่?',
      answer: 'ขึ้นอยู่กับความซับซ้อนของโปรเจค โดยเฉลี่ย 4-12 สัปดาห์ สำหรับเว็บไซต์ทั่วไป และ 8-24 สัปดาห์ สำหรับระบบที่ซับซ้อน',
      icon: '⏱️'
    },
    {
      question: 'มีการรับประกันผลงานหรือไม่?',
      answer: 'เรามีการรับประกันผลงาน 6 เดือน สำหรับข้อผิดพลาดทางเทคนิค และให้การสนับสนุนฟรี 3-6 เดือนแรก',
      icon: '🛡️'
    },
    {
      question: 'สามารถขอดูตัวอย่างผลงานได้หรือไม่?',
      answer: 'ได้แน่นอน เรามีผลงาน Portfolio ให้ดู และสามารถจัดนัดพบเพื่อ Demo ระบบที่เกี่ยวข้องกับความต้องการของคุณ',
      icon: '👁️'
    },
    {
      question: 'ค่าใช้จ่ายในการพัฒนาเป็นอย่างไร?',
      answer: 'เราคิดราคาตามขอบเขตงาน มีทั้งแบบเหมาจ่ายและแบบ Time & Material พร้อมใบเสนอราคาที่โปร่งใส',
      icon: '💰'
    }
  ];

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', this.contactForm.value);
        this.isSubmitting = false;
        this.showSuccessMessage = true;
        this.contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 5000);
      }, 2000);
    } else {
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
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

  openLink(url: string | null): void {
    if (url && isPlatformBrowser(this.platformId)) {
      if (url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel')) {
        window.open(url, '_blank');
      }
    }
  }
}