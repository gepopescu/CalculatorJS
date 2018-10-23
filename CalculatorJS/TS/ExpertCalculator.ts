import {Calculator} from "./Calculator";

export class ExpertCalculator implements Calculator{


    factorial(num){
        var rval=1;
        for (var i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    };

   pow(num, x){
       var p = num;
       for( var i=1; i<x; i++){
           p = p * num;
       }
       return p;

    };

    sqrt(number){
        //var number;
        for (var i = number; i >= 1; i--) {
            if (i * i === number) {
                number = i;
                break;
            }
        }
        return number;

    };

}