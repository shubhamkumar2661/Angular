import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smit';
  count = 0;

  number = 2;
  Number = 1;
  listOfNumbers = [12,43,543,53,1];
  listOfName =["abc","def","ghi","jkl","mno"];
  increment = () => {
    this.count++;
  }
  decrease = () => {
    this.count--;
  }
}
