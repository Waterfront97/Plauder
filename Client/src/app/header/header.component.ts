import {Component, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username = '';

  constructor(private socketService: SocketService) {
    const savedName = localStorage.getItem('username');
    if (savedName) {
      this.changeName(savedName);
      this.username = savedName;
    }
  }

  ngOnInit() {

  }

  public changeName(newName: string): void {
    localStorage.setItem('username', newName);
    this.socketService.setUsername(newName);
  }

}
