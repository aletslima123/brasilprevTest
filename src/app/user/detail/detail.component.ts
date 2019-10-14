import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { IUser } from 'src/app/models/IUser.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  public userId: string = this.route.snapshot.paramMap.get('id');
  public user: IUser;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.user = this.usersService.getUser(this.userId);
  }
}
