import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _theme$ = new BehaviorSubject<Theme>('light');

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get theme(): Observable<Theme> {
    return this._theme$.asObservable();
  }

  /**
   * Switch theme from light to dark and vice versa
   */
  switchTheme() {
    if (this._theme$.value === 'light') {
      this.document.body.setAttribute('data-theme', 'dark');
      this._theme$.next('dark');
      return;
    }
    this.document.body.removeAttribute('data-theme');
    this._theme$.next('light');
  }
}
