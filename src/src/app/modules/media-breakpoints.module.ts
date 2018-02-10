import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  DEFAULT_BREAKPOINTS,
  BREAKPOINTS,
  BreakPoint,
  validateSuffixes
} from '@angular/flex-layout'


function setBreakpoints() {
  const arr = new Array<BreakPoint>();
  arr.push({
    mediaQuery: '(max-width: 359px)',
    alias: ''
  });
  arr.push({
    mediaQuery: '(min-width: 360px)',
    alias: 'xs'
  });
  arr.push({
    mediaQuery: '(min-width: 600px)',
    alias: 's'
  });
  arr.push({
    mediaQuery: '(min-width: 840px)',
    alias: 'm'
  });
  arr.push({
    mediaQuery: '(min-width: 1024px)',
    alias: 'l'
  });
  arr.push({
    mediaQuery: '(min-width:1280px)',
    alias: 'xl'
  });
  arr.push({
    mediaQuery: '(min-width: 1600px)',
    alias: 'xxl'
  });
  return arr;
}

@NgModule({
  imports : [ FlexLayoutModule ],
  exports : [ FlexLayoutModule ],
  providers: [
    {
      provide: BREAKPOINTS,
      useFactory : function customizeBreakPoints() {
        return validateSuffixes(setBreakpoints());
      }
    }
  ]
})
export class MediaBreakpointsModule { }
