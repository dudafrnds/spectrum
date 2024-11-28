getAlunos = () => {
    alunos = [
      { id: "1", nome: "João Silva", data_cadastro: "2024-01-15" },
      { id: "2", nome: "Ana Costa", data_cadastro: "2024-02-10" },
      { id: "3", nome: "Lucas Almeida", data_cadastro: "2024-03-05" },
      { id: "4", nome: "Maria Oliveira", data_cadastro: "2024-04-20" },
    ];
  
    return alunos;
  };
  
  module.exports = { getAlunos };