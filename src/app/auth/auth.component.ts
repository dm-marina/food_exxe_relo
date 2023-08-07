import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AlertComponent } from '../shared/alert/alert.component';
import { User } from './user.model';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  user!:User;
  @Input() authComp!:AuthComponent;
  @Output() close = new EventEmitter<void>();
  active:boolean = true;
  isLogginMode:boolean = true;
  error=null;
  isAuthenticated:boolean=false;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
  closeSub!:Subscription;
  constructor(private authService:AuthService, private router:Router){}

  onClose(){
    this.close.emit();
  }

  onSwitchMode(){
    this.active = this.active;
    this.isLogginMode = !this.isLogginMode;
  }

  onSubmit(form:NgForm){
    if(!form.valid){
      return
    }
    let authObs: Observable<AuthResponseData>;
    this.authService.name = form.value.name;
    this.authService.sname = form.value.sname;
    this.authService.email = form.value.email;
    this.authService.password = form.value.password;

     if(this.isLogginMode){
      authObs = this.authService.login( this.authService.email,  this.authService.password);
     }else{
      authObs = this.authService.signup( 
            this.authService.name,  
            this.authService.sname,  
            this.authService.email, 
            this.authService.password);
     }

     authObs.subscribe({
      next:(resData)=>{
        console.log(resData);
        this.onClose();
      },
      error:(errorMessage)=>{
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage)
      }
    });
    form.reset();
  }
  onLogout(){
    this.authService.logout();
    this.onClose();
  }

  private showErrorAlert(message:string){
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    const compRef = hostViewContainerRef.createComponent(AlertComponent);
    compRef.instance.message = message;
    this.closeSub=compRef.instance.close.subscribe(()=>{
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });

  }
}
