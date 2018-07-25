import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs'


@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
  }

  signInRegular(email, password) {
  
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password).catch (function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  signup(email,password){
   return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  
  status(){
    debugger;
    let user = this._firebaseAuth.auth.currentUser;
    // this._firebaseAuth.auth.onAuthStateChanged(function (user) {
      if (user) {
       console.log("Signin");
       
      } else {
        console.log("SignOut");
        
      }
    // });
  }

  signout(){
    this._firebaseAuth.auth.signOut().then(function () {
       console.log(" Sign-out successful");
    }).catch(function (error) {
      // An error happened.
    });
  }
  
}