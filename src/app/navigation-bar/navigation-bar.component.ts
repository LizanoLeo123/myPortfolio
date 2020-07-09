import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isMenuCollapsed = true;

  viewAboutMe() {
    document.getElementById('about').scrollIntoView({ block: "end", behavior: "smooth" });
    this.isMenuCollapsed = true;
  }

}
