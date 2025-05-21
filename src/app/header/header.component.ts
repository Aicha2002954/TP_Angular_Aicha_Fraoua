import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-header',
standalone: true, 
  imports: [CommonModule, RouterModule, FooterComponent], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

}
