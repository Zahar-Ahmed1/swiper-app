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

    const move = (card: ElementRef, speed: number) => {
      if (card && card.nativeElement) {
        card.nativeElement.style.transform = `translateY(${y * speed}px)`;
      }
    };

    move(this.card1, 0.1);
    move(this.card2, -0.1);
    move(this.card3, 0.1);
    move(this.card4, -0.1);
    move(this.card5, -0.1);
    move(this.card6, -0.1);
  }
}

