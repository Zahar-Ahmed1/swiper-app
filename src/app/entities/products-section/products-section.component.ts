import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-products-section',
  imports: [],
  templateUrl: './products-section.component.html',
  styleUrl: './products-section.component.css'
})
export class ProductsSectionComponent implements AfterViewInit {
  @ViewChild('leftCard') leftCard!: ElementRef;
  @ViewChild('rightCard') rightCard!: ElementRef;

  ngAfterViewInit(): void {
    gsap.from(this.leftCard.nativeElement, {
      x: -300,
      rotateY: 45,
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: this.leftCard.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    gsap.from(this.rightCard.nativeElement, {
      x: 300,
      rotateY: -45,
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: this.rightCard.nativeElement,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }
}
