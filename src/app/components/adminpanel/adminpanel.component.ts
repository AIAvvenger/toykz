import { Component, OnInit } from '@angular/core';
// import { RestService } from '.../rest.service';
// import { Users} from './Users';


@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.scss'],
})
export class AdminpanelComponent implements OnInit {

  constructor(/*private rs : RestService*/){}

  // columns = ["User Id", "First Name", "Last Name", "Role"];
  //
  // index = ["id", "firstName", "lastName", "role"];
  //
  // users : Users[] = [];

  ngOnInit(): void {
    // this.rs.getUsers().subscribe
    // (
    //   (response)=>
    //   {
    //     this.users = response;
    //   },
    //   (error)=>
    //   {
    //     console.log("Error : "+error);
    //   }
    // )
  }

}
