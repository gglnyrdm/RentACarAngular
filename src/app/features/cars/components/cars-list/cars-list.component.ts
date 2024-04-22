import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CarsListItemDto } from '../../models/car-list-item-dto';
import { CarApiService } from '../../services/carApi.service';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListComponent { 
  public list!: CarsListItemDto[];

  constructor(
    private carsApiService: CarApiService,
    private change: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.carsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }
}
