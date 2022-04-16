import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navToggler: any = null
  nav: any = null

  constructor() { }

  ngOnInit(): void {
    this.navToggler = document.getElementById("navToggler");
  }

  navbarToggled() {
    this.navToggler.classList.toggle("active");
    this.nav = document.querySelector("nav");
    this.nav.classList.toggle("open");
  }

}
