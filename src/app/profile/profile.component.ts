import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { User } from '../interfaces/interfaces';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public users: User[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.callApi();
  }


  private callApi() {
    let newUsers: string;
    let tes: User[] = [];
    this.githubService.getUsers()
    .subscribe((data) => {
          data.map((test, index) => {
           test.login = test.avatar_url + ' test';
        });
        this.users = data;

        console.log('CAMBIADA RESPONSE CON MAP: ', data);
    });

  }

}
