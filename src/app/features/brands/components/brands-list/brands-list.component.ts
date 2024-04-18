import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BrandsApiService } from '../../services/brandsApi.service';
import { BrandListItemDto } from '../../models/brand-list-item-dto';
import { ListGroupComponent } from '../../../../shared/components/list-group/list-group/list-group.component';

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
  constructor(
    private brandsApiService: BrandsApiService,
    private change: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.brandsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck(); // ChangeDetectionStrategy.OnPush // Asekronik olarak çalıştığı için bu satırı ekledik.
    });
  }

}
