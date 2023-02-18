let eventos =document.getElementById('tpe');
let packcasamento = document.getElementById('packcasamento'); //valor do pacote de casamento
let Numero_Fotos = document.getElementById('NF'); // valor do numero de fotos
let packnoivados =document.getElementById('packnoivados'); // valor do pacote de noivado
let DataEvento = document. getElementById('dataevento'); // valor da data do evento
let HoraEvento = document.getElementById('horaevento'); //valor da horavdo evento
let locaEvento = document.getElementById('local'); // valor do local do evento
let nomecompleto = document.getElementById('nomecompleto');// valor do nome completo
let bilhete = document.getElementById('Numbilhete');// valor para BI
let email = document.getElementById('email');// valor para email
let telemovel = document.getElementById('telemovel'); //valor para número de telemóvel
let whatsapp = document.getElementById('whatsap');// valor do número do Whatsapp
let btnmarcar = document.getElementById('marcarbtn');      // valor do botão marcar

function marcar(){
            //FUNÇÃO PARA PEGAR VALORES DIGIOTADOS DOS INPUTS
            let NomeInput = nomecompleto.value;
            let bilheteInput = bilhete.value;
            let emailInput = email.value;
            let telemovelInput = telemovel.value;
            let whatsappInput = whatsapp.value;
            
            if((NomeInput !=="" )&& (NomeInput!==null) && (NomeInput!==undefined))
              {
                 alert("Nome preenchido");
              }
              else if((bilheteInput !=="" ) && (bilheteInput!==null) && (bilheteInput!==undefined))
                   {
                  alert("bilhete preenchido");
                   }
                   else if((emailInput !=="" )&& (emailInput!==null) && (emailInput!==undefined))
                     {
                  alert("email preenchido");
                    } 
                       else if((telemovelInput !=="" )&& (telemovelInput!==null) && (telemovelInput!==undefined))
                         {
                  alert("telemovel preenchido");
                          }
                              else if((whatsappInput!=="" )&& (whatsappInput!==null) && (whatsappInput!==undefined))
                               {
                  alert("whatsap preenchido");
                               }
                               else
                               {
                                  alert("Campo vázio, preencha corretamente");
                               }
}

function carregar(){
    
      document.getElementById("packcasamento").style.visibility='hidden';
      document.getElementById("packnoivados").style.visibility='hidden'; 
      document.getElementById("numFotos").style.visibility='hidden';
      document.getElementById("numFotos").style.marginTop='-150px'; 
     
};

let tipo_evento = document.getElementById("tpe");

function evento(){

      let escolha = tipo_evento.value;
     if( (escolha=="CASAMENTO"))
      {
            document.getElementById("packcasamento").style.visibility='visible';
            document.getElementById("packnoivados").style.visibility='hidden';
            document.getElementById("numFotos").style.visibility='hidden';
            document.getElementById("packnoivados").style.marginTop='-50px'; 
            document.getElementById("numFotos").style.marginTop='-60px';       
            document.getElementById("tpe").innerHTML = "CASAMENTO";                                         

      }
      else if((escolha=="NOIVADO")){
            document.getElementById("packnoivados").style.visibility='visible';
            document.getElementById("packnoivados").style.marginTop='-60px';
            document.getElementById("packcasamento").style.visibility='hidden';
            document.getElementById("numFotos").style.visibility='hidden';
            document.getElementById("numFotos").style.marginTop='-50px';   


                                                  
      }
      else{
            document.getElementById("numFotos").style.visibility='visible';
            document.getElementById("numFotos").style.marginTop='-70px';  
            document.getElementById("packcasamento").style.visibility='hidden';
            document.getElementById("packnoivados").style.visibility='hidden';                  
            
      }

};
function calcular(){
      document.getElementById("NF").style.width='60px';
      let numeroFotos = document.getElementById("NF");
      let valorApagar = (numeroFotos.value*950)
      document.getElementById("ValorTotal").innerText = valorApagar;
      document.getElementById("ValorTotal").style.fontSize='20px';
      document.getElementById("numFotos").style.marginTop='-110px';     

}
function pacote(){

      document.getElementById("tpe").innerHTML = "CASAMENTO";  
}