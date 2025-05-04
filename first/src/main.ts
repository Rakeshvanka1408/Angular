import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


/*
    A Component is a combination of HTML, CSS, Typescript
component Name.component.html=> html file
component Nmae.component.css=> css file
component Name.coomponent.ts=>TS file

product.component.html =>HTML
product.component.ts=> TS file
product.component.css=> css file
*/
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
