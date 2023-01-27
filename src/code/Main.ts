import { Module } from "sabre-ngv-core/modules/Module";

/**
 *  Main class of module, point of entry.
 *
 *  Main.init() method initializes module.
 **/
export class Main extends Module {
  /**
   *   Module initializer run once module is loaded into application.
   */
  init(): void {
    super.init();
    // initialize your module here
  }
}
