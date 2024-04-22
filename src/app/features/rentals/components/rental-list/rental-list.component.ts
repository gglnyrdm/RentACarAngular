import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { RentalListItemDto } from '../../models/rental-list-item-dto';
import { RentalApiService } from '../../services/rentalApi.service';

@Component({
  selector: 'app-rental-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './rental-list.component.html',
  styleUrl: './rental-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentalListComponent { 
  public list!: RentalListItemDto[];

  constructor(
    private rentalsApiService: RentalApiService,
    private change: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.rentalsApiService.getList().subscribe((response) => {
      this.list = response;
      this.change.markForCheck();
    });
  }
}
