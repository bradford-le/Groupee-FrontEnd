import {    BrowserModule                     } from '@angular/platform-browser';
import {    BrowserAnimationsModule           } from '@angular/platform-browser/animations';
import {    NgModule                          } from '@angular/core';
import {    FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {    MdButtonModule, MdCheckboxModule, MdNativeDateModule, 
            MdToolbarModule, MdMenuModule, MdTableModule, 
            MdTabsModule, MaterialModule      } from '@angular/material';
import {    RouterModule                      } from '@angular/router';
import {    routes                            } from './app.routing';
import {    AppComponent                      } from './app.component';
import {    NavbarComponent                   } from './component/navbar/navbar.component';
import {    IndexComponent                    } from './component/index/index.component';
import {    LoginComponent                    } from './component/login/login.component';
import {    AboutComponent                    } from './component/about/about.component';
import {    DashboardComponent                } from './component/dashboard/dashboard.component';
import {    NeweventComponent                 } from './component/newevent/newevent.component';
import {    EventsComponent                   } from './component/events/events.component';
import {    CdkTableModule  } from '@angular/cdk';
import { EventsService } from './services/events.service';

import 'hammerjs';
import { ActivityComponent } from './component/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    AboutComponent,
    DashboardComponent,
    NeweventComponent,
    EventsComponent,
    ActivityComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    MaterialModule,
    MdNativeDateModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdToolbarModule,
    MdMenuModule,
    MdTabsModule,  
    MdTableModule,
    CdkTableModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
