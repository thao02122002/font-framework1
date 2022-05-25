import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'user',
        component: UserComponent,
      }
     
    ]
  },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   1. nếu có children thì k dùng component để render nx 
  //   2. nếu vẫn muốn sd component khung layout thì trong componet sẽ phải có router-out
  //   children: [
  //     {
  //       path: '',
  //       component: UserComponent
  //     },
  //     {
  //       path: 'create',
  //       component: UserFormComponent
  //     },
  //     {
  //       path: 'edit',
  //       component: UserFormComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
