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
import { PageRequest } from '../../../../core/page-request';
import { GetModelListRequest } from '../../models/get-model-list-request';
import { PageResponse } from '../../../../core/page-response';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-models-list',
  standalone: true,
  imports: [CommonModule,ListGroupComponent,RouterModule],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsListComponent implements OnInit {

  public list!: PageResponse<ModelListItemDto>;

  constructor(
    private modelsApiService: ModelsApiService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList({pageIndex:0, pageSize:5})
    
  }



  getList(request: GetModelListRequest) {
    
    this.modelsApiService.getList(request).subscribe((response) => {
      this.list = response;
    });
  }

  nextPage() {
    this.getList(
      {
        pageIndex: this.list.pageIndex + 1,
        pageSize: this.list.pageSize,
      },
    );
    }
    previousPage() {
      this.getList(
        {
          pageIndex: this.list.pageIndex - 1,
          pageSize: this.list.pageSize,
        },
      );
    }

}
