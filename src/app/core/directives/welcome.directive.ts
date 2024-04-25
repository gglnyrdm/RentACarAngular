import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWelcome]',
  standalone: true,
})
export class WelcomeDirective{
  @Input('appWelcomeThen') appWelcomeThen!: TemplateRef<any>;
  @Input('appWelcome') set delay(time: number) {
    this.viewContainer.createEmbeddedView(this.template);
    setTimeout(() => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.appWelcomeThen);
    }, time);
  }

  constructor(
    private template: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}
 }
