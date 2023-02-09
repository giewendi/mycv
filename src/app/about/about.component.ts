import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor() {}

  ngOnInit() {}
  title = 'cvPinlac';
  name = 'Giewen D. Pinlac';
  major = 'Web Development';
  //Class Binding
  appliedCSSClass = 'mint-green';
  notappliedCSSClass = 'false';
}
