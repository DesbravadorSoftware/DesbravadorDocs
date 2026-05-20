#!/bin/bash
# Arquiva o estado atual da documentação como uma versão mensal.
# Uso: ./scripts/arquivar-versao.sh [YYYY-MM]
# Exemplo: ./scripts/arquivar-versao.sh 2026-06

VERSAO="${1:-$(date +%Y-%m)}"
DOCS_DIR="$(cd "$(dirname "$0")/.." && pwd)/docs"
DEST="$DOCS_DIR/versoes/$VERSAO"

if [ -d "$DEST" ]; then
  echo "Versão $VERSAO já existe em $DEST"
  echo "Para sobrescrever, remova a pasta manualmente e execute novamente."
  exit 1
fi

mkdir -p "$DEST"
cp -r "$DOCS_DIR/desbravador-41" "$DEST/"
cp -r "$DOCS_DIR/_shared" "$DEST/"

MONTH=$(echo "$VERSAO" | cut -d'-' -f2)
YEAR=$(echo "$VERSAO" | cut -d'-' -f1)

declare -A MESES=(
  ["01"]="Jan" ["02"]="Fev" ["03"]="Mar" ["04"]="Abr"
  ["05"]="Mai" ["06"]="Jun" ["07"]="Jul" ["08"]="Ago"
  ["09"]="Set" ["10"]="Out" ["11"]="Nov" ["12"]="Dez"
)
LABEL="${MESES[$MONTH]}/$YEAR"

cat > "$DEST/index.md" << EOF
# Documentação — $LABEL

Versão arquivada em $LABEL.

## Conteúdo

- [Requisitos de Hardware — Instalação Local](./desbravador-41/local/requisitos-hardware.md)
- [Requisitos Cloud (AutoSky)](./desbravador-41/cloud/requisitos-cloud.md)
- [Periféricos Homologados — Fechaduras](./_shared/fechaduras-homologadas.md)
- [Periféricos Homologados — Impressoras](./_shared/impressoras-homologadas.md)
- [Periféricos Homologados — Pinpads](./_shared/pinpads-homologados.md)
EOF

# Adicionar linha na tabela do índice de versões
INDEX="$DOCS_DIR/versoes/index.md"
TODAY=$(date +%Y-%m-%d)
NOVA_LINHA="| $LABEL | $TODAY | [Acessar](./$VERSAO/index.md) |"

if grep -q "$VERSAO" "$INDEX"; then
  echo "Versão $VERSAO já está no índice."
else
  echo "$NOVA_LINHA" >> "$INDEX"
fi

echo "✅ Versão $LABEL arquivada em docs/versoes/$VERSAO/"
echo "   Reinicie o servidor de desenvolvimento para atualizar o seletor de versões."
