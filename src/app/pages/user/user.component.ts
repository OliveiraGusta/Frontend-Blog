import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-user',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
