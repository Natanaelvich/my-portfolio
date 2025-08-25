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
    
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

    <!-- Página Principal -->
    <url>
        <loc>${domain}/</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>

    <!-- Página do Currículo -->
    <url>
        <loc>${domain}/curriculo.html</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>

    <!-- Seções da Página Principal -->
    <url>
        <loc>${domain}/#about</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>

    <url>
        <loc>${domain}/#experience</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>

    <url>
        <loc>${domain}/#skills</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>

    <url>
        <loc>${domain}/#projects</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>

    <url>
        <loc>${domain}/#personal-projects</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
    </url>

    <url>
        <loc>${domain}/#contact</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>

    <!-- Páginas Adicionais -->
    <url>
        <loc>${domain}/sitemap.html</loc>
        <lastmod>${currentDate}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>

</urlset>`;

    return sitemapContent;
}

// Função para gerar o sitemap HTML
function generateSitemapHTML() {
    const currentDate = getCurrentDate();
    const domain = 'https://www.natanaelsilvalima.dev.br';
    
    const sitemapHTMLContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <title>Sitemap - Natanael Silva Lima | Portfólio</title>
    <meta name="description" content="Mapa do site do portfólio de Natanael Silva Lima - Tech Lead e Desenvolvedor Fullstack">
    <meta name="robots" content="index, follow">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${domain}/sitemap.html">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        .sitemap-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            font-family: 'Inter', sans-serif;
        }
        
        .sitemap-header {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .sitemap-header h1 {
            color: #1f2937;
            margin-bottom: 10px;
        }
        
        .sitemap-header p {
            color: #6b7280;
            font-size: 18px;
        }
        
        .sitemap-section {
            margin-bottom: 40px;
        }
        
        .sitemap-section h2 {
            color: #2563eb;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        
        .sitemap-links {
            list-style: none;
            padding: 0;
        }
        
        .sitemap-links li {
            margin-bottom: 15px;
        }
        
        .sitemap-links a {
            color: #374151;
            text-decoration: none;
            font-size: 16px;
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }
        
        .sitemap-links a:hover {
            background-color: #f3f4f6;
            color: #2563eb;
            transform: translateX(5px);
        }
        
        .sitemap-links i {
            margin-right: 10px;
            color: #2563eb;
            width: 20px;
        }
        
        .back-home {
            text-align: center;
            margin-top: 40px;
        }
        
        .back-home a {
            display: inline-block;
            background-color: #2563eb;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            transition: background-color 0.3s ease;
        }
        
        .back-home a:hover {
            background-color: #1d4ed8;
        }
        
        .last-updated {
            text-align: center;
            margin-top: 20px;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="sitemap-container">
        <div class="sitemap-header">
            <h1>Mapa do Site</h1>
            <p>Navegue facilmente por todas as seções do portfólio</p>
            <div class="last-updated">
                <i class="fas fa-clock"></i> Última atualização: ${currentDate}
            </div>
        </div>

        <div class="sitemap-section">
            <h2><i class="fas fa-home"></i> Páginas Principais</h2>
            <ul class="sitemap-links">
                <li><a href="/"><i class="fas fa-arrow-right"></i> Página Inicial</a></li>
                <li><a href="/curriculo.html"><i class="fas fa-arrow-right"></i> Currículo Profissional</a></li>
            </ul>
        </div>

        <div class="sitemap-section">
            <h2><i class="fas fa-user"></i> Seções do Portfólio</h2>
            <ul class="sitemap-links">
                <li><a href="/#about"><i class="fas fa-arrow-right"></i> Sobre Mim</a></li>
                <li><a href="/#experience"><i class="fas fa-arrow-right"></i> Experiência Profissional</a></li>
                <li><a href="/#skills"><i class="fas fa-arrow-right"></i> Habilidades Técnicas</a></li>
                <li><a href="/#projects"><i class="fas fa-arrow-right"></i> Projetos Profissionais</a></li>
                <li><a href="/#personal-projects"><i class="fas fa-arrow-right"></i> Projetos Pessoais</a></li>
                <li><a href="/#contact"><i class="fas fa-arrow-right"></i> Contato</a></li>
            </ul>
        </div>

        <div class="sitemap-section">
            <h2><i class="fas fa-external-link-alt"></i> Links Externos</h2>
            <ul class="sitemap-links">
                <li><a href="https://linkedin.com/in/natanaelvich" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="https://github.com/natanaelvich" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
                <li><a href="https://www.solunorde.com.br/" target="_blank"><i class="fas fa-building"></i> Solunorde</a></li>
                <li><a href="https://solunorde.com.br/sip-by-sip/" target="_blank"><i class="fas fa-tint"></i> Gole A Gole</a></li>
                <li><a href="https://solunorde.com.br/habitup/" target="_blank"><i class="fas fa-chart-line"></i> HabitUp</a></li>
                <li><a href="https://www.servicolocalapp.com.br/" target="_blank"><i class="fas fa-map-marker-alt"></i> Serviço Local</a></li>
                <li><a href="https://www.contaliservicoscontabeis.com.br/" target="_blank"><i class="fas fa-calculator"></i> Contali</a></li>
            </ul>
        </div>

        <div class="sitemap-section">
            <h2><i class="fas fa-cog"></i> Recursos Técnicos</h2>
            <ul class="sitemap-links">
                <li><a href="/sitemap.xml"><i class="fas fa-sitemap"></i> Sitemap XML</a></li>
                <li><a href="/robots.txt"><i class="fas fa-robot"></i> Robots.txt</a></li>

            </ul>
        </div>

        <div class="back-home">
            <a href="/"><i class="fas fa-arrow-left"></i> Voltar ao Início</a>
        </div>
    </div>
</body>
</html>`;

    return sitemapHTMLContent;
}

// Função principal
function main() {
    try {
        console.log('🚀 Gerando sitemaps com data atual...');
        
        // Gerar sitemap XML
        const sitemapXML = generateSitemapXML();
        fs.writeFileSync('sitemap.xml', sitemapXML, 'utf8');
        console.log('✅ Sitemap XML gerado com sucesso!');
        
        // Gerar sitemap HTML
        const sitemapHTML = generateSitemapHTML();
        fs.writeFileSync('sitemap.html', sitemapHTML, 'utf8');
        console.log('✅ Sitemap HTML gerado com sucesso!');
        
        // Mostrar informações
        const currentDate = getCurrentDate();
        console.log(`📅 Data de atualização: ${currentDate}`);
        console.log('🌐 Domínio configurado: https://www.natanaelsilvalima.dev.br');
        console.log('📁 Arquivos atualizados: sitemap.xml e sitemap.html');
        
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
    generateSitemapHTML,
    getCurrentDate
};
