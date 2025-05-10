import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit {
  @Input() animationClass = 'tracking-in-contract-bck-top';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Supprime d'abord les classes si elles sont déjà présentes
          this.renderer.removeClass(this.el.nativeElement, this.animationClass);
          this.renderer.removeClass(this.el.nativeElement, 'animate__animated');

          // Forcer un "reflow" pour redéclencher l'animation
          void this.el.nativeElement.offsetWidth;

          // Réapplique les classes
          this.renderer.addClass(this.el.nativeElement, 'animate__animated');
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
        } else {
          // Optionnel : retirer les classes quand on sort du viewport
          this.renderer.removeClass(this.el.nativeElement, 'animate__animated');
          this.renderer.removeClass(this.el.nativeElement, this.animationClass);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.el.nativeElement);
  }
}
