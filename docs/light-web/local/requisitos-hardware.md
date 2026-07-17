# Requisitos de Hardware — Easy Web / Light Web / 3.0 Web

**Sistema:** Desbravador Easy Web / Light Web / 3.0 Web  
**Modalidade:** SaaS / Online  
**Público:** Cliente / Equipe de TI

---

## Histórico de Revisões

| Versão | Data | Descrição | Responsável |
| --- | --- | --- | --- |
| 1.0 | Mai/2026 | Criação do documento | Desbravador Software Ltda. |
| 1.1 | Mai/2026 | Inclusão de versões mínimas de navegador, requisitos de CPU 64-bit e faixas de internet | Desbravador Software Ltda. |
| 1.2 | Mai/2026 | Atualização das versões mínimas de navegador (Chrome/Edge 148, Firefox 138) | Desbravador Software Ltda. |

---

## Considerações Iniciais

O Desbravador Easy Web, Light Web e 3.0 Web são sistemas 100% online, acessados exclusivamente via navegador web — não há instalação de software nas estações de trabalho.

> ℹ️ O sistema funciona via navegador em qualquer sistema operacional. Windows é obrigatório apenas no computador com conexão física à central telefônica, impressoras fiscais ou emissão de notas eletrônicas.

Demais pontos relevantes antes da implantação:

- Relatórios são gerados em formato PDF — todas as estações de acesso devem ter um leitor de PDF instalado (o próprio Chrome atende esse requisito nativamente).
- Nobreak é recomendado em todos os computadores para evitar contratempos por quedas de energia.
- Antivírus instalado e atualizado é obrigatório.
- Durante o treinamento online, é essencial a disponibilidade e participação ativa dos usuários responsáveis pela operação do sistema.

---

## 1. Objetivo

Este documento serve como guia para a preparação do ambiente de funcionamento do Desbravador Easy Web, Light Web e 3.0 Web, abordando os requisitos técnicos de hardware, software, rede e integrações necessários para operação do sistema.

Por ser uma plataforma SaaS, não há servidor local de banco de dados nem de aplicação a provisionar. Os requisitos se concentram nas estações de acesso, na qualidade da conexão com a internet e nos equipamentos de integração física, quando aplicável.

---

## 2. Responsabilidades

### 2.1 Desbravador Software Ltda.

- A instalação e configuração dos componentes de integração (coleta de bilhetes, emissão de notas eletrônicas) é realizada exclusivamente pelo Analista de Implantação da Desbravador.
- O programa de coleta de bilhetes da central telefônica é fornecido pela Desbravador.
- A equipe Desbravador estará disponível para esclarecer dúvidas técnicas durante todo o período de implantação.

### 2.2 Cliente (LICENCIADO)

- Providenciar os equipamentos conforme as especificações deste documento.
- Garantir o licenciamento dos sistemas operacionais e softwares adicionais utilizados.
- Prover segurança física e lógica para os computadores de acesso e de integração.
- Disponibilizar técnico de hardware durante o período de implantação.
- Garantir a instalação e o cabeamento necessário para conexão de periféricos físicos (impressoras fiscais, central telefônica).
- Manter antivírus instalado e atualizado em todos os equipamentos.

> ⚠️ **Atenção**
> - A Desbravador **NÃO** realiza montagem/desmontagem de hardware nem instalação de sistemas operacionais.
> - A segurança dos arquivos e dados do sistema é responsabilidade exclusiva de quem opera o sistema.

---

## 3. Seleção do Fornecedor de Hardware

Ao selecionar o fornecedor de equipamentos, certifique-se de que ele oferece:

- Suporte técnico disponível durante o horário de operação do estabelecimento.
- Garantia e assistência técnica dos equipamentos fornecidos.
- Capacidade de configurar rede local, cabeamento e periféricos físicos quando necessário.

---

## 4. Requisitos das Estações de Trabalho

As estações de trabalho acessam o sistema exclusivamente via navegador. Não há instalação de cliente ou agente local.

| Item | Requisito Mínimo | Recomendado |
| --- | --- | --- |
| **Processador** | Intel Core i3 10ª geração ou AMD Ryzen 3 equivalente (64-bit) | Intel Core i5 ou superior (64-bit) |
| **Memória RAM** | 4 GB | 8 GB ou mais |
| **Armazenamento** | SSD 120 GB | SSD 240 GB |
| **Navegador** | Ver Seção 5 | Google Chrome (última versão) |
| **Resolução de tela** | 1024 × 768 | 1920 × 1080 |
| **Sistema Operacional** | Windows 10 ou superior, licenciado | Windows 11 Pro, licenciado |
| **Leitor de PDF** | Obrigatório (o próprio Chrome atende) | Obrigatório |
| **Antivírus** | Obrigatório (instalado e atualizado) | Obrigatório (instalado e atualizado) |
| **Nobreak (UPS)** | Recomendado | Recomendado |

> ℹ️ **Requisito de sistema operacional por tipo de uso**
> A necessidade de Windows na estação de trabalho depende das integrações utilizadas:
> - **Acesso geral ao sistema** (consultas, lançamentos, relatórios) — independe de sistema operacional. Qualquer SO com navegador homologado (Chrome ou Firefox) é suficiente.
> - **Estação com integração a periféricos** (fechaduras eletrônicas, TEF, impressoras fiscais ou não fiscais) — **Windows obrigatório**. A comunicação com esses dispositivos requer drivers e componentes exclusivos do ambiente Windows.
> Em caso de dúvida sobre o tipo de uso de cada estação, consulte a equipe Desbravador antes da aquisição dos equipamentos.

---

## 5. Requisitos de Navegador

| Navegador | Versão Mínima | Observação |
| --- | --- | --- |
| **Google Chrome** | 148 ou superior | Recomendado — manter sempre atualizado |
| **Mozilla Firefox** | 138 ou superior | Homologado |
| **Microsoft Edge** | 148 ou superior | Homologado |
| **Apple Safari** | Não recomendado | Pode apresentar incompatibilidades |
| **Navegadores mobile** | Não recomendados | Uso operacional não suportado |

> ℹ️ **Recomendação** — Manter o navegador sempre atualizado para a última versão garante segurança, melhor desempenho e compatibilidade com todos os recursos do sistema. Em caso de dificuldade de acesso, verificar a versão do navegador é o primeiro passo de diagnóstico.

---

## 6. Requisitos de Rede e Internet

| Item | Mínimo | Recomendado |
| --- | --- | --- |
| **Velocidade de download** | 5 Mbps | 100 Mbps ou mais |
| **Velocidade de upload** | 2 Mbps | 50 Mbps ou mais |
| **Tipo de conexão** | Banda larga estável | Fibra óptica dedicada |
| **Estabilidade** | Crítica — ver observação abaixo | Link redundante recomendado |

> ⚠️ **URL obrigatória — liberação em proxy/firewall de saída**
> O endereço `https://servicos.desbravador.com.br/` deve estar **permitido (bypass)** em proxies, filtros de conteúdo e firewalls de saída. O bloqueio desta URL impede o funcionamento de serviços essenciais do sistema.

> ⚠️ **Atenção** — Por ser um sistema 100% online, a estabilidade da conexão é mais crítica do que a velocidade de pico. Uma conexão de 5 Mbps estável é preferível a uma de 50 Mbps com oscilações frequentes. Recomenda-se link dedicado com contingência (ex.: 4G como backup em caso de falha do link principal).

---

## 7. Requisitos de Software

Os únicos softwares que requerem instalação local são os componentes de integração física, quando aplicável:

- **Navegador web:** Google Chrome ou Mozilla Firefox na versão mínima indicada na Seção 5. Manter atualização automática habilitada.
- **Leitor de PDF:** obrigatório em todas as estações que gerem relatórios. O próprio Chrome atende esse requisito nativamente.
- **Antivírus:** solução licenciada, instalada e com atualização automática de definições habilitada.
- **Componentes de integração Desbravador:** instalados pelo Analista de Implantação nos computadores com conexão física a periféricos (central telefônica, impressoras fiscais, emissão de NF-e/NFC-e). Requer Windows.

---

## 8. Central Telefônica

O Desbravador Easy Web / Light Web / 3.0 Web integra com centrais telefônicas para coleta de bilhetes de tarifação. Requisitos:

- Qualquer central com bilhetagem serial ou TCP/IP pode ser integrada.
- O técnico responsável deve disponibilizar o cabo de comunicação até o computador Windows mais próximo com acesso físico à central.
- Nenhum programa tarifador de terceiros é necessário — o programa de coleta de bilhetes é fornecido pela Desbravador.
- Consultar a Desbravador com antecedência para verificar compatibilidade com o modelo específico da central.

> ℹ️ Em centrais com suporte a bilhetagem serial e TCP/IP, sempre utilizar TCP/IP.

---

## 9. Integração com Notas Eletrônicas (NF-e / NFC-e)

A emissão de notas eletrônicas requer um computador com sistema operacional Windows para instalação do componente de integração da Desbravador.

Requisitos específicos para o computador de emissão:

- Sistema operacional Windows 10 ou superior, licenciado.
- Certificado digital A1 válido (arquivo `.pfx`). Certificados A3 (token/smartcard) não são suportados.
- Conexão estável com a internet, com acesso liberado aos webservices da SEFAZ.
- Antivírus instalado — verificar que não bloqueia a comunicação com os serviços fiscais.

---

## 10. Periféricos Homologados

O sistema possui integração desenvolvida e homologada com os seguintes periféricos:

- 🖨️ [Impressoras fiscais e não fiscais homologadas](./../../perifericos/impressoras-homologadas.md)
- 💳 [Pinpads homologados](./../../perifericos/pinpads-homologados.md)
- 💳 [Sistemas de TEF homologados](./../../perifericos/tef-homologados.md)
- 🔒 [Fechaduras e tarifadores homologados](./../../perifericos/fechaduras-homologadas.md)

---

## 11. Observações Finais

- Por se tratar de um sistema SaaS, atualizações de versão são aplicadas automaticamente pela Desbravador, sem intervenção do cliente.
- Requisitos descritos neste documento estão sujeitos a revisão conforme a evolução do produto. Consulte sempre a versão mais recente antes de iniciar uma nova implantação.
- Durante o treinamento online, é essencial a disponibilidade e participação ativa dos usuários responsáveis pela operação do sistema.

---

## 12. Contato e Suporte

**Desbravador Software Ltda.**  
 🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

Para dúvidas técnicas durante a implantação, a equipe Desbravador estará disponível para esclarecimentos.
