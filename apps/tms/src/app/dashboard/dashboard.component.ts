import { Component, OnInit } from '@angular/core';

import { CreateTenderComponent } from './create-tender/create-tender.component';
import { GRAPH_COLOURS } from './dashboard.constant';
import { MatDialog } from '@angular/material/dialog';
import { TendersService } from './services/tenders.service';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  graphColours = GRAPH_COLOURS;

  columnDefs = [{ field: 'make' }, { field: 'model' }, { field: 'price' }];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor(private tendersService: TendersService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.tendersService.getTendersByUsername();
  }

  openAddTenderDialog(): void {
    this.dialog.open(CreateTenderComponent);
  }
}
