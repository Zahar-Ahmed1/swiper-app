import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-v-v',
  imports: [CommonModule],
  templateUrl: './v-v.component.html',
  styleUrl: './v-v.component.css',
  standalone: true,
})
export class VVComponent implements AfterViewInit {
  @ViewChild('footer', { static: true }) footer!: ElementRef;

  ngAfterViewInit(): void {
    gsap.from(this.footer.nativeElement, {
      y: 100,
      opacity: 300,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.footer.nativeElement,
        start: 'top 90%', // quand le footer atteint 90% du viewport
        toggleActions: 'play none none none'
      }
    });
  }
}
