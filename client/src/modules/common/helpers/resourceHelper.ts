import { IResourceService } from "../services/iResourceService";
import { IocNames } from "../ioc/enum";
let resourceHelper = {
    loadResource: loadResource
}
export default resourceHelper;
function loadResource(name: string) {
    let resourceService: IResourceService = window.ioc.resolve(IocNames.IResourceService);
    return resourceService.load(name);
}