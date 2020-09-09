import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <div class="container">
      <h2>
        Welcome {{ name }}
        {{ 22 + 2 }}
      </h2>
      <h2>{{ 'Welcome ' + name }}</h2>
      {{ name.length }}
      {{ name.toUpperCase() }}
      {{ greetUser() }}

      {{ siteUrl }}
      <br />
      <br />

      <input class="form-control" type="text" [id]="myId" value="bharath" />
      <br />
      <input
        class="form-control"
        [disabled]="isDisabled"
        type="text"
        id="{{ myId }}"
        value="bharath"
      />
      <br />

      <input
        class="form-control"
        bind-disabled="isDisabled"
        type="text"
        id="{{ myId }}"
        value="bharath"
      />
      <br />

      <h1 [class]="successClass">Ranga Bharath</h1>

      <h1 class="text-special" [class]="successClass">Ranga Bharath</h1>

      <h2 [class.text-danger]="hasError">Error</h2>

      <h2 [ngClass]="messageClasses">Bharath</h2>
      <br />

      <h2 [style.color]="'orange'">Style Binding</h2>

      <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>

      <h2 [style.color]="highlightColor">Style Binding 2</h2>

      <h2 [ngStyle]="titleStyles">Style Binding 3</h2>

      <h3 class="text-center">Event Binding Example</h3>

      <button class="btn btn-info" (click)="onClick($event)">Greet</button>
      <br />
      <br />
      <button class="btn btn-info" (click)="greeting = 'Welcome bharath'">
        Greet
      </button>

      {{ greeting }}
      <br />
      <br />
      <input class="form-control" #myInput type="text" />
      <br />

      <button class="btn btn-success" (click)="logMessage(myInput.value)">
        Log
      </button>
      <br />

      <div class="text-center">
        <h2>Two way data binding</h2>
      </div>
      <input [(ngModel)]="place" class="form-control" type="text" />
      {{ place }}

      <h2 *ngIf="displayName; else elseBlock">Bharath If</h2>

      <ng-template #elseBlock>
        <h2>Name is hidden</h2>
      </ng-template>

      <div *ngIf="displayName; then thenBlock; else elseBlock"></div>

      <ng-template #thenBlock>
        <h2>thenblock</h2>
      </ng-template>

      <ng-template #elseBlock>
        <h2>else block</h2>
      </ng-template>

      <div [ngSwitch]="color">
        <div *ngSwitchCase="'red'">You picked red color</div>
        <div *ngSwitchCase="'blue'">You picked blue color</div>
        <div *ngSwitchCase="'green'">You picked green color</div>
        <div *ngSwitchDefault>Pick again!</div>
      </div>
      <br />
      <br />

      <h2>ngFor directive</h2>

      <div *ngFor="let color of colors; index as i">
        <p>{{ i + 1 }} {{ color }}</p>
      </div>

      <h2>First</h2>

      <div *ngFor="let color of colors; first as f">
        <p>{{ f }} {{ color }}</p>
      </div>

      <h2>Last</h2>

      <div *ngFor="let color of colors; last as l">
        <p>{{ l }} {{ color }}</p>
      </div>

      <h2>Odd</h2>

      <div *ngFor="let color of colors; odd as o">
        <p>{{ o }} {{ color }}</p>
      </div>

      <h2>Even</h2>

      <div *ngFor="let color of colors; even as e">
        <p>{{ e }} {{ color }}</p>
      </div>

      <h2>Component Interaction</h2>


      <h2>
      {{"Hello " + firstName }}
      </h2>

      <button class="btn btn-primary" (click)="fireEvent()">Send Event</button>

      <br />
      <br />
      <br />
    </div>


  `,
  styles: [
    `
      .center {
        text-align: center;
      }
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
  // @Input()
  // public parentData;

  @Input('parentData')
  public firstName;

  @Output()
  public childEvent = new EventEmitter();



  public colors = ['red', 'green', 'blue', 'yellow'];
  public color = 'red';

  public displayName = true;
  public name = 'Bharath!';

  public place = '';

  public myId = 'testId';

  public isDisabled = false;

  public siteUrl = window.location.href;

  public successClass = 'text-success';

  public hasError = true;

  public isSpecial = true;

  public highlightColor = 'orange';

  public greeting = '';

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

  onClick(event) {
    console.log(event);
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
  }

  fireEvent(){
    this.childEvent.emit('Hey code')
  }
}
