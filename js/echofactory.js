angular.module("starter")

.factory("EchoFactory", function() {
  var retornaMensagem = function(pMensagem) {
    var objAux = new Object();
    
    objAux.texto = pMensagem;
    
    var arrAux = new Array();
    
    arrAux.push(objAux);
    
    var jsonAux = JSON.parse(JSON.stringify(arrAux));
    
    window.plugins.Echo(jsonAux, function(retornoPlugin) {
      alert("Sucesso: " + retornoPlugin);
    }, function(erroPlugin) {
      alert("Erro: " + erroPlugin);
    });
  };
  
  return {
    retornaMensagem: retornaMensagem
  };
});