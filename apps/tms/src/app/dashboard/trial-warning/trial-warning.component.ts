import { Component, Input, OnInit } from '@angular/core';
import { SubscriptionDetails } from '../models/subscription-interface.model';

@Component({
  selector: 'tms-trial-warning',
  templateUrl: './trial-warning.component.html',
  styleUrls: ['./trial-warning.component.scss']
})
export class TrialWarningComponent implements OnInit {

  @Input() date: string;
  formattedDate: string;

  ngOnInit(): void {
    const currentDate = new Date(this.date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.formattedDate = currentDate.getDate() + '-' + months[currentDate.getMonth()] + '-' + currentDate.getFullYear();
  }

}
