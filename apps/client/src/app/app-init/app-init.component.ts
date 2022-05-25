import { Component } from '@angular/core';

@Component({
  selector: 'ffdc-corporate-banking-sample-root',
  template: ` <router-outlet></router-outlet> `,
})
export class AppInitComponent {

  constructor(){
    alert('ddd');
    debugger
  }

}
