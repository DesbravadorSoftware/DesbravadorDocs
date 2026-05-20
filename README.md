# desbravador-docs

Repositório de documentação técnica da Desbravador Software Ltda.
Gerador de site: **VitePress**

## Estrutura

```
desbravador-docs/
├── .vitepress/
│   └── config.js                       ← configuração do site (nav, sidebar, tema)
├── package.json                        ← dependências Node
└── docs/
    ├── index.md                        ← página inicial
    ├── _shared/                        ← conteúdo compartilhado entre sistemas
    │   ├── fechaduras-homologadas.md
    │   ├── impressoras-homologadas.md
    │   └── pinpads-homologados.md
    └── desbravador-41/
        ├── local/
        │   └── requisitos-hardware.md
        └── cloud/
            └── requisitos-cloud.md
```

## Setup inicial

```bash
npm install
npm run docs:dev       # roda local em http://localhost:5173
```

## Deploy

```bash
npm run docs:build     # gera o site em .vitepress/dist/
npm run docs:preview   # preview do build antes de publicar
```

Para GitHub Pages, veja `.github/workflows/deploy.yml` (opcional).

## Adicionar um novo sistema

1. Crie uma pasta em `docs/` (ex.: `desbravador-light/`).
2. Adicione subpastas `local/` e/ou `cloud/` com os `.md`.
3. Registre as rotas no `sidebar` do `.vitepress/config.js`.
4. Adicione o sistema no `nav` do `config.js`.

## Convenções

- `_shared/` = conteúdo comum entre sistemas. Links relativos apontam para cá.
- Nomenclatura de arquivos: `kebab-case` sempre.
- Versionamento via Git. Use branches para revisões antes de publicar na `main`.
