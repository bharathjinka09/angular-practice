import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
      {{ 22 + 2 }}
    </h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    {{ name.length }}
    {{ name.toUpperCase() }}
    {{ greetUser() }}

    {{ siteUrl }}

    <input type="text" [id]="myId" value="bharath" />

    <input
      [disabled]="isDisabled"
      type="text"
      id="{{ myId }}"
      value="bharath"
    />

    <input
      bind-disabled="isDisabled"
      type="text"
      id="{{ myId }}"
      value="bharath"
    />

    <h1 [class]="successClass">Ranga Bharath</h1>

    <h1 class="text-special" [class]="successClass">Ranga Bharath</h1>

    <h2 [class.text-danger]="hasError">Error</h2>

    <h2 [ngClass]="messageClasses">Bharath</h2>
    <br />

    <h2 [style.color]="'orange'">Style Binding</h2>

    <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

    <h2 [style.color]="highlightColor">Style Binding 2</h2>

    <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

    <h3><u>Event Binding Example</u></h3>

    <button (click)="onClick()">Greet</button>

    {{greeting}}
  `,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'Bharath!';

  public myId = 'testId';

  public isDisabled = false;

  public siteUrl = window.location.href;

  public successClass = 'text-success';

  public hasError = true;

  public isSpecial = true;

  public highlightColor = 'orange';

  public greeting = ""

  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }

  onClick(){
    console.log('Welcome!')
    this.greeting = "Welcome ram!"

  }
}
