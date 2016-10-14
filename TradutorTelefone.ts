class Telefone {

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
        
        var retorno = 0;   
        
       for (var index = 0; index < this.teclas.length; index++) {
           var element = this.teclas[index];           
             retorno = element.indexOf(caracter);
             if (retorno >= 0) return index.toString();
            
        }         
             return caracter; 
                       
       } 
       
    }

class Tradutor {
     private telefone:Telefone = new Telefone();
    
     public ConverteParaTelefone(frase:string){
        console.log(this.QuebradorDeFrase(frase));
     }
    
     public QuebradorDeFrase(frase:string):string {
        
        let resultado : string = "";
        
        frase.split("").forEach(letra => {
            resultado +=  this.telefone.calcular(letra);
        });
        
        return resultado;
    }
}