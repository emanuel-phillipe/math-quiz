export const subjects = [
  {
    title: "Matemática e Suas Tecnologias",
    questions: [
      {
        question: " ",
        options: ["12", "18", "36", "30", "24"],
        answer: "24",
        descriptions: ["MMC e/ou MDC"],
        latex: false
      },
      {
        question: "Ana Carolina está comprando um presente de aniversário para sua amiga. Ela encontrou uma bolsa que custa R$ 200, mas a loja está oferecendo um desconto de 15%. Quanto Ana economizará com o desconto e qual será o preço final da bolsa?",
        options: ["R$ 30 de desconto, preço final R$ 170", "R$ 20 de desconto, preço final R$ 180", "R$ 25 de desconto, preço final R$ 175", "R$ 35 de desconto, preço final R$ 165", "R$ 40 de desconto, preço final R$ 160"],
        answer: "R$ 30 de desconto, preço final R$ 170",
        descriptions: ["Porcentagem"],
        latex: false
      },
      {
        question: "Marcos tem uma caixa com bolas coloridas para um jogo de sorte. Na caixa, há 3 bolas vermelhas, 2 bolas azuis e 5 bolas verdes. Se Marcos fechar os olhos e pegar uma bola ao acaso, qual é a probabilidade de que ele pegue uma bola azul?",
        options: ["10%", "15%", "20%", "25%", "30%"],
        answer: "20%",
        descriptions: ["Probabilidade"],
        latex: false
      },
      {
        question: "Considere a função $$f(x) = 2x^3 - 3x^2 + 5x - 7$$. Qual é o valor de $$f(2)$$?",
        options: ["5", "9", "13", "7", "21"],
        answer: "7",
        descriptions: ["Funções Variadas"],
        latex: true
      },
      {
        question: "Uma empresa que produz garrafas pet modelou a produção de seus operários pela expressão $$P(x) = 6x + 9x^2 - x^3$$, em que x corresponde à quantidade de horas trabalhadas após o início do expediente. O horário de início de funcionamento da empresa é 6 horas. Qual será a produção de um funcionário durante sua quarta hora de trabalho, sabendo que ele inicia suas obrigações na abertura da empresa?",
        options: ["104", "87", "45", "32", "33"],
        answer: "32",
        descriptions: ["Funções Variadas"],
        latex: true
      },
      {
        question: "Em uma sala de 48 alunos, 31 gostam de Matemática, 28 gostam de Português, e 23 gostam das duas disciplinas. Quantos alunos dessa sala não gostam dessas duas disciplinas?",
        options: ["12", "31", "23", "5", "8"],
        answer: "12",
        descriptions: ["Conjuntos"],
        latex: false
      },
      {
        question: "Se $$x = 2\\sqrt{24} - \\sqrt{54}$$, então x é um número real que:",
        options: ["está entre zero e dois.", "está entre 1 e 2.", "é negativo.", "está entre 2 e 3.", "é maior ou igual a 6."],
        answer: "está entre 2 e 3.",
        descriptions: ["Raízes e Equações"],
        latex: true
      },
      {
        question: "Em uma turma de cinquenta alunos de Medicina, há dezoito cursando Anatomia, quinze cursando Citologia e treze cursando Biofísica. Seis alunos cursam simultaneamente Anatomia e Citologia, cinco cursam simultaneamente Citologia e Biofísica e quatro cursam simultaneamente Anatomia e Biofísica. Dezesseis alunos não cursam nenhuma dessas disciplinas.\nO número de alunos que cursam, ao mesmo tempo, exatamente duas disciplinas é ",
        options: ["31", "15", "12", "8", "6"],
        answer: "6",
        descriptions: ["Conjuntos"],
        latex: false
      },
      {
        question: "Três torneiras estão com vazamento. Da primeira, cai uma gota de 4 em 4 minutos; da segunda, de 6 em 6 minutos; e da terceira, de 10 em 10 minutos. Exatamente às 2 horas, cai uma gota de cada torneira. A próxima vez em que pingarão juntas novamente será às:",
        options: ["2 horas e 30 minutos.", "3 horas.", "3 horas e 30 minutos.", "4 horas.", "4 horas e 30 minutos."],
        answer: "3 horas.",
        descriptions: ["Conjuntos"],
        latex: false
      },
      {
        question: "Uma função do primeiro grau é dada por $$y(x) = 2x - b$$. Sabe-se que $$y(-3) = 4$$. Desse modo, o valor de b é: ",
        options: ["-9", "-10", "-11", "-12"],
        answer: "-10",
        descriptions: ["Função 1º Grau"],
        latex: true
      },
    ]
  },
  {
    title: "Ciências da Natureza",
    questions: [
      {
        question: "Qual é a principal diferença entre os conceitos de fotossíntese e respiração celular?",
        options: ["A fotossíntese ocorre em todos os organismos vivos, enquanto a respiração celular ocorre apenas em plantas.", "Fotossíntese é o processo pelo qual as plantas produzem alimento a partir de luz solar, água e dióxido de carbono, liberando oxigênio. Respiração celular é a conversão de glicose em energia (ATP) nas células, liberando dióxido de carbono e água.", "Fotossíntese é o processo pelo qual as células produzem alimento a partir de luz solar, água e dióxido de carbono, liberando oxigênio. Respiração celular é a conversão de glicose em energia (ATP) nas plantas, liberando dióxido de carbono e água.", "A fotossíntese ocorre apenas durante o dia, enquanto a respiração celular ocorre apenas à noite."],
        answer: "Fotossíntese é o processo pelo qual as plantas produzem alimento a partir de luz solar, água e dióxido de carbono, liberando oxigênio. Respiração celular é a conversão de glicose em energia (ATP) nas células, liberando dióxido de carbono e água.",
        descriptions: ["Biologia"],
        latex: false
      },
      {
        question: "O que são ligações covalentes e como elas diferem das ligações iônicas?",
        options: ["Ligações covalentes ocorrem entre metais, enquanto ligações iônicas ocorrem entre não-metais.", "Ligações covalentes envolvem o compartilhamento de pares de elétrons entre átomos, enquanto ligações iônicas envolvem a transferência de elétrons de um átomo para outro, criando íons positivos e negativos.", "Ligações covalentes são mais fortes que ligações iônicas e ocorrem apenas em compostos orgânicos", "Ligações covalentes resultam na formação de cristais, enquanto ligações iônicas resultam na formação de moléculas."],
        answer: "Ligações covalentes envolvem o compartilhamento de pares de elétrons entre átomos, enquanto ligações iônicas envolvem a transferência de elétrons de um átomo para outro, criando íons positivos e negativos.",
        descriptions: ["Química", "Ligações Químicas"],
        latex: false
      },
      {
        question: "Marque a opção que melhor descreve a Lei da Conservação da Energia.",
        options: ["A Lei da Conservação da Energia afirma que a energia não pode ser criada nem destruída, apenas transformada. Exemplo: energia potencial gravitacional convertida em energia cinética ao cair um objeto.", "A Lei da Conservação da Energia afirma que a energia pode ser criada a partir do nada, mas não pode ser destruída. Exemplo: criar energia elétrica a partir de uma fonte infinita.", "A Lei da Conservação da Energia afirma que a energia pode ser destruída, mas não pode ser criada. Exemplo: energia térmica desaparecendo ao resfriar um objeto.", "A Lei da Conservação da Energia afirma que a energia pode ser criada e destruída em circunstâncias especiais. Exemplo: energia química transformada em energia elétrica e depois destruída.", "A Lei da Conservação da Energia afirma que a energia é sempre conservada apenas em sistemas isolados. Exemplo: energia mecânica se transformando em energia térmica em uma máquina."],
        answer: "A Lei da Conservação da Energia afirma que a energia não pode ser criada nem destruída, apenas transformada. Exemplo: energia potencial gravitacional convertida em energia cinética ao cair um objeto.",
        descriptions: ["Física", "Lei da Conservação da Energia"],
        latex: false,
      }
    ]
  }
]
