import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'he-service',
  template: `
    <he-cmp-a></he-cmp-a>
    <he-cmp-b></he-cmp-b>
  `,
  providers: [DataService]
})
export class ServiceComponent {

}
