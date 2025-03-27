export default function sitemap() {
  const baseUrl = 'https://lindal.com.br';
  
  // Lista de todas as URLs do seu site que deseja incluir no sitemap
  const routes = [
    '',
    // Adicione todas as outras rotas do seu site aqui
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 