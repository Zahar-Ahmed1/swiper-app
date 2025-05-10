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
import {VGComponent} from './entities/v-g/v-g.component';
import {SliderComponent} from './entities/slider/slider.component';
import {CadreProduitComponent} from './entities/cadre-produit/cadre-produit.component';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-root',
  imports: [

    CommonModule,
    VPComponent,
    VVComponent,
    VGComponent,
    SliderComponent,
    CadreProduitComponent,


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

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  @ViewChild('navbar') navbar!: ElementRef;

  ngAfterViewInit(): void {
    gsap.to(this.navbar.nativeElement, {
      backgroundColor: '#ffffff',
      padding: '10px 2rem',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top+=10',
        end: 'bottom bottom',
        toggleClass: 'scrolled',
        scrub: true
      }
    });
  }

  title = 'test-app';


}
