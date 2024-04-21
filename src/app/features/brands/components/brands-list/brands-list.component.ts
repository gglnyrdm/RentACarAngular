import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { BrandsApiService } from '../../services/brandsApi.service';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { ListGroupComponent } from '../../../../shared/components/list-group/list-group/list-group.component';
import { ModelListItemDto } from '../../../models/models/model-list-item-dto';
import { ModelsApiService } from '../../../models/services/modelsApi.service';

@Component({
  selector: 'app-brands-list',
  standalone: true,
  imports: [
    CommonModule,
    ListGroupComponent
  ],
  templateUrl: './brands-list.component.html',
  styleUrl: './brands-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListComponent implements OnInit {
  public list!: BrandListItemDto[];
  public models: ModelListItemDto[] = [];

  constructor(
    private brandsApiService: BrandsApiService,
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck(); // ChangeDetectionStrategy.OnPush // Asekronik olarak çalıştığı için bu satırı ekledik.
    });
  }

  getModelsByBrandId(brandId: number) {
    this.modelsApiService.getList({pageIndex:0,pageSize:100}).subscribe((response => {
      this.models = response.items.filter(x => x.brandId == brandId);
      this.change.markForCheck();
    }))
  }
  

}
