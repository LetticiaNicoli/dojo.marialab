var Telefone = (function () {
    function Telefone() {
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
    Telefone.prototype.calcular = function (caracter) {
        var retorno = 0;
        for (var index = 0; index < this.teclas.length; index++) {
            var element = this.teclas[index];
            retorno = element.indexOf(caracter);
            if (retorno >= 0)
                return index.toString();
        }
        return caracter;
    };
    return Telefone;
}());
var Tradutor = (function () {
    function Tradutor() {
        this.telefone = new Telefone();
    }
    Tradutor.prototype.ConverteParaTelefone = function (frase) {
        console.log(this.QuebradorDeFrase(frase));
    };
    Tradutor.prototype.QuebradorDeFrase = function (frase) {
        var _this = this;
        var resultado = "";
        frase.split("").forEach(function (letra) {
            resultado += _this.telefone.calcular(letra);
        });
        return resultado;
    };
    return Tradutor;
}());
