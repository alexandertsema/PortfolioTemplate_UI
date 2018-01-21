import { HammerGestureConfig } from '@angular/platform-browser';
import { TouchInput } from 'hammerjs'

export class CustomHammerConfig extends HammerGestureConfig  {
    public buildHammer(element: HTMLElement): any {
        return new (window as any).Hammer(element,
            {
                touchAction: 'pan-y',
                inputClass: TouchInput,
                cssProps: { userSelect: 'auto'}
            });
    }
}