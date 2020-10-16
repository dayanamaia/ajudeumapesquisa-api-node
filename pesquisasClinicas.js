const pesquisas = [
    {
        id: 1,
        nome: "Tratamento de forma grave da COVID-19 com Angiotensina-(1-7)",
        descricao: "Ensaio clínico randomizado fase I/II para uso de angiotensina-(1-7) no tratamento de infecções graves por Sars-CoV-2",
        dataInicio: null,
        dataTermino: null,
        protocolo: "A3333-1255-100983",
        idadeMinina: 18,
        idadeMaxima: 81,
        totalAmostra: 100,
        linkFormCadastro: "linkFormCadastro teste",
        criteriosAceite: "Idade maior que 17 e menor ou igual a 81 anos; Admissão em Unidade de Terapia Intensiva com critérios de pneumonia grave (sinais clínicos de pneumonia + um dos seguintes critérios: frequência respiratória maior que 30 irpm; sinais de esforço respiratório, SatO2 menor que 90% em ar ambiente); COVID-19 confirmado ou altamente suspeito (contato positivo ou imagem sugestiva)",
        criteriosExclusao: "Pacientes com diagnóstico de câncer (em qualquer estágio); Instabilidade hemodinâmica (necessidade de vasopressores);Mulheres grávidas; Pacientes imunocomprometidos; Cuidados Paliativos Exclusivos ; Inclusão em qualquer outro estudo intervencionista; Insuficiência cardíaca como causa predominante de insuficiência respiratória aguda; Cirrose hepática descompensada; HIV +; Diálise; Oxigenoterapia domiciliar/ a longo prazo; Fibrose pulmonar idiopática",
        etapasPesquisa: "Inicialmente, 30 pacientes apresentando quadro grave de Covid-19 serão tratados com administração endovenosa de angiotensina-(1-7) por até 7 dias para avaliar a segurança desse tratamento (Fase I).;Caso essa etapa forneça dados positivos, a segunda fase ( Fase 2) será iniciada. Pacientes com forma grave de Covid -19 serão divididos em dois grupos. O grupo experimental (N=50) recebera angiotensin-(1-7) por via venosa por até 7 dias. O segundo grupo (N=50) será tratado com placebo , por igual período. Os pacientes serão acompanhados por até 28 dias.",
        condicoesSaude: "condicoesSaude; condicoesSaude;",
        telefone: "888888",
        celular: "98888858",
        email: "asdfafd@sdsdsdfsdf.com",
        imgCover: null
    },
    {
        id: 2,
        nome: "Reabilitação pulmonar em individuos acometidos pelo Covid-19",
        descricao: "Avaliação, reabilitação pulmonar e Acompanhamento de indivíduos acometidos pelo Covid-19 pos alta hospitalar – tratamento e acompanhamento clínico",
        dataInicio: null,
        dataTermino: null,
        protocolo: "S1111-1254-3489",
        idadeMinina: 18,
        idadeMaxima: 81,
        totalAmostra: 150,
        linkFormCadastro: "linkFormCadastro teste",
        criteriosAceite: "Idade maior que 17 e menor ou igual a 81 anos; Admissão em Unidade de Terapia Intensiva com critérios de pneumonia grave (sinais clínicos de pneumonia + um dos seguintes critérios: frequência respiratória maior que 30 irpm; sinais de esforço respiratório, SatO2 menor que 90% em ar ambiente); COVID-19 confirmado ou altamente suspeito (contato positivo ou imagem sugestiva)",
        criteriosExclusao: "Pacientes com diagnóstico de câncer (em qualquer estágio); Instabilidade hemodinâmica (necessidade de vasopressores);Mulheres grávidas; Pacientes imunocomprometidos; Cuidados Paliativos Exclusivos ; Inclusão em qualquer outro estudo intervencionista; Insuficiência cardíaca como causa predominante de insuficiência respiratória aguda; Cirrose hepática descompensada; HIV +; Diálise; Oxigenoterapia domiciliar/ a longo prazo; Fibrose pulmonar idiopática",
        etapasPesquisa: "Os pacientes serão submetidos a 3 grupos de intervenção: Grupo treinamento de 6 semanas (GT6): 51 participantes, grupo de treinamento 8 semanas (GT8): 51 participantes e grupo de treinamento teleatendimento (GTT): 50 participantes, todos com frequência de 2 vezes por semana e duração de 1 hora e serão reavaliados ao término da reabilitaçãoA reabilitação dos pacientes pós-COVID-19 deve contemplar",
        condicoesSaude: "condicoesSaude; condicoesSaude;",
        telefone: "888888",
        celular: "98888858",
        email: "asdfafd@sdsdsdfsdf.com",
        imgCover: null
    }
];

const getAll = () => pesquisas;



module.exports.getAll = getAll;