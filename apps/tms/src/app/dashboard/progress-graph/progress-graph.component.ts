import { Component, Input, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-progress-graph',
  templateUrl: './progress-graph.component.html',
  styleUrls: ['./progress-graph.component.scss']
})
export class ProgressGraphComponent implements OnInit {
  destroyed = false;

  @Input() percent: number;

  @Input() title: string[];

  @Input() outerStrokeColor: string;

  @Input() innerStrokeColor: string;

  options = {
    percent: 0,
    radius: 90,
    title: [''],
    titleFontSize: '24',
    showUnits: false,
    unitsFontSize: '12',
    subtitle: 'Tenders',
    showSubtitle: false,
    animateTitle: true,
    showBackground: false,
    outerStrokeWidth: 15,
    innerStrokeWidth: 10,
    subtitleFormat: false,
    startFromZero: true,
    outerStrokeColor: '',
    innerStrokeColor: ''
  };

  ngOnInit(): void {
    this.options.percent = this.percent;
    this.options.title = this.title;
    this.options.outerStrokeColor = this.outerStrokeColor;
    this.options.innerStrokeColor = this.innerStrokeColor;
  }
}
