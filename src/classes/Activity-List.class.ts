import{IActivity} from './interfaces/IActivity';
import{error} from '../spec/module-variable.component';
import{Activity} from './Activity.class';
export class ActivityList{
    public activities:IActivity[];
    constructor(){
        this.activities=[];
        this.loadLocalStorage();
    }
    newActivity(...restArgs:IActivity[]){

        restArgs.forEach(ra=>this.activities.push(ra));
        this.saveLocalStorage();
    }
    removeActivity(id:number){
        this.activities=this.activities.filter(a=>a.id!==id);
        this.saveLocalStorage();
    }
    checkCompleted(id:number){
        this.activities.every(a=>{
            if(a.id===id){
                a.completado=!a.completado;
                this.saveLocalStorage();
                return false;
            }
            return true;
        })
    }
    saveLocalStorage(){
        //convertir a json
        localStorage.setItem('activity',JSON.stringify(this.activities))
    }
    loadLocalStorage(){

        this.activities=(localStorage.getItem('activity'))
            //convertir json a string
            ?JSON.parse(localStorage.getItem('activity') || error('No hay actividad'))
            :[];
        this.activities=this.activities.map(a=>Activity.fromJson(a));
    }
}