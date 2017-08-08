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
import {    CdkTableModule                    } from '@angular/cdk';
import {    HttpModule                        } from '@angular/http';

import { EventsService } from './services/events.service';
import { ActivityService} from './services/activity.service';
import { SessionService} from './services/session.service';


import 'hammerjs';
import { ActivityComponent } from './component/activity/activity.component';
import { PaypalComponent } from './component/paypal/paypal.component';
import { MemberPipe } from './pipes/member.pipe';
import { StatePipe } from './pipes/state.pipe';
import { EventnamePipe } from './pipes/eventname.pipe';
import { SignupComponent } from './component/signup/signup.component';

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
    ActivityComponent,
    PaypalComponent,
    MemberPipe,
    StatePipe,
    EventnamePipe,
    SignupComponent
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
    CdkTableModule,
    HttpModule,
  ],
  providers: [
    EventsService,ActivityService,SessionService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
