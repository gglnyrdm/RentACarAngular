import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModelsApiService } from '../../services/modelsApi.service';
import { CreateModelRequest } from '../../models/create-model-request';
import { BrandsApiService } from '../../../brands/services/brandsApi.service';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent {

form: FormGroup = this.fb.group({
  brandName: new FormControl('',[Validators.required]),
  brandId: new FormControl('',[Validators.required]),
  name: new FormControl('',[Validators.required]),
  modelYear: new FormControl('2023',[Validators.required]),
  dailyPrice: new FormControl('1250',[Validators.required])
});

constructor(private fb:FormBuilder, 
  private modelsApiService:ModelsApiService, 
  private brandApiService:BrandsApiService) {}

createModel() {
  const createModelRequest : CreateModelRequest={
    brandId:this.form.value.brandId,
    name:this.form.value.name,
    modelYear:this.form.value.modelYear,
    dailyPrice:this.form.value.dailyPrice,
    imageUrl:'https://raw.githubusercontent.com/ahmet-cetinkaya-instruction/rent-a-car-fake-backend/master/src/data/car-953357_1280.png',
    brand:{
      id:this.form.value.brandId,
      name:this.form.value.brandName
    }
  };
  debugger;
  this.modelsApiService.postModel(createModelRequest).subscribe({
    next(createdModelResponse) {
      console.log('Response',createdModelResponse);
  },
  error(err) {
      console.error('Error',err);
  },
  complete:() => {
    console.info("Model create succesfully");
    this.form.reset();
  }
  })
}
onSubmitForm() {
  
  this.form.valid ? this.createModel() : console.error('Form is invalid');
   }

   
  //  getBrandById(){
    
  //   this.brandApiService.getById(this.form.value.brandId).subscribe({
  //     next(response) {
  //       console.log('Response',response);
        
  //   },
  //   error(err) {
  //       console.error('Error',err);
  //   },
  //   complete:() => {
  //     console.info("Model create succesfully");
  //     this.form.reset();
  //   }
  //   })
  //  }
  
}
