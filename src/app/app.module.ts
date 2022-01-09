import { ErrorHandler, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { BrowserModule, enableDebugTools } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { AppErrorHandler } from './common/app-error-handler';
import { GithubFollowersService } from './services/github-followers.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveComponent } from './archive/archive.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'author', component: AuthorsComponent },
  { path: 'cpwd', component: ChangePasswordComponent },
  { path: 'directive', component: CustomDirectiveComponent },
  { path: 'followers', component: GithubFollowersComponent },
  { path: 'like', component: LikeComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'new-course', component: NewCourseFormComponent },
  { path: 'zippy', component: ZippyComponent },
  { path: 'archive/:year/:month', component: ArchiveComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    FavouriteComponent,
    CustomDirectiveComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    GithubFollowersComponent,
    HomeComponent,
    NotFoundComponent,
    ArchiveComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(
        appRoutes,
        //{ enableTracing: true }
    )
  ],
  providers: [
    AuthorsService,
    GithubFollowersService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
