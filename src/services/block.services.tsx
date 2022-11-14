
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../enviourment/environment';
import { BlockSummary } from '../definitions/blockSummary-definitions';

@Injectable({
  providedIn: 'root'
})

export class BlockServices {
  private cache = null;

  constructor(
    private http: HttpClient) {}

    public getLatestAllCoins(){
      const url = `${environment.apiBase}/Block/BTC`;
      return this.http.get<BlockSummary[]>(`${url}`)
    }
}