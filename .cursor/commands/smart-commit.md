# smart-commit

## Descrição
Agrupa todos os arquivos modificados no repositório por contexto e cria múltiplos commits no padrão Conventional Commits (feat, fix, chore, docs, refactor, style, test).

## Etapas
1. O agente verifica todos os arquivos modificados (`git status --porcelain`).
2. Agrupa os arquivos por contexto, baseado em diretórios ou padrões (ex: `src/controllers`, `src/components`, `config`, `tests`).
3. Para cada grupo identificado:
   - Gera uma mensagem de commit no padrão Conventional Commits.
   - Executa `git add` apenas os arquivos daquele grupo.
   - Executa `git commit -m "mensagem gerada"`.