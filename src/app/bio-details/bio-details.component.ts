import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bio-details',
  templateUrl: './bio-details.component.html',
  styleUrls: ['./bio-details.component.css']
})
export class BioDetailsComponent  {

  openLinkedInProfile()
  {
    const urlToOpen = 'https://www.linkedin.com/in/uzair-ashraf-015713146/';
    window.open(urlToOpen, '_blank'); 
  }

}
