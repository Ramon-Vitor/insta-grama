fetch('https://insta-grama-api-780703529073.us-east1.run.app/posts', {
  method: 'GET', // ou POST, PUT, DELETE dependendo do tipo de requisição
  headers: {
    'Content-Type': 'application/json',
    // Outros cabeçalhos se necessário
  },
  mode: 'cors' // Isso garante que o CORS será respeitado
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Dados da resposta
  })
  .catch(error => {
    console.error('Erro ao fazer requisição:', error);
  });
