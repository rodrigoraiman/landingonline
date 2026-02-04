#!/bin/bash
# 🚀 QUICK START SCRIPT - Jardin Clair Landing Page
# Ejecuta este script para iniciar el proyecto automáticamente

echo "🎉 Bienvenido a Jardin Clair Landing Page"
echo "================================================"
echo ""

# Verificar si Node está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado."
    echo "   Instala desde: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js detectado: $(node --version)"
echo "✓ npm detectado: $(npm --version)"
echo ""

# Navegar a directorio del proyecto
cd "$(dirname "$0")"

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    echo ""
fi

echo "🚀 Iniciando servidor de desarrollo..."
echo "   Local:   http://localhost:3000"
echo "   Network: http://$(hostname -I | awk '{print $1}'):3000"
echo ""
echo "💡 Presiona Ctrl+C para detener el servidor"
echo "================================================"
echo ""

npm run dev
