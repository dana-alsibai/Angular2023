import { Component, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
  //make sure everyting is applied
})
export class ServerElementComponent {
  //allow parent component to be able to bind to the child property
  @Input() element: { type: string; name: string; content: string }; //property
}
