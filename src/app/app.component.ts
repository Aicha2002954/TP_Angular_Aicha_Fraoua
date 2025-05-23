import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'
import { RouterModule } from '@angular/router'
import { CatalogComponentComponent } from "../catalog-component/catalog-component.component"; 

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Tp4';
}
