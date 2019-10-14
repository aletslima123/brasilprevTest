import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { IUsersResponse, IUser } from 'src/app/models/IUser.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public results$: Observable<IUser[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers = () => {
    this.results$ = this.usersService.getUsers().pipe(
      map((data: IUsersResponse) => {
        return data.results;
      })
    )
  };
}
