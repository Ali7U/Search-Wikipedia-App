import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  pages = [];
  constructor(private wikipedia: WikipediaService) {}

  public onTerm(term: string) {
    this.wikipedia.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log(this.pages);
      
    });
  }
}
