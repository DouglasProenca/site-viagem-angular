import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button'
import { Profile } from './profile.model';


@Component({
  selector: 'app-landingpage',
  imports: [ MatCardModule, MatButtonModule, FlexLayoutModule ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(private router: Router){

  }

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){

  }

  isLoggedIn(){
    return !!this.profile;
  }
}