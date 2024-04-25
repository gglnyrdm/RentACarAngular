import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective { 
  //Give me the reference of the element  I'm using
constructor(private element:ElementRef<HTMLElement>){
const span = document.createElement('span');
span.style.backgroundColor = 'yellow';
span.style.color = 'black';
span.innerText = 'On sale! '

element.nativeElement.style.backgroundColor = 'yellow';
element.nativeElement.appendChild(span);
} 

}
