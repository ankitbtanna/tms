import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSideNav(): void {
    this.sidenavToggle.emit();
  }

}
