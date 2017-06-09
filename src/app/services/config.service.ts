import { Injectable } from '@angular/core'; 

@Injectable() 
export class ConfigService { 
constructor() { } 

public get getAdalConfig(): any { 
return { 
tenant: '1288625f-df33-4fd3-9771-ee9e7163b659', 
clientId: '52c4bb9f-f168-42d3-ac64-0c36c3bccc11', 
redirectUri: window.location.origin + '/', 
postLogoutRedirectUri: window.location.origin + '/' 
        }; 
    } 
} 