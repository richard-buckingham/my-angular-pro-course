import { Input, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[tooltip]',
    exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {
    // create the div for this directive in code
    tooltipElement = document.createElement('div');
    visible = false;

    @Input()
    set tooltip(value) {
        console.log('in set tooltip. value = ', value);
        this.tooltipElement.textContent = value;
    }

    hide() {
        console.log('hiding the tooltip');
       // this.tooltipElement.classList.remove('tooltip--active');
        console.log('this.tooltipElement = ', this.tooltipElement);
    }

    show() {
        console.log('showing the tooltip');
        this.tooltipElement.classList.add('tooltip--active');
        console.log('this.tooltipElement = ', this.tooltipElement);
    }

    constructor(
        private element: ElementRef
    ) { }

    ngOnInit() {
        this.tooltipElement.className = 'tooltip';
        console.log('this.tooltipElement = ', this.tooltipElement);
        this.element.nativeElement.appendChild(this.tooltipElement);
        this.element.nativeElement.classList.add('tooltip-container');
    }
}
