import { HelperFacade } from "./helpers/helperFacade";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./connectors/iconnector";
export * from "./models/promise";
export * from "./models/basePage";

import iocHelper from "./ioc/iocHelper";
import appHelper from "./helpers/appHelper";
import resourceHelper from "./helpers/resourceHelper";
import routerHelper from "./helpers/routerHelper";

let helperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
helperFacade.resourceHelper = resourceHelper;
helperFacade.routerHelper = routerHelper;
export default helperFacade;