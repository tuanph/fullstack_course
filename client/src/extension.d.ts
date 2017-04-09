declare interface Window {
    ioc: any
}

declare interface Array<T> {
    firstOrDefault(callback: any): any
}
interface StringConstructor {
    format(...param: Array<any>): string;
    toPascal(str: string): string;
}