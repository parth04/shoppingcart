import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

  getShoppingItems(){
    return this.http.get('http://localhost:3002/api/getItem')
    .pipe(map(res => res));
  }

  addShoppingItems(newItem){
    return this.http.post('http://localhost:3002/api/postItem',newItem)
    .pipe(map(res => res));
  }

  deleteShoppingItem(id){
    return this.http.delete('http://localhost:3002/api/deleteItem/'+id)
    .pipe(map(res => res));
  }

  updateShoppingItem(newItem){
    return this.http.put('http://localhost:3002/api/putItem/'+newItem._id,newItem)
    .pipe(map(res => res));
  }
}
