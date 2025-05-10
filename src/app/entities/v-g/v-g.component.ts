import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

Swiper.use([EffectCoverflow, Autoplay, Pagination]);

@Component({
  selector: 'app-v-g',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './v-g.component.html',
  styleUrls: ['./v-g.component.css']
})
export class VGComponent implements AfterViewInit {
  items = [
    { image: 'https://res.cloudinary.com/dxtlsrtoq/image/upload/v12345678/pqkgvlnew0sjujjgia0h.svg', title: 'Avatar' },
    { image: 'https://picsum.photos/300/400?random=2', title: 'Dr Strange' },
    { image: 'https://picsum.photos/300/400?random=2', title: 'Black Adam' },
    { image: 'https://picsum.photos/300/400?random=2', title: 'Dune' },
    { image: 'https://picsum.photos/300/400?random=2', title: 'Spiderman' }
  ];

  ngAfterViewInit() {
    const swiper = new Swiper('.tranding-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }
}
