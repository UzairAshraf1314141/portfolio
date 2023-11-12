import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  private showDivSubject = new BehaviorSubject<boolean>(false);
  showDiv$ = this.showDivSubject.asObservable();

  setShowDiv(show: boolean) {
    this.showDivSubject.next(show);
  }

}
