export default class Telefone {

private teclas: string[];
    
    constructor(){
        this.teclas = [
            "0",
            "1",
            "ABC",
            "DEF",
            "GHI",
            "JKL",
            "MNO",
            "PQRS",
            "TUV",
            "WXYZ",
        ];
    }
    
    public calcular(caracter:string):string{
        var retorno = this.teclas.indexOf(caracter);
        
        if (retorno >= 0){            
             return this.teclas.indexOf(caracter).toString();            
        }  else{
            return caracter;
        } 
       
    }
    
}