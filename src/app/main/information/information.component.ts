import { Component } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  more:boolean = false;
  delivery:boolean=false;
  information=[
    { name:'о ресторане', 
      path:'', 
      title:'Food Exxe Relo',
      description: 
        `Sed vel ornare ut rhoncus, ac ut nibh. Amet at sit et nibh. In lectus phasellus non ornare eget velit. Facilisi urna, 
        tristique dui, rhoncus, dolor. Tincidunt enim gravida dignissim leo pulvinar sit volutpat nulla vestibulum.
        Morbi pellentesque enim massa laoreet vel id. Lectus ac, facilisis neque turpis. Morbi massa enim nullam sem vehicula. 
        Amet quis pellentesque enim porttitor lectus interdum. Nisi, faucibus pharetra at porttitor. Fringilla luctus pretium 
        in viverra. In adipiscing tempor amet malesuada ullamcorper ut sagittis. Dui, scelerisque vulputate risus massa dictum. 
        Cras at quis in eu, faucibus feugiat vel. At.`
    },
    {
      name:'меню',
      path: '', 
      title:'Меню',
      description:  `At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et eget erat. Nascetur nunc neque, varius massa 
        aliquam interdum turpis massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat fermentum pellentesque ac 
        at. Vitae venenatis faucibus urna mi eget vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum dolor, vitae 
        morbi.
        Nunc cras cras aliquet blandit faucibus massa sagittis semper. `
    }, 
      {
        name:'доставка',
        path: '', 
        title:'Служба доставки',
        description:`Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis, non, a. In risus, venenatis enim vitae mauris 
        aliquet orci. Consectetur nibh interdum nullam ut lobortis eu etiam sem. Et in vitae pellentesque non, lectus orci 
        natoque faucibus suspendisse. Semper aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras placerat 
        sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis eleifend in fringilla. Egestas cursus imperdiet cursus dui, 
        nulla id massa. Hendrerit nam enim semper porttitor imperdiet diam semper. Nulla sit etiam cras morbi enim elementum 
        euismod sapien.`,
        more: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        delivery: 'Пн-Пт: 9:00 - 22:00 Сб-Вс: 10:00 - 23:00',
      }
    ]
    onMore(){
      return this.more = !this.more;
    }
    onDelivery(){
      this.delivery = !this.delivery;
    }
}
