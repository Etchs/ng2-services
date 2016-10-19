import {LogService} from "./log.service";
import {Injectable, EventEmitter} from "@angular/core";

@Injectable()
export class DataService {
  pushInput = new EventEmitter<string>();
  private data: string[] = [];

  constructor(private logService: LogService) {}

  addData(input: string) {
    this.data.push(input);
    this.logService.writeToLog('Saved item: ' + input);
  }

  getData() {
    return this.data;
  }

  pushData(input: string) {
    this.pushInput.emit(input);
  }
}
