import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsApiService } from '../../services/brandsApi.service';
import { PostBrandRequest } from '../../models/post-brand-request';
import { InvokeFunctionExpr } from '@angular/compiler';
import { IfNotDirective } from '../../../../core/directives/if-not.directive';
import { ControlErrorHandlerPipe } from '../../../../core/pipes/controlErrorHandler.pipe';
import { ButtonDirective } from '../../../../core/directives/button.directive';
import { NoCharacterInputDirective } from '../../../../core/directives/no-character-input.directive';

@Component({
  selector: 'app-create-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IfNotDirective,
    ControlErrorHandlerPipe,
    ButtonDirective,
    NoCharacterInputDirective
  ],
  templateUrl: './create-brand-form.component.html',
  styleUrl: './create-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateBrandFormComponent {

  form:FormGroup = this.fb.group({
    //Form Controls
    name: [
      '',
      [Validators.required]
    ]
   
  });

  constructor(private fb:FormBuilder,
    private brandApiService: BrandsApiService
  ){}

  createBrand(){
    const request : PostBrandRequest={
      name:this.form.value.name
    };
    this.brandApiService.postBrand(request).subscribe(
      {
        next(response) {
          console.log('Response',response)
        },
        error(err) {
            console.error('error',err);
            
        },
        complete:() => {
          console.info('Brand created succesfully')
          this.form.reset();
        }
      }
    )
  
  }
  onFormSubmit() {
   if(this.form.invalid)
    {
      console.error('Form in invalid');
    }
    else{
      this.createBrand();

    }
    } 
}
