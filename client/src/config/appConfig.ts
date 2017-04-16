import { DefaultLayout } from "@app/themes/default";
import {ModulesNames} from "@app/common";
export interface IAppConfig {
    modules: Array<any>;
    rootApiUrl: string;
    layout: any;
    ioc: Array<any>;
}
let appConfig: IAppConfig = {
    modules: [ModulesNames.Inventory],
    rootApiUrl: "http://localhost:7471/api/",
    layout: DefaultLayout,
    ioc: []
};
export default appConfig;