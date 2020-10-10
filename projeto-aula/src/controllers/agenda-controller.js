const agendaModels = require("../models/agenda-models");
const helper = require("../helpers/helper");

const obterAgenda = (requisicao, resposta) => {
  resposta.status(200).json(agendaModels);
};

const obterIdContato = (requisicao, resposta) => {
  const { id } = requisicao.params;
  const contato = agendaModels.find((contato) => contato.id == id);

  resposta.json(contato);
};

const criarContato = (requisicao, resposta) => {
  let { nome, telefone, email, outrosTelefones } = requisicao.body;

  let novoContato = {
    //utilizando o helper
    id: helper.obterNovoValor(agendaModels),
    nome: nome,
    telefone: telefone,
    email: email,
    outrosTelefones: outrosTelefones,
  };

  agendaModels.push(novoContato);

  resposta.status(201).json(novoContato);
};

const deletarContato = (requisicao, resposta) => {
  const { id } = requisicao.params;

  agendaModels.filter((contato) => contato.id != id);

  resposta.json({ mensagem: "Contato deletado com sucesso!" });
};

module.exports = {
  obterAgenda,
  obterIdContato,
  criarContato,
  deletarContato,
};
