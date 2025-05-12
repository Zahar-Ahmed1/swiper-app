import {Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import {CurrencyPipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-inspiration-section',
  imports: [
    NgForOf,
    CurrencyPipe
  ],
  templateUrl: './inspiration-section.component.html',
  styleUrl: './inspiration-section.component.css',
  standalone : true,
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
})
export class InspirationSectionComponent {
  inspirations = [
    { title: 'FEMME', image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { title: 'HOMME', image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { title: 'ENFANT', image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { title: 'BEAUTÉ', image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { title: 'MAISON', image: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { title: 'LUXE', image: "https://swiperjs.com/demos/images/nature-1.jpg" }
  ];
  @ViewChild('carousel', { static: false }) carousel!:ElementRef;

  products = [
    {
      brand: 'MIU MIU',
      description: 'Robe droite manches longues en jersey de coton',
      price: 900,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'T-shirt à manches longues en jersey côtelé',
      price: 720,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'Sac à main Aventure en cuir nappa',
      price: 3200,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'Jupe courte plissée en coton denim',
      price: 990,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'Robe droite manches longues en jersey de coton',
      price: 900,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'T-shirt à manches longues en jersey côtelé',
      price: 720,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'Sac à main Aventure en cuir nappa',
      price: 3200,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      brand: 'MIU MIU',
      description: 'Jupe courte plissée en coton denim',
      price: 990,
      image: "https://swiperjs.com/demos/images/nature-1.jpg"
    }
  ];

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }





}
