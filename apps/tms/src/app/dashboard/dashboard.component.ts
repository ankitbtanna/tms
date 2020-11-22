import { Component, OnInit } from '@angular/core';
import { GRAPH_COLOURS } from './dashboard.constant';

@Component({
  selector: 'tms-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  graphColours = GRAPH_COLOURS;

  constructor() {}

  ngOnInit(): void {}
}
