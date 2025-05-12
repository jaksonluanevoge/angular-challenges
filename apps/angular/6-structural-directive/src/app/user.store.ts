import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserStore {
  // BehaviorSubject para armazenar as funções do usuário (roles)
  private userRolesSubject = new BehaviorSubject<string[]>([]);
  user$ = this.userRolesSubject.asObservable(); // Observable para ser acessado em outros componentes

  // Função para adicionar as funções do usuário
  add(roles: string[]): void {
    this.userRolesSubject.next(roles);
  }

  // Função para limpar as funções do usuário
  clear(): void {
    this.userRolesSubject.next([]);
  }
}
