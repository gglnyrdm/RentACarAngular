import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import { ModelListItemDto } from '../../models/model-list-item-dto';
import { ListGroupComponent } from '../../../../shared/components/list-group/list-group/list-group.component';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule,ListGroupComponent],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit {
  public list!: ModelListItemDto[];

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.modelsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck(); // ChangeDetectionStrategy.OnPush // Asekronik olarak çalıştığı için bu satırı ekledik.
    });
  }
}
