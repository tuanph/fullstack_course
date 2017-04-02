import { HelperFacade } from "./helpers/helperFacade";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./connectors/iconnector";
export * from "./models/promise";

import iocHelper from "./ioc/iocHelper";
import appHelper from "./helpers/appHelper";

let helperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
export default helperFacade;