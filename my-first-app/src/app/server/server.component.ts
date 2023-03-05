import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
      .count {
        color: white;
      }
    `,
  ],
})
export class ServerComponent {
  serverId = 101;
  serverStatus = 'offline';
  isDisable = false;
  count = [];

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  toggle($event: Event) {
    this.isDisable = !this.isDisable;
    // this.count.push(this.count.length + 1);
    this.count.push(new Date());
  }
}
