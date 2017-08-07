import { Routes                 } from '@angular/router'
import { IndexComponent         } from './component/index/index.component'
import { LoginComponent         } from './component/login/login.component'
import { AboutComponent         } from './component/about/about.component'
import { DashboardComponent     } from './component/dashboard/dashboard.component'
import { NeweventComponent      } from './component/newevent/newevent.component'
import { EventsComponent        } from './component/events/events.component'
import { EventDetailComponent   } from './component/event-detail/event-detail.component'
import { ActivityComponent      } from './component/event/event.component'


export const routes : Routes = [
    { path: '', component: IndexComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'dashboard', component: DashboardComponent },    
    { path: 'newevent', component: NeweventComponent },    
    { path: 'events', component: EventsComponent },
    { path: 'events/:id', component: EventDetailComponent },
    { path: 'event', component: ActivityComponent },
]


