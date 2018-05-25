import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ChatComponent } from './chat/chat.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {SocketService} from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserlistComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    FormsModule
  ],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
