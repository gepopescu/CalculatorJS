Calculator =  function(){//constructor in care sa definim metodele
    this.add = function(a,b){
        return a+b;
    }

    this.dif = function(a,b){
        return a-b;
    }

    this.mul = function(a,b){
        return a*b;
    }

    this.div = function(a,b){
        return a/b;
    }


}

module.exports = Calculator;