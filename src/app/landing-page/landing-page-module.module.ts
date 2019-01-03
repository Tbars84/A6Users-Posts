import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '@landing-services/data.service';
import { SidebarComponent } from '@landing-components/sidebar/sidebar.component';
import { PostsComponent } from '@landing-components/posts/posts.component';
import { DetailsComponent } from '@landing-components/details/details.component';
import { UsersComponent } from '@landing-components/users/users.component';
import { AppRoutingModule } from './../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    SidebarComponent,
    PostsComponent,
    DetailsComponent,
    UsersComponent,
  ],
  exports: [
    SidebarComponent,
    PostsComponent,
    DetailsComponent,
    UsersComponent,
  ],
  providers: [DataService],
})

export class LandingPageModuleModule { }
