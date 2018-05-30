export class Message {
  public username: string;
  public timestamp: string;
  public content: string;

  constructor(username: string, timestamp: string, content: string) {
    this.username = username;
    this.timestamp = timestamp;
    this.content = content;
  }
}
