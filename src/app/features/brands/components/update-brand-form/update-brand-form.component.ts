import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandsApiService } from '../../services/brandsApi.service';
import { UpdateBrandRequest } from '../../models/update-brand-request';

@Component({
  selector: 'app-update-brand-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
],
  templateUrl: './update-brand-form.component.html',
  styleUrl: './update-brand-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateBrandFormComponent {


  form:FormGroup = this.fb.group({
    //Form Controls
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required])
  });

  constructor(private fb:FormBuilder, private brandApiService:BrandsApiService){}
  updateBrand() {
    const updateBrandRequest : UpdateBrandRequest = {
      id:this.form.value.id,
      name:this.form.value.name
    };
    this.brandApiService.updateBrand(updateBrandRequest).subscribe({
      next(updatedBrandResponse) {
          console.log('Response',updatedBrandResponse);
      },
      error(err) {
          console.error('Error',err);
      },
      complete:() => {
        console.info("Brand updated succesfully");
        this.form.reset();
          
      },
    })
  }
  onFormSubmit() {
    this.form.valid ? this.updateBrand() : console.error('Form is invalid');
    }
  }
