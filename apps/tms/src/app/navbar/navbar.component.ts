import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  activeRoute = 'home';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((url: NavigationStart) => {
      if (url.url.indexOf('dashboard') !== -1) {
        this.activeRoute = 'home'
      } else if (url.url.indexOf('share') !== -1) {
        this.activeRoute = 'share'
      } else {
        this.activeRoute = 'contact-us'
      }
    })
  }

  onToggleSideNav(): void {
    this.sidenavToggle.emit();
  }

  logout(): void {
    this.onLogout.emit();
  }
}
