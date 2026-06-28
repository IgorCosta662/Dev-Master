@echo off
title DevMestre - Inicializador
chcp 65001 > nul

echo ========================================================
echo               DEVMESTRE - INICIALIZADOR RAPIDO          
echo ========================================================
echo.

:: Verificar se o Node.js está instalado
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] O Node.js não foi encontrado no seu sistema!
    echo Por favor, faça o download e instale o Node.js (v18 ou superior) em:
    echo https://nodejs.org/
    echo.
    pause
    exit /b
)

:: Verificar se o arquivo .env existe, caso contrário copia do .env.example
if not exist .env (
    echo [AVISO] Arquivo .env não encontrado. Criando cópia a partir de .env.example...
    copy .env.example .env > nul
    echo [INFO] Arquivo .env criado com sucesso!
    echo IMPORTANTE: Lembre-se de abrir o arquivo .env e configurar sua GEMINI_API_KEY.
    echo.
)

:: Verificar se a pasta node_modules existe, se não, instala as dependências
if not exist node_modules (
    echo [INFO] Pasta node_modules não detectada. Instalando as dependências do projeto...
    echo Isso pode levar alguns instantes, por favor aguarde...
    call npm install
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao instalar as dependências via npm install.
        pause
        exit /b
    )
    echo [INFO] Dependências instaladas com sucesso!
    echo.
)

echo ========================================================
echo [INFO] Iniciando o servidor de desenvolvimento do DevMestre...
echo [INFO] O aplicativo ficará disponível no seu navegador em:
echo        👉 http://localhost:3000 👈
echo ========================================================
echo.
echo Para encerrar o servidor, feche esta janela ou aperte Ctrl+C.
echo --------------------------------------------------------
call npm run dev

pause
