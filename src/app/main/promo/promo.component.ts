import { Component, ViewChild } from '@angular/core';
import { BookingComponent } from 'src/app/booking/booking.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder/placeholder.directive';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent {
  booking!:BookingComponent;
  @ViewChild(PlaceholderDirective, {static:false}) alertHost!: PlaceholderDirective;
    private closeSub!: Subscription;

  openMenu(booking:BookingComponent){
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
