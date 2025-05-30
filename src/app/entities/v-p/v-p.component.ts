import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-v-p',
  imports: [CommonModule],
  templateUrl: './v-p.component.html',
  styleUrl: './v-p.component.css'
  ,standalone: true,
})
export class VPComponent implements AfterViewInit {




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
    move(this.card1, 0.4,0);   // droite + bas
    move(this.card2, -0, 0.2); // gauche + haut
    move(this.card3, 0.03, 0.09);   // droite + bas
    move(this.card4, -0.02, -0.01); // gauche + haut lent
    move(this.card5, 0.07, -0.1);   // droite + haut rapide
    move(this.card6, -0.07, -0.1);  // gauche + haut rapide
  }
}

