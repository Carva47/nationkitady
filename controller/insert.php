
 
<?php
session_start(); //Iniciar a sessao

include('db.php');

//Limpar o buffer de saida
ob_start();

 //Receber os dados do formulario
$dados = filter_input_array(INPUT_POST, FILTER_DEFAULT);

if(!empty($dados['CadCliente'])){
  $query_cliente = "INSERT INTO cliente 
              (nome, bilhete, email, telemovel, whatsap) 
              VALUES
              (:nome, :bilhete, :email,  :telemovel, :whatsap)";
  $cad_cliente = $conn->prepare($query_cliente);
  $cad_cliente->bindParam(':nome', $dados['nome'], PDO::PARAM_STR);
  $cad_cliente->bindParam(':bilhete', $dados['bilhete'], PDO::PARAM_STR);
  $cad_cliente->bindParam(':email', $dados['email'], PDO::PARAM_STR);
  $cad_cliente->bindParam(':telemovel', $dados['telemovel'], PDO::PARAM_STR);
  $cad_cliente->bindParam(':whatsap', $dados['whatsap'], PDO::PARAM_STR);
  $cad_cliente->execute();

  $_SESSION['msg'] = "<p style='color: green; text-align:center; font-size:22px;'>Produto Cadastrado com sucesso</p> ";
  //Redirecionar o usuario
    header("Location: ../view/formMarcacao.php");
  }
    else{
    //Criar a variavel global para salvar a mensagem de erro
    $_SESSION['msg'] = "<p style='color: #f00;'> Usuário não cadastrado com sucesso!</p>";
  
    //Redirecionar o usuario
    header("Location: ../visualizar.php");
  }