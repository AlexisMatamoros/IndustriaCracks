import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//Interfaces
import {CargarCuentas } from 'src/app/interfaces/cargar-cuentas';
//Modelos
import { Account } from 'src/app/models/account/account';
import { Image } from 'src/app/models/general/general-models';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public URL:string;
  public headers: HttpHeaders;
  public accounts: Account[] = [];
  public image: Image[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.URL = 'http://localhost:8000/api/viewset/'; /*LOCAL*/
    /*this.URL = 'http://52.201.212.27/api/viewset/'; PRODUCCION*/
    this.headers = new HttpHeaders().set('Content-Type','application/json');
    
  }

  obtenerCuentas(){
    
    return this.http.get(this.URL+'account/', {headers: this.headers})
               .pipe(
                 map((accounts: Account[]) => this.accounts = accounts)
               );
  }

  obtenerCuentasPaginadas(desde:number){
    return this.http.get<CargarCuentas>(this.URL+'account/?page='+desde, {headers: this.headers})
               .pipe(
                 map( response => {
                    const cuentas = response.results.map(
                      account => new Account(account.id, account.direction, account.email, account.first_name, 
                                            account.last_name, account.phone_number,account.birth_date,
                                            account.phone_number,account.is_admin,account.is_staff,
                                            account.is_superuser, account.user_img, account.cover_img)
                    );
                    return {
                      total: response.count,
                      next: response.next,
                      previous: response.previous,
                      cuentas
              
                    };
                 })
               )
  }

  obtenerImagenes(){
    return this.http.get(this.URL+'image/', {headers: this.headers})
               .pipe(
                 map((image: Image[]) => this.image = image)
               );
  }

  crearCuenta(account: Account): Observable<any>{
    let params = JSON.stringify(account);
    return this.http.post(this.URL+'account/', params, {headers: this.headers})
               .pipe(
                 map( response => {
                   console.log(response);
                   return response;
                 })
               );
  }
}
