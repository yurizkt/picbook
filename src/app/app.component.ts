import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos = [
    {
      url: 'https://audaciouscreative.co.uk/wp-content/uploads/2016/01/Lion.jpg',
      description: 'Leão'
    },
    {
      url: 'https://sonhar.info/wp-content/uploads/2017/09/sonhar-com-tigre.jpg',
      description: 'Tigre'
    }
  ]
}
