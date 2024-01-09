import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import User from '../../models/user.model';
import { Subscription, take } from 'rxjs';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrl: './tabla-usuarios.component.scss'
})
export class TablaUsuariosComponent implements OnInit {
  loading: boolean = true;
  users: User[] = [];
  usersSubscription: Subscription | undefined;

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.loading = true;

    this.usersSubscription = this.userService.getUsers()
      .pipe(take(1))
      .subscribe((response: any) => {
        const usersResponse = response.data.map((user: any) => new User().fromJson(user));

        this.users = usersResponse;
        this.loading = false;
      });
  }

}
