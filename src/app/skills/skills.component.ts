import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor() {}

  ngOnInit() {}
  //Class Binding
  appliedCSSClass = 'mint-green';
  notappliedCSSClass = 'false';
}
