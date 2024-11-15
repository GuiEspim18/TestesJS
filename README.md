a front-end test library

<ul style="list-style: none;">
    <li>✅text - Entrada de texto padrão (uma linha)</li>
    <li>✅password - Campo para senhas (oculta os caracteres)</li>
    <li>✅email - Para endereços de e-mail</li>
    <li>✅number - Para entrada numérica</li>
    <li>✅tel - Para números de telefone</li>
    <li>✅url - Para URLs</li>
    <li>✅search - Para campos de busca</li>
    <li>✅date - Para selecionar uma data</li>
    <li>✅time - Para selecionar um horário</li>
    <li>✅datetime-local - Para selecionar data e hora</li>
    <li>✅month - Para selecionar um mês e ano</li>
    <li>✅week - Para selecionar uma semana e ano</li>
    <li>✅color - Para selecionar uma cor</li>
    <li>✅range - Para selecionar um valor dentro de um intervalo (slider)</li>
    <li>✅file - Para upload de arquivos</li>
    <li>✅checkbox - Caixa de seleção</li>
    <li>✅radio - Botão de opção</li>
    <li>✅submit - Botão para enviar um formulário</li>
    <li>✅reset - Botão para resetar um formulário</li>
    <li>✅button - Botão genérico</li>
    <li>✅image - Botão de envio com uma imagem</li>
</ul>

Atributos exclusivos da tag <form>
action

Especifica a URL para a qual os dados do formulário devem ser enviados.
Exemplo: <form action="/processar-dados">.
method

Define o método HTTP a ser usado ao enviar os dados do formulário (GET ou POST, por exemplo).
Exemplo: <form method="POST">.
enctype

Especifica o tipo de codificação dos dados ao enviar o formulário.
Valores comuns:
application/x-www-form-urlencoded (padrão)
multipart/form-data (para upload de arquivos)
text/plain
Exemplo: <form enctype="multipart/form-data">.
target

Define o contexto de navegação onde o resultado da submissão do formulário será exibido.
Valores comuns:
_self (padrão: mesma janela/aba)
_blank (nova aba ou janela)
_parent
_top
Exemplo: <form target="_blank">.
novalidate

Indica que o navegador não deve validar os dados do formulário antes de enviá-los.
Exemplo: <form novalidate>.
name

Dá um nome ao formulário, permitindo referências em JavaScript.
Exemplo: <form name="meuFormulario">.
autocomplete

Controla se o navegador deve preencher automaticamente os campos do formulário.
Valores: on (padrão) ou off.
Exemplo: <form autocomplete="off">.
rel

Especifica a relação entre o documento atual e o destino do formulário quando method="GET".
Exemplo: <form rel="noopener">