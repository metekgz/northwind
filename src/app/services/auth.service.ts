import { ResponseModel } from './../models/responseModel';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../models/loginModel';
import { Injectable } from '@angular/core';
import { TokenModel } from '../models/tokenModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:44384/api/auth/';

  constructor(private httpClient: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      this.apiUrl + 'login',
      loginModel
    );
  }

  isAuthhenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}
