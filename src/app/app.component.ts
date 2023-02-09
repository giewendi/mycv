import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Interpolation: Used in Home/Root page at ./app.component.html
  email = 'giewenpinlac@gmail.com';
  phone = '+63 949 680 7775';
  name = 'Giewen D. Pinlac';
  major = 'Web Developer';

  //Property Binding: Used in Forms at ./app.component.html
  country1: String = 'Philippines';
  country2: String = 'USA';
  country3: String = 'Australia';
  comment: String = 'Write something here...';

  //Style Binding: Used in Form Background color and Button Color
  formColor = '#f1f1f1';
  buttonColor = '#5ce2af';

  //Class Binding: Used in every Component, specifically in the sub-titles
  appliedCSSClass = 'mint-green';
  notappliedCSSClass = 'false';

  //Event Binding: Used in the Form: Submit Button
  showData($event: any) {
    console.log('Form was Submitted!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
