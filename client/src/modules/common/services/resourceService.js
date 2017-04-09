// export class ResourceService implements IResourceService {
//     public getModule(name: string) {
//         let fullPath: string = urlHelper.resolveResource(name);
//         let iConnector: IConnector = window.ioc.resolve(IocNames.IConnector);
//         return iConnector.get(fullPath);
//     }
//     public load(name: string) {
//         let fullPath: string = urlHelper.resolveResource(name);
//         let iConnector: IConnector = window.ioc.resolve(IocNames.IConnector);
//         return iConnector.get(fullPath).then((resource: any) => {
//             self.locales[name] = resource;
//         });
//     }
// } 
//# sourceMappingURL=resourceService.js.map