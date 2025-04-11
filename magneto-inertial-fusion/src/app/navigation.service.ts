import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() { }

  navTo(url: string) {
    window.location.href = url;
  }

  jumpTo(id: string) {
    let element:any = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
