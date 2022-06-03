import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminProductDetailComponent } from './pages/admin/admin-product/admin-product-detail/admin-product-detail.component';
import { AdminProductFormComponent } from './pages/admin/admin-product/admin-product-form/admin-product-form.component';
import { AdminProductListComponent } from './pages/admin/admin-product/admin-product-list/admin-product-list.component';
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
  {
    path:'admin',
    component: AdminLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'users',
      //   pathMatch: 'full'
      // },
      // {
      //   path: 'users',
      //   component: UserComponent
      // }
      {
        path: 'products',
        children: [
          {
            path: '',
            component: AdminProductListComponent
          },
          {
            path: 'create',
            component: AdminProductFormComponent
          },
          {
            path: 'edit/:_id',
            component: AdminProductFormComponent
          },
          {
            path: ':_id',
            component: AdminProductDetailComponent
          }
        ]
      }
    ]
  }
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
