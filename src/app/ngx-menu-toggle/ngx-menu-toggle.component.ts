import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnInit,
    Output,
    Renderer2
} from '@angular/core';

@Component({
    selector: 'ngx-menu-toggle, [ngxMenuToggle]',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div [style.background]="color" class="one"></div>
        <div [style.background]="color" class="two"></div>
        <div [style.background]="color" class="three"></div>
    `,
    styles: [`
        /deep/ .toggle {
            width: 28px;
            height: 30px;
            margin: 10px auto;
            display: block;
            cursor: pointer;
        }

        /deep/ .toggle div {
            width: 100%;
            height: 5px;
            background: #ccc;
            margin: 4px auto;
            transition: all 0.3s;
            backface-visibility: hidden;
        }

        /deep/ .toggle.on .one {
            transform: rotate(45deg) translate(5px, 5px);
        }

        /deep/ .toggle.on .two {
            opacity: 0;
        }

        /deep/ .toggle.on .three {
            transform: rotate(-45deg) translate(7px, -8px);
        }
    `]
})
export class NgxMenuToggleComponent implements OnInit {

    @Input()
    set model(value: boolean) {
        this._model = value;
        this.modelChange.emit(value);

        if (this._model) {
            this.open();
        } else {
            this.close();
        }
    }

    @Input() color: string;

    @Output() modelChange = new EventEmitter<boolean>();

    @Output() onToggle = new EventEmitter<MouseEvent>();

    private _model = false;

    constructor(private el: ElementRef,
                private renderer: Renderer2) {
    }

    ngOnInit() {
        this.renderer.addClass(this.elN, 'toggle');
    }

    @HostListener('click', ['$event'])
    toggle(event: MouseEvent): void {
        this.model = !this.model;
        this.onToggle.emit(event);
    }

    open(): void {
        this.renderer.addClass(this.elN, 'on');
    }

    close(): void {
        this.renderer.removeClass(this.elN, 'on');
    }

    get model(): boolean {
        return this._model;
    }

    get elN() {
        return this.el.nativeElement;
    }
}
