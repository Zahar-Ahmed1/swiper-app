import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product = {
    images: [
      "https://swiperjs.com/demos/images/nature-1.jpg",
      "https://swiperjs.com/demos/images/nature-1.jpg",
      'assets/img3.jpg'
    ],
    colorImages: [
      'assets/img1.jpg',
      "https://swiperjs.com/demos/images/nature-1.jpg"
    ]
  };

  selectedImage = this.product.images[0];
  selectedSize = '';
  quantity = 1;
  sizes = ['XS', 'S', 'M', 'L', 'XL'];

  selectImage(img: string) {
    this.selectedImage = img;
  }
}
