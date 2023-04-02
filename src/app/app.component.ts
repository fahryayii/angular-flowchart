import { Component } from '@angular/core';
import { FlowShapeModel, MarginModel, NodeModel, OrthogonalSegment, OrthogonalSegmentModel } from '@syncfusion/ej2-angular-diagrams/src';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-flowchart';
  public annotationsMargin: MarginModel = {
    left: 15, right:0, bottom:0, top:0
  }
  public segment1: OrthogonalSegmentModel = [{
    direction:"Right", length: 30},
    {direction:"Bottom", length: 0}
  ];
  public segment2: OrthogonalSegmentModel = [
    { length: 0, direction:"Left"},
    { length: 100, direction:"Top"}
  ];
  public terminatorShape: FlowShapeModel = {type:'Flow', shape:'Terminator'};
  public processShape: FlowShapeModel = {type: 'Flow', shape:'Process'};
  public decisionShape: FlowShapeModel = {type:'Flow', shape:'Decision'};
  public preDefinedShape: FlowShapeModel = {type:'Flow', shape:'PreDefinedProcess'};
  public defaultNodeValues(defaultNodeValues : NodeModel) : NodeModel{
    defaultNodeValues.height = 50;
    defaultNodeValues.width = 200;
    return defaultNodeValues;

  }
}
