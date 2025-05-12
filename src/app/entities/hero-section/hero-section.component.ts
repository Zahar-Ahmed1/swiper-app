import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('heroTitle') heroTitle!: ElementRef;
  @ViewChild('heroText') heroText!: ElementRef;

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this.heroTitle.nativeElement,
        start: 'top 80%',
      },
    });

    tl.from(this.heroTitle.nativeElement, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
      .from(this.heroText.nativeElement, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
      }, '-=0.5'); // chevauchement partiel
  }


}
