document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("enderecoForm");
  const cep = document.getElementById("cep");
  const logradouro = document.getElementById("logradouro");
  const numero = document.getElementById("numero");
  const uf = document.getElementById("uf");
  const complemento = document.getElementById("complemento");

 
  cep.addEventListener("input", () => {
    let valor = cep.value.replace(/\D/g, ""); 
    if (valor.length > 5) {
      valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    }
    cep.value = valor;
  });

 
  uf.addEventListener("input", () => {
    uf.value = uf.value.toUpperCase();
  });

  
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 

  
    const cepRegex = /^\d{5}-\d{3}$/;
    const ufRegex = /^[A-Z]{2}$/;
    const numeroRegex = /^\d+$/;
    const complementoRegex = /^[A-Za-z\s]*$/; 

    
    if (!cepRegex.test(cep.value)) {
      alert("CEP inválido! Use o formato 00000-000.");
      cep.focus();
      return;
    }

   
    const logradouroValor = logradouro.value.trim();
    const logradouroRegex = /[A-Za-z]/; // deve conter pelo menos uma letra
    if (logradouroValor.length < 5 || !logradouroRegex.test(logradouroValor)) {
      alert("O logradouro deve ter pelo menos 5 caracteres e conter letras.");
      logradouro.focus();
      return;
    }

    
    if (!numeroRegex.test(numero.value.trim())) {
      alert("O campo Número deve conter apenas dígitos.");
      numero.focus();
      return;
    }

    
    if (!ufRegex.test(uf.value)) {
      alert("UF inválida! Digite apenas 2 letras maiúsculas (ex: SP).");
      uf.focus();
      return;
    }

  
    const complementoValor = complemento.value.trim();
    if (complementoValor && !complementoRegex.test(complementoValor)) {
      alert("O complemento deve conter apenas letras");
      complemento.focus();
      return;
    }

   
    alert("Endereço cadastrado com sucesso!");
    form.reset();
  });
});
