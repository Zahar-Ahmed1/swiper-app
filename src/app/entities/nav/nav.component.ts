import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements AfterViewInit {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  @ViewChild('navbar') navbar!: ElementRef;

  ngAfterViewInit(): void {
    gsap.to(this.navbar.nativeElement, {
      backgroundColor: '#ffffff',
      padding: '10px 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top+=10',
        end: 'bottom bottom',
        toggleClass: 'scrolled',
        scrub: true
      }
    });
  }
}
