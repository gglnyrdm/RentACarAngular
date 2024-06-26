import { Pipe, type PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'controlErrorHandler',
  standalone: true,
})
export class ControlErrorHandlerPipe implements PipeTransform {

  transform(control: ValidationErrors | null | undefined, ...args: unknown[]): unknown {
    const minLength = args[0] as number | undefined;
    if (control?.["required"]) return "This field is required";
    if (control?.['minlength']) return `This field should be minimum ${control['minlength'].requiredLength} characters`;
    if(control?.['maxlength']) return "This field should be maximum 20 characters";
    if(control?.['min']) return "This field should be 0";

    return "Invalid input";
  }
  }
