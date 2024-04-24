import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PipeExampleComponent {

  nameLowerCase:string = "dogukan koc";
  nameUpperCase:string = "DOGUKAN KOC";
  stringTiteCase:string = "her kelimenin ilk harfi normalde küçük yazılmıştı";
  price:number = 1250;
  discount:number = .25;
  object : object = {
    firstName:'Dogukan',
    lastName:'Koc',
    mail:'dogukan.koc@mail.com',
    age: 26
  }
stringSlice:string = 'Angular Framework';
arraySlice:Array<number> = [1,2,3,4,5,6];
birthDate:string = '06.06.1997';
name$ = new BehaviorSubject<string>('Lorem');
 }
