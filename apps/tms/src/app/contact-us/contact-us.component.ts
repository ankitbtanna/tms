import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'tms-workspace-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup = new FormGroup({
    subject: new FormControl('', { validators: [Validators.required] }),
    description: new FormControl('', { validators: [Validators.required] })
  });

  constructor() { }

  ngOnInit(): void {
  }

}
