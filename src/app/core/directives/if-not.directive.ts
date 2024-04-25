import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfNot]',
  standalone: true,
})
export class IfNotDirective { 

  @Input('appIfNot') set condition(value: boolean) {
    if(value === false) {
      this.viewContaier.clear();
      this.viewContaier.createEmbeddedView(this.template)
    }

    else{
      this.viewContaier.clear();
    }

    //setter
  }

  constructor(
    private viewContaier: ViewContainerRef,
    private template: TemplateRef<HTMLElement>
  ) {}
}
