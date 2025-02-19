import { inject, Injectable } from "@angular/core";
import { MenuState } from "./menu.state";

@Injectable({
  providedIn: 'root'
})
export class State {
  private readonly _menus = inject(MenuState);

  get menus() {
    return this._menus.store();
  }
}