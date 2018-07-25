import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase  } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
test$;
  constructor(db: AngularFirestore ) { 
    db.collection('/test').valueChanges().subscribe(test =>{
      console.log(test)
    })

    

   
  //  this.test$=  db.list('/test');

  //  console.log(this.test$);

  }

  ngOnInit() {
  }

}
