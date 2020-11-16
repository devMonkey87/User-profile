import { GithubService } from './../services/github.service';
import { Component, OnInit, Input, EventEmitter, Output, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { User } from '../interfaces/interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() name: string;
  @Output() newItemEvent = new EventEmitter<string>();

  // @ViewChildren(HTMLElement) pictures: QueryList<HTMLElement>;

  users: User[];
  nombre: string;
  constructor(private githubservice: GithubService) {}

  ngOnInit() {
    this.nombre = name;
    console.log('valor?', this.nombre);
    this.newItemEvent.emit('hellowwww');
    this.callApi();
  }

  private callApi() {
    let newUsers: string;
    let tes: User[] = [];
    this.githubservice.getUsers()
    .subscribe((data) => {
          data.map((test, index) => {
           test.login = test.avatar_url + ' test';
        });
        this.users = data;

        console.log('CAMBIADA RESPONSE CON MAP: ', data);
    });

  }
}
