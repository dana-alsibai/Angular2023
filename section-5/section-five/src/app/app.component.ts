import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'section-five';
  serverElements = [{ type: 'server', name: 'test', content: 'jsut a test!' }];

  onServerAdded(eventData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent,
    });
  }

  onbluePrintAdded(event: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: event.serverName,
      content: event.serverContent,
    });
  }
}
