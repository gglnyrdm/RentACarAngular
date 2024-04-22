import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelDetailsComponent {
  @Input() id!: number;
  modelDetails!: ModelListItemDto;

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getModelDetails();
  }

  getModelDetails() {
    this.modelsApiService.getById(this.id).subscribe({
      next: (modelDetails) => {
        this.modelDetails = modelDetails;
      },
      complete: () => {
        this.change.markForCheck();
      },
    });
  }


 }
