# Requisitos de Hardware — Gas Station / Liquor Store

**Sistema:** Desbravador Gas Station / Liquor Store  
**Modalidade:** Instalação Local (On-Premise)  
**Público:** Cliente / Fornecedor de hardware / Equipe de TI

---

## Histórico de Revisões

| Versão | Data | Descrição | Responsável |
| --- | --- | --- | --- |
| 1.0 | Abr/2023 | Criação do documento | Andressa Celant |
| 1.1 | Jul/2024 | Atualização | Andressa Celant |
| 1.2 | Mai/2026 | Atualização tecnológica | Desbravador Software Ltda. |

---

## 1. Objetivo

Este documento serve como guia para a preparação do ambiente de funcionamento do sistema Desbravador Gas Station e Gas Station 10 (Liquor Store), abordando os requisitos técnicos de instalação e outras questões relacionadas.

Este descritivo pode ser repassado ao fornecedor de hardware selecionado e servirá como guia para a aquisição dos equipamentos. Os requisitos levam em consideração que os servidores serão utilizados exclusivamente pelos serviços relacionados ao Gas Station. Caso seja necessário compartilhar servidores com outros serviços ou softwares, os requisitos dos demais serviços devem ser considerados no dimensionamento.

---

## 2. Responsabilidades

### 2.1 Desbravador Software Ltda.

- A instalação do software do servidor é realizada exclusivamente pelo Analista de Implantação da Desbravador.
- A equipe Desbravador estará disponível para esclarecer dúvidas técnicas durante todo o período de implantação.

### 2.2 Cliente (LICENCIADO)

- Providenciar os equipamentos conforme especificações deste documento, com sistema operacional previamente instalado e configurado.
- Garantir o licenciamento dos sistemas operacionais e softwares adicionais utilizados.
- Prover segurança física e lógica para servidores e estações de trabalho.
- Disponibilizar técnico de hardware durante o período de implantação.
- Garantir a instalação e configuração de periféricos (impressoras fiscais, concentradoras, medidores de tanque) para as devidas integrações.
- Realizar e manter rotinas de backup dos dados do sistema.

> ⚠️ **Atenção**
> - A Desbravador **NÃO** realiza montagem/desmontagem de hardware nem instalação de sistemas operacionais.
> - A segurança dos arquivos e dados do sistema é responsabilidade exclusiva de quem opera o sistema.
> - Operações indevidas, falhas nas rotinas de backup ou uso de mídia defeituosa são de responsabilidade do LICENCIADO.

---

## 3. Seleção do Fornecedor de Hardware

Ao selecionar o fornecedor de equipamentos, certifique-se de que ele oferece:

- Suporte técnico disponível 24 horas por dia.
- Presença física na mesma cidade ou região próxima ao estabelecimento.
- Garantia e assistência técnica dos equipamentos fornecidos.
- Capacidade de assumir responsabilidade pelo sistema operacional, rede e banco de dados.
- Referências de clientes e instalações anteriores verificáveis.

---

## 4. Configurações de Servidor por Quantidade de Usuários

---

### 4.1 Até 5 Usuários

> ℹ️ Nesta faixa, aplicação e banco de dados podem coexistir em um único servidor.

| Campo | Especificação |
| --- | --- |
| **Processador** | Intel Core i5 12ª geração ou superior · AMD Ryzen 5 5600 ou superior |
| **Memória RAM** | 8 GB |
| **Armazenamento** | SSD 500 GB — obrigatório |
| **Sistema Operacional** | Microsoft Windows Server 2022 licenciado |
| **Banco de Dados** | PostgreSQL 16 |

---

### 4.2 De 6 a 10 Usuários

> ℹ️ O uso de dois servidores separados é recomendado para melhor desempenho.

#### ▸ Servidor de Aplicação

| Campo | Especificação |
| --- | --- |
| **Placa-Mãe** | Compatível com expansão de memória RAM. Marcas de referência: Asus, Intel, MSI, Gigabyte. |
| **Processador** | Intel Core i5 12ª geração ou superior · AMD Ryzen 5 5600 ou superior |
| **Memória RAM** | 8 GB |
| **Armazenamento** | SSD 500 GB — obrigatório |
| **Sistema Operacional** | Microsoft Windows Server 2022 licenciado |

#### ▸ Servidor de Banco de Dados

| Campo | Especificação |
| --- | --- |
| **Placa-Mãe** | Compatível com expansão de memória RAM. Marcas de referência: Asus, Intel, MSI, Gigabyte. |
| **Processador** | Intel Core i5 12ª geração ou superior · AMD Ryzen 5 5600 ou superior |
| **Memória RAM** | 8 GB |
| **Armazenamento** | SSD 1 TB — obrigatório |
| **Sistema Operacional** | Debian 13 |
| **Banco de Dados** | PostgreSQL 16 |

---

### 4.3 De 11 a 20 Usuários

> ⚠️ **Obrigatório** — dois servidores separados (Aplicação e Banco de Dados).

#### ▸ Servidor de Aplicação

| Campo | Especificação |
| --- | --- |
| **Placa-Mãe** | Compatível com expansão de memória RAM. Marcas de referência: Asus, Intel, MSI, Gigabyte. |
| **Processador** | Intel Core i5 12ª geração ou superior · AMD Ryzen 5 5600 ou superior |
| **Memória RAM** | 16 GB |
| **Armazenamento** | SSD 500 GB — obrigatório |
| **Sistema Operacional** | Microsoft Windows Server 2022 licenciado |

#### ▸ Servidor de Banco de Dados

| Campo | Especificação |
| --- | --- |
| **Placa-Mãe** | Compatível com expansão de memória RAM. Marcas de referência: Asus, Intel, MSI, Gigabyte. |
| **Processador** | Intel Core i5 12ª geração ou superior · AMD Ryzen 5 5600 ou superior |
| **Memória RAM** | 16 GB |
| **Armazenamento** | SSD 1 TB — obrigatório |
| **Sistema Operacional** | Debian 13 |
| **Banco de Dados** | PostgreSQL 16 |

---

### 4.4 De 21 a 40 Usuários

> ⚠️ **Obrigatório** — dois servidores separados (Aplicação e Banco de Dados).

#### ▸ Servidor de Aplicação

| Campo | Especificação |
| --- | --- |
| **Placa-Mãe** | Compatível com expansão de memória RAM. Marcas de referência: Asus, Intel, MSI, Gigabyte. |
| **Processador** | Intel Xeon E-2300 ou superior · AMD Ryzen 7 5700 ou superior |
| **Memória RAM** | 32 GB |
| **Armazenamento** | SSD 500 GB — obrigatório |
| **Sistema Operacional** | Microsoft Windows Server 2022 licenciado |

#### ▸ Servidor de Banco de Dados

| Campo | Especificação |
| --- | --- |
| **Placa-Mãe** | Compatível com expansão de memória RAM. Marcas de referência: Asus, Intel, MSI, Gigabyte. |
| **Processador** | Intel Xeon E-2300 ou superior · AMD Ryzen 7 5700 ou superior |
| **Memória RAM** | 32 GB |
| **Armazenamento** | SSD 1 TB — obrigatório, preferencialmente em RAID 1 |
| **Sistema Operacional** | Debian 13 |
| **Banco de Dados** | PostgreSQL 16 |

---

### 4.5 Acima de 40 Usuários

Ambientes com mais de 40 usuários simultâneos requerem dimensionamento especializado, considerando volume de transações, número de terminais, integrações e infraestrutura disponível.

> ℹ️ Entre em contato com o setor de TI da Desbravador para avaliação e dimensionamento adequado ao seu ambiente.
> **Desbravador Software Ltda.**  
>  🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

---

## 5. Hardwares Complementares (Todas as Configurações)

### 5.1 Armazenamento

- SSD 500 GB para o servidor de aplicação e SSD 1 TB para o servidor de banco de dados (marcas de referência: Samsung, Kingston, WD).
- Servidores com dados de missão crítica devem usar RAID Nível 1 ou 1+0.

### 5.2 Dispositivos de Backup

- HD externo, gravador de CD/DVD, Pen Drive, fita ou armazenamento em nuvem (ex.: Google Drive).
- **IMPORTANTE:** dispositivos externos de backup devem ser conectados ao servidor apenas no momento da realização do backup.
- Um local de backup externo (nuvem) deve ser configurado pela equipe de TI do cliente para backup completo do banco de dados e arquivos de aplicação.

### 5.3 Rede

- **Placa de rede:** Gigabit Ethernet 100/1000 Mbps (pode ser on-board). Marcas de referência: 3COM, Encore, TP-Link.
- **Switch:** portas 100/1000 Mbps. Marcas de referência: Dell, HP, 3COM, Encore, TP-Link.
- ⚠️ A velocidade de comunicação é limitada pelo componente mais lento — placa de rede e switch devem ter a mesma capacidade.
- Recomenda-se redundância de placa de rede nos servidores.

### 5.4 URL obrigatória — liberação em proxy/firewall de saída

> ⚠️ O endereço `https://servicos.desbravador.com.br/` deve estar **permitido (bypass)** em proxies, filtros de conteúdo e firewalls de saída. O bloqueio desta URL impede o funcionamento de serviços essenciais do sistema.

### 5.5 Proteção Elétrica

- **Nobreak (UPS)** para cada servidor — indispensável para proteger o banco de dados contra quedas de energia.

---

## 6. Estações de Trabalho

| Componente | Especificação |
| --- | --- |
| **Processador** | Intel Core i3 10ª geração ou superior · AMD X4 Quad-Core |
| **Memória RAM** | 8 GB |
| **Armazenamento** | SSD 500 GB |
| **Placa de Rede** | Gigabit Ethernet 100/1000 Mbps (pode ser on-board) |
| **Portas Seriais** | Obrigatório para conexão com impressoras fiscais |
| **Sistema Operacional** | Microsoft Windows 11 (Professional ou Home), licenciado |
| **Antivírus** | Obrigatório (solução licenciada) |

---

## 7. Concentradoras Homologadas

| Fabricante | Modelo | Tipo de Comunicação |
| --- | --- | --- |
| Companytec | Company CBC 01 | Serial |
| Companytec | Company CBC 02 | Serial |
| Companytec | Company CBC 03 | Serial |
| Companytec | Company CBC 04 | Serial |
| Companytec | Company CBC 05 | Serial |
| Companytec | Company CBC 06 | Serial e TCP |
| Companytec | Horustech | Serial e TCP |
| Vwtech | VW Tech / Control Tech | Serial e TCP |
| Wayne | Fusion | Serial e TCP |
| Hiro | Hiro | Serial, USB e TCP |

> ℹ️ Qualquer equipamento que emule o protocolo Companytec pode ser utilizado com o Gas Station.

---

## 8. Medidores de Tanque Homologados

| Fabricante | Modelos | Tipo de Comunicação |
| --- | --- | --- |
| Telemed | Todos os modelos | Serial |
| Veeder Root | Todos os modelos | Serial |

---

## 9. Impressoras Fiscais Homologadas

| Fabricante | Modelos |
| --- | --- |
| **Daruma** | FS-600, FS-700H, FS-700L, FS-700M, MACH 1, MACH 2, MACH 3 |
| **Elgin** | FIT 1E |
| **Epson** | TM-88 FB, TM-88 FB II, TM-88 FB III, T81 FB II, T81 FB III, TM-T800F, TM-T900F (Blindada) |
| **Bematech** | MP-2100 TH FI, MP-2000 TH FI, MP-4000 TH FI, MP-4200 TH FI (Blindada), MP-4200 TH FI II (Blindada), MP-3000 TH FI |
| **Sweda** | ST120, ST20 |

---

## 10. Balanças Homologadas

| Fabricante | Modelo |
| --- | --- |
| Filizola | CS15 |
| Toledo | Prix 3 |
| Toledo | Prix 5 |

---

## 11. Periféricos Homologados

O sistema possui integração desenvolvida e homologada com os seguintes periféricos:

- 💳 [Pinpads homologados](./../../perifericos/pinpads-homologados.md)
- 💳 [Sistemas de TEF homologados](./../../perifericos/tef-homologados.md)
- 🖨️ [Impressoras não fiscais homologadas](./../../perifericos/impressoras-homologadas.md)

---

## 12. Contato e Suporte

**Desbravador Software Ltda.**  
 🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

Para dúvidas técnicas durante a implantação, a equipe Desbravador estará disponível para esclarecimentos.
