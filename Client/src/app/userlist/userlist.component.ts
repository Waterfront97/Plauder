import {Component, OnInit} from '@angular/core';
import {SocketService} from '../services/socket.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  public userlist: string[];

  constructor(private socketService: SocketService) {
    socketService.userlist.subscribe(list => this.userlist = list);
  }

  ngOnInit() {
  }

}
