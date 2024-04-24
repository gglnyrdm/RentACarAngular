import { Pipe, type PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorHandler',
  standalone: true,
})
export class ControlErrorHandlerPipe implements PipeTransform {

  transform(control: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    if (control?.["required"]) return "This field is required";
    if (control?.['minlength']) return "This field should be minimum 2 characters";
    if(control?.['maxlength']) return "This field should be minimum 2 characters";
    if(control?.['min']) return "This field should be 0";

    return "Invalid input";
  }
  }
