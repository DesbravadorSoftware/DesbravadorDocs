# Desbravador Enterprise / 4.0

**Sistema:** Desbravador Enterprise / 4.0  
**Público:** Cliente / Equipe de TI / Fornecedor de hardware

> ℹ️ O Desbravador Enterprise / 4.0 era anteriormente denominado **Desbravador 4.5**. Toda documentação, contratos e referências técnicas anteriores sob esse nome aplicam-se a este sistema.

---

## Modalidades de Implantação

O Desbravador Enterprise / 4.0 pode ser implantado em três modalidades distintas, de acordo com a infraestrutura disponível, o perfil do estabelecimento e a preferência operacional do cliente.

---

### 🏢 On-Premise — Instalação Local Total

Toda a infraestrutura — aplicação e banco de dados — fica instalada nas dependências do cliente.

- Servidor de aplicação Windows Server na rede local.
- Servidor de banco de dados Linux (PostgreSQL 16) na rede local.
- Total controle sobre hardware, rede e dados.
- Manutenção de infraestrutura por conta do cliente ou fornecedor de TI contratado.

> **Indicado para:** estabelecimentos com equipe de TI própria ou contratada, que preferem controle total da infraestrutura e não dependem de conectividade externa para operação.

[→ Ver requisitos completos — On-Premise](./local/requisitos-hardware.md)

---

### 🔀 Híbrido — Aplicação Local + Banco de Dados em Nuvem

O servidor de aplicação permanece nas dependências do cliente. O banco de dados é hospedado em nuvem (serviço gerenciado de PostgreSQL).

- Servidor de aplicação Windows Server na rede local.
- Banco de dados PostgreSQL 16 provisionado em nuvem (ex.: AWS RDS, Azure Database, GCP Cloud SQL ou equivalente).
- Servidor de Contas local obrigatório para operação dos terminais de PDV.
- Reduz a necessidade de manter e escalar infraestrutura de banco de dados localmente.
- Requer conexão estável com a internet e latência adequada para acesso ao banco remoto.

> **Indicado para:** estabelecimentos que desejam simplificar a gestão do banco de dados, com conectividade de internet confiável e sem restrições de latência para acesso ao banco remoto.

[→ Ver requisitos completos — Híbrido](./hibrido/requisitos-hardware.md)

---

### ☁️ Cloud — Instalação Totalmente em Nuvem

Toda a infraestrutura principal é provisionada em nuvem. No estabelecimento permanecem as estações de trabalho, os periféricos físicos e o Servidor de Contas para os terminais de PDV.

- Aplicação e banco de dados hospedados em nuvem Desbravador (Cloud Desbravador).
- Servidor de Contas local obrigatório para operação dos terminais de PDV.
- Acesso de Front-Office e Back-Office via Remote Desktop (RDP) ao Cloud Desbravador.
- Operação do sistema principal dependente de conexão estável com a internet.

> **Indicado para:** estabelecimentos sem infraestrutura local de servidores, que preferem modelo de serviço gerenciado com atualizações automáticas e sem responsabilidade sobre hardware de servidor.

[→ Ver requisitos completos — Cloud](./cloud/requisitos-hardware.md)

---

## Comparativo das Modalidades

|  | On-Premise | Híbrido | Cloud |
| --- | :---: | :---: | :---: |
| **Servidor de aplicação local** | ✔ | ✔ | ✗ |
| **Servidor de banco de dados local** | ✔ | ✗ | ✗ |
| **Banco de dados em nuvem** | ✗ | ✔ | ✔ |
| **Aplicação em nuvem (Cloud Desbravador)** | ✗ | ✗ | ✔ |
| **Servidor de Contas (PDV) — sempre local** | ✔ | ✔ | ✔ |
| **Operação sem internet** | ✔ | ✗ | ✗ |
| **Manutenção de servidores pelo cliente** | ✔ | Parcial | Mínima |
| **Estações Front-Office / Back-Office** | ✔ | ✔ | ✔ |
| **Estações PDV** | ✔ | ✔ | ✔ |
| **Periféricos físicos suportados** | ✔ | ✔ | ✔ |

---

## Infraestrutura e Segurança de Rede

A equipe de TI responsável pela implantação deve configurar o firewall de acordo com o padrão de portas dos sistemas Desbravador.

[→ Padrão de Portas e Configuração de Firewall](./../infraestrutura/portas-e-firewall.md)

---

## Contato e Suporte

**Desbravador Software Ltda.**  
 🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

Para dúvidas sobre qual modalidade é mais adequada ao seu ambiente, entre em contato com a equipe técnica da Desbravador antes de iniciar a aquisição de equipamentos.
