import{IActivity} from './interfaces/IActivity';
export class Activity implements IActivity{
    static fromJson({title,description,id,completado}:IActivity):IActivity{
        const tempActivity=new Activity(title,description);
        tempActivity.title=title;
        tempActivity.description=description;
        tempActivity.id=id;
        tempActivity.completado=completado;
        return tempActivity;
    }
    public title:string;
    public description:string;
    public id:number;
    public completado:boolean;
    constructor(title:string,description:string){
        this.title=title;
        this.description=description;
        this.id=new Date().getTime();
        this.completado=false;
    }
}