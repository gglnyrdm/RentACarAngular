import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CustomerListItemDto } from '../../models/customer-list-item-dto';
import { CustomerApiService } from '../../services/customerApi.service';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListComponent { 
  public list!: CustomerListItemDto[];

  constructor(
    private customersApiService: CustomerApiService,
    private change: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.customersApiService.getList().subscribe((response) => {
      debugger;
      console.log(response);
      
      this.list = response;
      this.change.markForCheck();
    });
  }
}
