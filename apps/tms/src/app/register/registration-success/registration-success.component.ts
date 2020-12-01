import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tms-workspace-registration-success',
  templateUrl: './registration-success.component.html',
  styleUrls: ['./registration-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationSuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
