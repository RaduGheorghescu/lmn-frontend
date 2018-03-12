export class HistoryDto {
  private _id:Number;
  private _start:Number;
  private _stop:Number;
  private _description:String;
  private _title:String;


  constructor(id: Number, start: Number, stop: Number, description: String, title: String) {
    this._id = id;
    this._start = start;
    this._stop = stop;
    this._description = description;
    this._title = title;
  }

  get id(): Number {
    return this._id;
  }

  set id(value: Number) {
    this._id = value;
  }

  get start(): Number {
    return this._start;
  }

  set start(value: Number) {
    this._start = value;
  }

  get stop(): Number {
    return this._stop;
  }

  set stop(value: Number) {
    this._stop = value;
  }

  get description(): String {
    return this._description;
  }

  set description(value: String) {
    this._description = value;
  }

  get title(): String {
    return this._title;
  }

  set title(value: String) {
    this._title = value;
  }
}
