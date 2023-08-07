
export class Information{
    public name: string;
    public path: string;
    public title: string;
    public description: string;
    public more?:string;
    public delivery?:string;

    constructor(name:string, path:string, title:string, description:string ){
        this.name = name;
        this.path = path;
        this.title = title;
        this.description = description;

    }
}