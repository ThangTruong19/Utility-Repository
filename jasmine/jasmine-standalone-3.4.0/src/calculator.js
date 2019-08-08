class Calculator {
    constructor(){
        this.currentVal = 0
    }
   
    add(num){
        this.currentVal += num;
        return this.currentVal;
    }

    addAny(){
        for(let i=0;i<arguments.length;i++){
            this.currentVal += arguments[i];
        }
        return this.currentVal;
    }
}