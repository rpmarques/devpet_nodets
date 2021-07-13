// CRIO UM TIPO, QUE VAI DIZER O QUE A VARIÁVEL PODE ACEITAR
type OpcaoMenu = '' |'cachorro'|'gato'|'peixe'|'todos'

export const criaMenuObjeto = (menuAtivo:OpcaoMenu) =>{
    let objetoRetorno = {
        todos:false,
        cachorro:false,
        gato:false,
        peixe:false
    };

    if (menuAtivo !==''){
        objetoRetorno[menuAtivo] = true;
    }

    return objetoRetorno;
}