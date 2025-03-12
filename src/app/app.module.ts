import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './shared/card/shared.module';
import { TasksModule } from './tasks/tasks.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
   
    
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule,SharedModule,TasksModule],
})
export class AppModule {}
