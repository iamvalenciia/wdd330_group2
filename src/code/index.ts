/*************************************/
/* Auto-generated file.              */
/* Do not modify it.                 */
/* You may remove it.                */
/* You may commit it.                */
/* You may push it.                  */
/* Remove it if module name changed. */
/* eslint:disable                    */
/*************************************/

import { Main } from "./Main";
import { IModuleManifest } from "sabre-ngv-core/modules/IModuleManifest";
import { context } from "./Context";

/**
 *  Autogenerated class representing module in runtime.
 **/
export default class Module_outside extends Main {
  constructor(manifest: IModuleManifest) {
    super(manifest);
    context.setModule(this);
  }
}
