import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition,
  state
} from '@angular/animations';


import {CommonModule} from '@angular/common';
import {


  ViewChildren,
  QueryList
} from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {VPComponent} from './entities/v-p/v-p.component';
import {VVComponent} from './entities/v-v/v-v.component';
import {SliderComponent} from './entities/slider/slider.component';
import {CadreProduitComponent} from './entities/cadre-produit/cadre-produit.component';
import {FooterComponent} from './entities/footer/footer.component';
import {InspirationSectionComponent} from './entities/inspiration-section/inspiration-section.component';
import {NavComponent} from './entities/nav/nav.component';
import {ProduitsComponent} from './entities/produits/produits.component';
import {ProductDetailComponent} from './entities/product-detail/product-detail.component';
import {ScrollCartComponent} from './entities/scroll-cart/scroll-cart.component';
import {HeroSectionComponent} from './entities/hero-section/hero-section.component';
import {ProductsSectionComponent} from './entities/products-section/products-section.component';
import {MoreProductsSectionComponent} from './entities/more-products-section/more-products-section.component';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  imports: [

    CommonModule,
    VPComponent,
    VVComponent,

    SliderComponent,
    CadreProduitComponent,
    FooterComponent,
    InspirationSectionComponent,
    NavComponent,
    ProduitsComponent,
    ProductDetailComponent,
    ScrollCartComponent,
    HeroSectionComponent,
    ProductsSectionComponent,
    MoreProductsSectionComponent,


  ],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(200px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent  implements AfterViewInit {
  @ViewChild('smoothContent', { static: true }) smoothContent!: ElementRef;

  ngAfterViewInit(): void {
    let current = 0;
    let target = 0;
    let ease = 0.075;

    const updateScroll = () => {
      target = window.scrollY;
      current += (target - current) * ease;

      gsap.set(this.smoothContent.nativeElement, {
        y: -current,
      });

      requestAnimationFrame(updateScroll);
    };

    updateScroll();
  }
  title = 'test-app';


}
