import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-more-products-section',
  imports: [],
  templateUrl: './more-products-section.component.html',
  styleUrl: './more-products-section.component.css'
})
export class MoreProductsSectionComponent implements AfterViewInit {
  @ViewChildren('card') cards!: QueryList<ElementRef>;



  ngAfterViewInit(): void {
    this.cards.forEach((card, i) => {
      gsap.from(card.nativeElement, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: i * 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card.nativeElement,
          start: 'top 80%',
        },
      });
    });
  }
}
