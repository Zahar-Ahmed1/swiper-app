import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-produits',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent {


  categories = ['Maquillage', 'Soins', 'Parfums', 'Senteurs d\'intérieur', 'Bien être'];

  products1 = [
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'CHANEL',
      name: 'CHANCE 5',
      desc: 'Eau splendide',
      badge: 'OFFRE BEAUTÉ'
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'YVES SAINT LAURENT',
      name: 'SUPREME BOUQUET',
      desc: 'Eau de Parfum Vaporisateur',
      badge: ''
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'DIOR',
      name: 'DIOR HOMME',
      desc: 'Coffret édition limitée',
      badge: 'REMISE AU PANIER'
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'CREED',
      name: 'AVENTUS',
      desc: 'Eau de parfum',
      badge: ''
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'CHANEL',
      name: 'CHANCE 5',
      desc: 'Eau splendide',
      badge: 'OFFRE BEAUTÉ'
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'YVES SAINT LAURENT',
      name: 'SUPREME BOUQUET',
      desc: 'Eau de Parfum Vaporisateur',
      badge: ''
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'DIOR',
      name: 'DIOR HOMME',
      desc: 'Coffret édition limitée',
      badge: 'REMISE AU PANIER'
    },
    {
      image: "https://swiperjs.com/demos/images/nature-1.jpg",
      brand: 'CREED',
      name: 'AVENTUS',
      desc: 'Eau de parfum',
      badge: ''
    }
  ];

}
