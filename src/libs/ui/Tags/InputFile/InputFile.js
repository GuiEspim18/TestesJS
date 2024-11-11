import Input from "../Input/Input.js";

/* 

Atributos de Estilização:

::-webkit-file-upload-button - Este é um pseudo-elemento que permite estilizar o botão de upload em navegadores WebKit (Chrome, Safari).

::file-selector-button - Um pseudo-elemento mais recente e padronizado para estilizar o botão de seleção de arquivo.

cursor - Pode ser usado para mudar o cursor quando hover sobre o input.

opacity - Frequentemente usado para esconder visualmente o input file original.

Atributos de Comportamento:

accept - Define quais tipos de arquivo são aceitos (ex: accept="image/*" para imagens, accept=".pdf,.doc" para PDFs e documentos Word).

multiple - Permite a seleção de múltiplos arquivos.

capture - Em dispositivos móveis, pode ser usado para capturar diretamente da câmera ou microfone (ex: capture="user" para câmera frontal).

webkitdirectory - Permite a seleção de diretórios inteiros (não padrão, suportado principalmente em Chrome).

files - Uma propriedade que dá acesso à lista de arquivos selecionados.

value - Contém o caminho do arquivo selecionado (por razões de segurança, isso geralmente mostra apenas o nome do arquivo, não o caminho completo).

Comportamentos Específicos:

Não é possível definir um valor padrão por razões de segurança.

O conteúdo do input não pode ser modificado programaticamente.

O evento 'change' é disparado quando um arquivo é selecionado.

Em muitos navegadores, o botão "Escolher arquivo" não pode ser completamente personalizado por razões de segurança.

Alguns navegadores permitem arrastar e soltar arquivos no input.

Métodos Específicos:

*/

class InputFile extends Input {
    constructor() {
        super();
        this.tag.type = "file";
    }

    setAccept(accept) {
        this.tag.accept = accept;
    }

    setMultiple(multiple) {
        this.tag.multiple = multiple;
    }

    setCapture(capture) {
        this.tag.capture = capture;
    }

    setWebkitdirectory(webkitdirectory) {
        this.tag.webkitdirectory = webkitdirectory ;
    }

    getFiles() {
        return this.tag.files;
    }
}

export default InputFile;