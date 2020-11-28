import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-share-tms',
  templateUrl: './share-tms.component.html',
  styleUrls: ['./share-tms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareTmsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
