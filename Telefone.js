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
        var retorno = this.teclas.indexOf(caracter);
        if (retorno >= 0) {
            return this.teclas.indexOf(caracter).toString();
        }
        else {
            return caracter;
        }
    };
    return Telefone;
}());
export default Telefone;
