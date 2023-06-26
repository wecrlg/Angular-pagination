import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RandomUserService, ResultProps } from './services/random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'paginate';
  users: ResultProps[] = [];
  page: any = 1;
  totalRecords: any = '';
  size: number = 9;

  constructor(
    private randomUser: RandomUserService,
    private ngxService: NgxUiLoaderService
  ) {
    this.users = new Array<ResultProps>();
  }

  getUsers() {
    this.ngxService.start();
    this.randomUser.getRandomUsers().subscribe((res) => {
      this.users = res.results;
      this.totalRecords = res.results.length;
      this.ngxService.stop();
    });
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
