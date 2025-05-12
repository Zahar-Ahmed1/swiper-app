import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scroll-cart',
  imports: [],
  templateUrl: './scroll-cart.component.html',
  styleUrl: './scroll-cart.component.css'
})
export class ScrollCartComponent implements AfterViewInit {




  @ViewChild('card1') card1!: ElementRef;
  @ViewChild('card2') card2!: ElementRef;
  @ViewChild('card3') card3!: ElementRef;
  @ViewChild('card4') card4!: ElementRef;
  @ViewChild('card5') card5!: ElementRef;
  @ViewChild('card6') card6!: ElementRef;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.animateCards.bind(this));
  }

  animateCards(): void {
    const y = window.scrollY;

    const move = (card: ElementRef, xSpeed: number, ySpeed: number) => {
      if (card && card.nativeElement) {
        const translateX = y * xSpeed;
        const translateY = y * ySpeed;
        card.nativeElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
      }
    };

    // Exemple : ajuster les vitesses X et Y selon l'effet désiré
    move(this.card1, 0,0.4);   // droite + bas
    move(this.card2, -0, 0); // gauche + haut

  }

}
