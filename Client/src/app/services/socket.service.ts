import {EventEmitter, Injectable} from '@angular/core';
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment';
import {Message} from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: SocketIOClient.Socket;
  public userlist = new EventEmitter();
  public message = new EventEmitter();

  constructor() {
    this.socket = io.connect(environment.serverAddress);
    this.socket.on('userlist', (list: string[]) => this.userlist.emit(list));
    this.socket.on('message', this.incomingMessage.bind(this));
  }

  private incomingMessage(name: string, msg: string, timestamp: string): void {
    this.message.emit(new Message(name, timestamp, msg));
  }

  public setUsername(newUsername: string): void {
    this.socket.emit('username', newUsername);
  }

  public sendMessage(msg: string): void {
    this.socket.emit('message', msg);
  }

}
