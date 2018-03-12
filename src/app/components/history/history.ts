
export class History {
  public id:Number;
  public start:Number;
  public stop:Number;
  public description:String;
  public title:String;
  public descriptionRO:String;
  public titleRO:String;


  constructor(start: Number, stop: Number, description: String, title: String, descriptionRO: String, titleRO: String) {
    this.start = start;
    this.stop = stop;
    this.description = description;
    this.title = title;
    this.descriptionRO = descriptionRO;
    this.titleRO = titleRO;
  }
}
