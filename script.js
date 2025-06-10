document.getElementById('tema-btn').addEventListener('click', () => {
  document.body.classList.toggle('modo-escuro');
});

const curiosidades = [
  "🔗 DeFi (Finanças Descentralizadas) elimina intermediários como bancos, usando contratos inteligentes para empréstimos, seguros e muito mais.",
  "⛓️ Blockchain é um livro-razão digital imutável, ou seja, ninguém pode alterar transações uma vez registradas.",
  "🐍 Python é uma linguagem extremamente popular em ciência de dados, automação e desenvolvimento web.",
  "📜 JavaScript é essencial para a criação de páginas web interativas e dinâmicas, sendo executado diretamente no navegador.",
  "📊 Data Science combina estatística, programação e conhecimento de domínio para extrair valor de grandes volumes de dados."
];

function mostrarCuriosidade() {
  const index = Math.floor(Math.random() * curiosidades.length);
  const curiosidade = curiosidades[index];
  document.getElementById("curiosidade").innerText = curiosidade;
}
