#!/usr/bin/env node

/**
 * Script de automação para atualizar SEO
 * Pode ser executado em CI/CD ou localmente
 */

const { generateSitemapXML, getCurrentDate } = require('../generate-sitemap.js');
const fs = require('fs');
const path = require('path');

// Configurações
const projectRoot = path.join(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const config = {
    domain: 'https://www.natanaelsilvalima.dev.br',
    outputDir: publicDir,
    files: ['sitemap.xml']
};

// Função para verificar se os arquivos foram modificados
function checkFileChanges() {
    const currentDate = getCurrentDate();
    let hasChanges = false;
    
    config.files.forEach(file => {
        const filePath = path.join(config.outputDir, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (!content.includes(currentDate)) {
                hasChanges = true;
                console.log(`📝 Arquivo ${file} precisa ser atualizado`);
            }
        } else {
            hasChanges = true;
            console.log(`📝 Arquivo ${file} não existe`);
        }
    });
    
    return hasChanges;
}

// Função para atualizar arquivos de SEO
function updateSEO() {
    try {
        console.log('🚀 Atualizando arquivos de SEO...');
        
        // Gerar sitemaps
        const sitemapXML = generateSitemapXML();
        
        // Escrever arquivos
        fs.writeFileSync(path.join(config.outputDir, 'sitemap.xml'), sitemapXML, 'utf8');
        
        console.log('✅ Arquivos de SEO atualizados com sucesso!');
        
        // Verificar se há mudanças no robots.txt
        const robotsPath = path.join(config.outputDir, 'robots.txt');
        if (fs.existsSync(robotsPath)) {
            let robotsContent = fs.readFileSync(robotsPath, 'utf8');
            if (!robotsContent.includes(config.domain)) {
                robotsContent = robotsContent.replace(
                    /Sitemap: .*/,
                    `Sitemap: ${config.domain}/sitemap.xml`
                );
                fs.writeFileSync(robotsPath, robotsContent, 'utf8');
                console.log('✅ Robots.txt atualizado com novo domínio');
            }
        }
        
        return true;
        
    } catch (error) {
        console.error('❌ Erro ao atualizar SEO:', error.message);
        return false;
    }
}

// Função para validar arquivos gerados
function validateFiles() {
    console.log('🔍 Validando arquivos gerados...');
    
    const currentDate = getCurrentDate();
    let isValid = true;
    
    config.files.forEach(file => {
        const filePath = path.join(config.outputDir, file);
        if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes(currentDate) && content.includes(config.domain)) {
                console.log(`✅ ${file} válido`);
            } else {
                console.log(`❌ ${file} inválido`);
                isValid = false;
            }
        } else {
            console.log(`❌ ${file} não encontrado`);
            isValid = false;
        }
    });
    
    return isValid;
}

// Função principal
function main() {
    const args = process.argv.slice(2);
    const command = args[0] || 'update';
    
    console.log('🔧 Script de Automação SEO - Portfólio Natanael Silva Lima');
    console.log(`🌐 Domínio: ${config.domain}`);
    console.log(`📅 Data atual: ${getCurrentDate()}`);
    console.log('');
    
    switch (command) {
        case 'check':
            console.log('🔍 Verificando mudanças...');
            const needsUpdate = checkFileChanges();
            if (needsUpdate) {
                console.log('📝 Atualizações necessárias detectadas');
                process.exit(1);
            } else {
                console.log('✅ Todos os arquivos estão atualizados');
                process.exit(0);
            }
            break;
            
        case 'validate':
            console.log('🔍 Validando arquivos...');
            const isValid = validateFiles();
            if (isValid) {
                console.log('✅ Todos os arquivos são válidos');
                process.exit(0);
            } else {
                console.log('❌ Alguns arquivos são inválidos');
                process.exit(1);
            }
            break;
            
        case 'update':
        default:
            console.log('🔄 Atualizando arquivos...');
            const success = updateSEO();
            if (success) {
                console.log('✅ Atualização concluída com sucesso!');
                validateFiles();
                process.exit(0);
            } else {
                console.log('❌ Falha na atualização');
                process.exit(1);
            }
            break;
    }
}

// Executar se for chamado diretamente
if (require.main === module) {
    main();
}

module.exports = {
    updateSEO,
    checkFileChanges,
    validateFiles,
    config
};
