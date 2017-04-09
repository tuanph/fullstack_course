let urlHelper = {
    resolveModule: resolveModule
}
export default urlHelper;
function resolveModule(name: string) {
    // return "./src/modules/" + name + "/" + name + "Module" + String.toPascal(name) + "Module";
    return String.format("./src/modules/{0}/{0}Module#{1}Module", name, String.toPascal(name));
}