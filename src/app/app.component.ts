import { Component, OnInit, OnDestroy } from '@angular/core';
import { RandomFactService } from './services/random-fact-service';
import {interval, Subscription} from 'rxjs'

type RequestedFact = {contents: {quotes: {quote: string}[]}}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private obSubscription!: Subscription

  constructor(private randomFactService: RandomFactService ){}

  title = 'Notes - Angular App';
  notes: string[] = ["abc", "def"];
  listOfNumbers: number[] = [];
  switchValue = 5

  created_text!: string

  createNote() {
    console.log('this.notes: ', this.notes)
    this.notes.push(this.created_text)
  }

  deleteNote(note:string) {
    console.log('this.notes: ', this.notes)
    console.log('note: ', note)
    this.notes = this.notes.filter((one_note) => one_note !== note)
  }

  fact!: string

  // getRandomFact() {
  //   this.randomFactService.getFact().subscribe((fact) => this.fact = fact)
  // }

 

  ngOnInit() {
    this.randomFactService.getFact().subscribe((requestedFact: RequestedFact) => {console.log(requestedFact.contents.quotes[0].quote); this.fact = requestedFact.contents.quotes[0].quote});

    this.listOfNumbers=[3,4,6,8,9,12, 15]

    // save Subscription to variable

    this.obSubscription  = interval(1000).subscribe((count)=> {
      console.log(count)
    })
  }

  // unsubscribe

  ngOnDestroy() {
    this.obSubscription.unsubscribe()
  }



}
