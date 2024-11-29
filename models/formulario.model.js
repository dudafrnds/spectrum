getFormulario = (id_form) => {
    formularios = [
      {id_form:'1',
       id_aluno: "1",
       perguntas:[ {tipop:'RU',// RU - resposta unica
                        cod_simp_per: "nomecom",
                        descricao:"Escreva seu nome completo:", 
                        P_nome:"nome",
                        P_id:"nome",
                        P_placeholder:"seu nome",
                        resposta:"",
                    }, 
                    {tipop:'ME',// ME - Multipla escolha
                        cod_simp_per: "incoluz",
                        descricao:"Você se incomoda com a luz fluorescente da sala de aula?", 
                        opcoes:['sim','nao'],
                        resposta:"",
                        outro: false,
                    },
                    {tipop:'ME',// ME - Multipla escolha
                        cod_simp_per: "tipoluz",
                        outro: true,
                        descricao:"Se sim, qual tipo de iluminação seria mais confortável para você?", 
                        opcoes:['Luz natural','Luz suave (ex: lâmpadas de luz quente)','Lâmpadas de LED','Filtros de luz para lâmpadas fluorescentes'],
                        resposta:""
                    }
                ],
      },
    ];
  
    return formularios;
  };
  
  module.exports = { getFormulario };