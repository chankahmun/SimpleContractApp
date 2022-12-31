export class Utils{
    constructor(){}

    static isStringEmpty(value){
        if(value == '' || typeof value == 'undefined') return true;
        return false;
    }

    static currentDateTime(){

        let currentDateTime = '';

        try{

            let date = new Date();
            let day = date.getUTCDate();
            let month = date.getUTCMonth();
            let year = date.getUTCFullYear();
            let hours = date.getUTCHours();
            let min = date.getUTCMinutes();
            let sec = date.getUTCSeconds();
            currentDateTime = year + '/' + month + '/' + day + ' ' + hours + ':' + min + ':' + sec
            
        } catch(e){

        }

        return currentDateTime;


    }
}