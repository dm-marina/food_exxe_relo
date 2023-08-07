import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit{
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!:PlaceholderDirective;
  userSubscr!:Subscription;
  user!:User;
  @Input() accountComp!:AccountComponent;
  @Output() close = new EventEmitter<void>();
  constructor(private authService:AuthService){}
  email!:string;
  ngOnInit(): void {
    this.email = this.authService.email;
  }
  onClose(){
    this.close.emit();
  }
  onChangeAccount(){
    this.authService.logout()
    this.onClose();
  }


}
