import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgbDropdownModule, NgbCollapseModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isMenuCollapsed = true;
}
