import { Component, HostListener } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;
  isAvatarMenuOpen = false;

  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const avatarContainer = (event.target as HTMLElement).closest('.avatar-container');
    if (!avatarContainer && this.isAvatarMenuOpen) {
      this.isAvatarMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
      navContainer.classList.toggle('active');
    }
  }

  toggleAvatarMenu(event: MouseEvent) {
    event.stopPropagation();
    this.isAvatarMenuOpen = !this.isAvatarMenuOpen;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
