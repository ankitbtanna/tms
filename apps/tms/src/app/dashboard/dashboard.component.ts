import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GRAPH_COLOURS } from './dashboard.constant';
import { CreateTenderComponent } from './create-tender/create-tender.component';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  graphColours = GRAPH_COLOURS;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openAddTenderDialog(): void {
    alert('came here');
    this.dialog.open(CreateTenderComponent);
  }
}
