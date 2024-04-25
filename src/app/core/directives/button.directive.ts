import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective {
  @Input() backgroundColor: string = 'yellow';
  @Input() color: string = 'black';
  @Input() hoverBgColor: string = 'lightblue';
  constructor(private element:ElementRef<HTMLElement>){}
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    this.element.nativeElement.style.color = 'black';
    this.element.nativeElement.style.fontSize = '1rem';
   
    this.element.nativeElement.style.border = '1px solid';
    this.element.nativeElement.style.borderRadius = '0.5rem';


    this.element.nativeElement.style.color = this.color;
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = this.hoverBgColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  }
 }

