<?php

if (isset($_GET['p'])) {
    switch ($_GET['p']) {
        case 'index':
            include 'view/index.html';
            break;
        case 'casamentos':
            include 'view/casamentos.html';
            break;
        case 'noivados':
            include 'view/noivados.html';
            break;
        case 'adultos':
            include 'view/adultos.html';
            break;
        case 'infantilEgestante':
            include 'view/infantilEgestante.html';
            break;
        case 'aniversarios':
            include 'view/aniversarios.html';
            break;
        case 'graduacoes':
            include 'view/graduacoes.html';
            break;        
        case 'formMarcacao':
            include 'view/formMarcacao.html';
            break;
        case 'contatos':
            include 'view/contatos.html';
            break;
        case 'sobrenos':
            include 'view/sobrenos.html';
            break;

        default:
        include 'view/index.html';
            break;
    }
}else {
    include 'view/index.html';
}
