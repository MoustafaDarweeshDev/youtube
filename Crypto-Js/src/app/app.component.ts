import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {

    //text
    //encrypt
    const key='secretKey';
    const plainText = "text i want to decrypt";
    const encryptedText = CryptoJS.AES.encrypt( plainText , key).toString();

    console.log('encrypted code:' , encryptedText);
    //decrypt
    const bytes = CryptoJS.AES.decrypt(encryptedText , key);
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);

    console.log( 'decrypted code:' , decryptedText);
  }
  title = 'Crypto-Js';
}
