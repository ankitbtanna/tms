import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tms-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter();
  @Output() onLogout: EventEmitter<void> = new EventEmitter();
  @Input() isLoggedIn;

  constructor() { }

  ngOnInit(): void { }

  onToggleSideNav(): void {
    this.sidenavToggle.emit();
  }

  logout(): void {
    this.onLogout.emit();
  }
}
