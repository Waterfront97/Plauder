import {Component, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';
import {MatSlideToggleChange} from '@angular/material';
import {NotificationService} from '../services/notification.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public username = '';
  public notifyChecked: boolean;
  public version = environment.version;

  constructor(private socketService: SocketService, private notify: NotificationService) {
    const savedName = localStorage.getItem('username');
    const savedNotify = localStorage.getItem('notify');
    if (savedName) {
      this.changeName(savedName);
      this.username = savedName;
    }

    if (savedNotify === 'true') {
      this.notify.enableNotifications = true;
      this.notifyChecked = true;
    } else {
      this.notify.enableNotifications = false;
      this.notifyChecked = false;
    }
  }

  ngOnInit() {

  }

  public changeName(newName: string): void {
    localStorage.setItem('username', newName);
    this.socketService.setUsername(newName);
  }

  public toggleNotifys(event: MatSlideToggleChange): void {
    if (event.checked) {
      this.notify.enableNotifications = true;
      localStorage.setItem('notify', 'true');
    } else {
      this.notify.enableNotifications = false;
      localStorage.setItem('notify', 'false');
    }
  }

}
