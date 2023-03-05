import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test Server';
  serverCreated = false;
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'server is created! Name is ' + this.serverName;
  }

  onDeleteServer() {
    this.serverCreationStatus = 'server removed';
  }

  onUpdateServerName($event: any) {
    this.serverName = $event.target.value;
    console.log($event.target.value);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
