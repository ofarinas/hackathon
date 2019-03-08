import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {PieDiagrammComponent} from 'src/app/components/pie-diagramm/pie-diagramm.component';
import {valueRow} from 'src/app/components/value-row/value-row.component';

@Component({
    selector: 'app-analyse',
    templateUrl: './analyse.component.html',
    styleUrls: ['./analyse.component.scss']
})
export class AnalyseComponent implements OnInit {
    @ViewChild('diagram') diagramRef: ElementRef<PieDiagrammComponent>;

    isOpened = false;
    showDetails = false;
    expenses: valueRow[] = [
        {title: 'food', value: 200, inflation: 0, color: '255,99,132'},
        {title: 'free time', value: 150, inflation: 0, color: '54, 162, 235'},
        {title: 'appartment', value: 500, inflation: 0, color: '255, 206, 86'},
        {title: 'hobbies', value: 185, inflation: 0, color: '75, 192, 192'}
    ];

    // 'rgba(255,99,132,1)',
    // 'rgba(54, 162, 235, 1)',
    // 'rgba(255, 206, 86, 1)',
    // 'rgba(75, 192, 192, 1)',
    // 'rgba(153, 102, 255, 1)',
    // 'rgba(255, 159, 64, 1)'

    constructor() {
    }

    // hooks
    ngOnInit() {
    }

    // handler
    toggleDetails() {
        this.isOpened = !this.isOpened;

        if (this.isOpened) {
            setTimeout(() => {
                this.showDetails = this.isOpened;
            }, 500);
        } else {
            this.showDetails = this.isOpened;
        }
    }

    onChanged() {
        this.diagramRef['draw']();
    }

    // computed
    get expensesTotal() {
        let sum = 0;
        this.expenses.forEach(x => (sum += x.value));
        return sum;
    }
}
