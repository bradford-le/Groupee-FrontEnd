import { Routes             } from '@angular/router';
import { IndexComponent     } from './component/index/index.component';
import { LoginComponent     } from './component/login/login.component';
import { SignupComponent    } from './component/signup/signup.component';
import { AboutComponent     } from './component/about/about.component';
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { NeweventComponent  } from './component/newevent/newevent.component';
import { EventsComponent    } from './component/events/events.component';
import { ActivityComponent  } from './component/activity/activity.component';
import { SessionService } from "./services/session.service";


export const routes : Routes = [
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [SessionService] },    
    { path: 'newevent', component: NeweventComponent, canActivate: [SessionService] },    
    { path: 'events', component: EventsComponent, canActivate: [SessionService] },
    { path: 'activity', component: ActivityComponent , canActivate: [SessionService]},

]


