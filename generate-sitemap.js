const fs = require('fs');
const path = require('path');

// Função para obter a data atual no formato YYYY-MM-DD
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Função para gerar o sitemap XML
function generateSitemapXML() {
    const currentDate = getCurrentDate();
    const domain = 'https://www.natanaelsilvalima.dev.br';

    const urls = [
        {
            loc: `${domain}/`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '1.0',
            comment: 'Página Principal',
        },
        {
            loc: `${domain}/curriculo`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.8',
            comment: 'Página do Currículo',
        },
        {
            loc: `${domain}/#about`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7',
            comment: 'Seção Sobre',
        },
        {
            loc: `${domain}/#experience`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7',
            comment: 'Seção Experiência',
        },
        {
            loc: `${domain}/#skills`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7',
            comment: 'Seção Habilidades',
        },
        {
            loc: `${domain}/#projects`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7',
            comment: 'Seção Projetos Profissionais',
        },
        {
            loc: `${domain}/#personal-projects`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7',
            comment: 'Seção Projetos Pessoais',
        },
        {
            loc: `${domain}/#contact`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.6',
            comment: 'Seção Contato',
        },
        {
            loc: `${domain}/sitemap`,
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.5',
            comment: 'Página de Sitemap',
        },
    ];

    const xmlEntries = urls
        .map(
            ({ loc, lastmod, changefreq, priority, comment }) => `
    <!-- ${comment} -->
    <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${changefreq}</changefreq>
        <priority>${priority}</priority>
    </url>`
        )
        .join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlEntries}

</urlset>`;
}

// Função principal
function main() {
    try {
        console.log('🚀 Gerando sitemap XML com data atual...');

        const sitemapXML = generateSitemapXML();
        const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
        fs.writeFileSync(sitemapPath, sitemapXML, 'utf8');
        console.log('✅ Sitemap XML gerado com sucesso!');
        
        // Mostrar informações
        const currentDate = getCurrentDate();
        console.log(`📅 Data de atualização: ${currentDate}`);
        console.log('🌐 Domínio configurado: https://www.natanaelsilvalima.dev.br');
        console.log('📁 Arquivo atualizado: public/sitemap.xml');
        
    } catch (error) {
        console.error('❌ Erro ao gerar sitemaps:', error.message);
        process.exit(1);
    }
}

// Executar se for chamado diretamente
if (require.main === module) {
    main();
}

module.exports = {
    generateSitemapXML,
    getCurrentDate
};
