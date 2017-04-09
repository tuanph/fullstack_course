import { HelperFacade } from "./helpers/helperFacade";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./connectors/iconnector";
export * from "./models/promise";
export * from "./models/basePage";

import iocHelper from "./ioc/iocHelper";
import appHelper from "./helpers/appHelper";
import resourceHelper from "./helpers/resourceHelper";

let helperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
helperFacade.resourceHelper = resourceHelper;
export default helperFacade;