// COLETANDO DADOS DO FORM

const Formulario = () => {
    let form = {
        nomeCompleto: document.getElementById('nomeCompleto').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        estCivil: document.getElementById('estCivil').value,
        genero: document.getElementById('genero').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        profissao: document.getElementById('profissao').value,
        identidade: document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        veiculo: document.getElementById('veiculo').value,
        habilitacao: document.getElementById('habilitacao').value,
    };
    console.log(form);
    return form
}


const criarCandidato = async (candidato) => {

    const requisicao = await fetch('http://localhost:1235/register', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())
    });
    if (requisicao.status === 200) {
        alert('Cadastro Concluído!');
    }

    if (requisicao.status === 500) {
        alert('Seu CPF ou E-mail já foi cadastrado. Tente novamente.');
    } 
}


// AUTO COMPLETAR CEP

function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
        }

        function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
        }

        function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
        };


    
    // ANIMAÇÃO ÍCONE FORMULÁRIO

    function displayAbout() {
        var plus = document.getElementById('animation');
        plus.classList.toggle('rotate');
        var plus = document.getElementById('formulario');
        plus.classList.toggle('active');
    }


