import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  constructor() {}

  ngOnInit() {}
  //Class Binding
  appliedCSSClass = 'mint-green';
  notappliedCSSClass = 'false';
}
