import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.navbarTop();
  }

  ngOnInit(): void {
  }

  navbarTop() {
    if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
        document.getElementById("navTop").style.display = "block";
    } else {
        document.getElementById("navTop").style.display = "none";
    }
  }

}
