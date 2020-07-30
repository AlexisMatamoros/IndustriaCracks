import { Component, OnInit } from '@angular/core';

//Servicios
import { SidebarService } from 'src/app/services/shared/sidebar.service';
import { UserService } from 'src/app/services/auth/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(
    public _sidebar: SidebarService,
    public auth: UserService
  ) { }

  ngOnInit(): void {
  }

}
