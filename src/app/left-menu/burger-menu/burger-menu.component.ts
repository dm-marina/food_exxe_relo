import { Component, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { BookingComponent } from 'src/app/booking/booking.component';
import { Subscription } from 'rxjs';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent{
  @Input() burger!:BurgerMenuComponent;
  @Output() close = new EventEmitter<void>();

  closeBurger(){
    this.close.emit();
  }
  constructor(private route:ActivatedRoute, private router:Router){}

  onMain(){
    this.router.navigate([''], {relativeTo:this.route})
  }

  booking!:BookingComponent;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
    private closeSub!: Subscription;

  openBooking(booking:BookingComponent){
    console.log('open')
    const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        const compRef = hostViewContainerRef.createComponent(BookingComponent);
        compRef.instance.booking = booking;
        this.closeSub=compRef.instance.close.subscribe(()=>{
          this.closeSub.unsubscribe();
          hostViewContainerRef.clear();
        });
  }
  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
  }


}
