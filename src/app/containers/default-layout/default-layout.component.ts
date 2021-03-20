import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from '../../util/localstorage';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;

  public LocalStorage = new LocalStorageUtils();

  constructor(private router: Router){}
  
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout() {
    this.LocalStorage.limparDadosLocaisUsuario();
    this.router.navigate(['/login']);
  }
  
}
