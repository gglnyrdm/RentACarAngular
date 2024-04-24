import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UpdateModelRequest } from '../../models/update-model-request';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ControlErrorHandlerPipe } from '../../../../core/pipes/controlErrorHandler.pipe';

@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ControlErrorHandlerPipe
  ],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpdateModelFormComponent {
  form: FormGroup = this.fb.group({
    id: new FormControl('',[Validators.required,Validators.min(0)]),
    brandName: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    brandId: new FormControl('',[Validators.required,Validators.min(0)]),
    name: new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
    modelYear: new FormControl('2023',[Validators.required]),
    dailyPrice: new FormControl('1250',[Validators.required,Validators.min(0)])
  });
constructor(
  private fb:FormBuilder,
  private modelsApiService: ModelsApiService
) {}
updateModel() {
  const updateModelRequest : UpdateModelRequest={
    id:this.form.value.id,
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
  this.modelsApiService.putModel(updateModelRequest).subscribe({
    next(updatedModelResponse) {
      console.log('Response',updatedModelResponse);
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
  
  this.form.valid ? this.updateModel() : console.error('Form is invalid');
   }
}
