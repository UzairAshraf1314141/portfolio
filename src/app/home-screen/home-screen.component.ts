import { Component, Output, EventEmitter } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent  {

  openLinkedInProfile()
  {
    const urlToOpen = 'https://www.linkedin.com/in/uzair-ashraf-015713146/';
    window.open(urlToOpen, '_blank'); 
  }

}
