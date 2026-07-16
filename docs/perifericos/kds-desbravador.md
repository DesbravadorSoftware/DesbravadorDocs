# Desbravador KDS — Requisitos de Hardware e Infraestrutura

**Sistema:** Desbravador KDS (Kitchen Display System) — Integrado ao PDV  
**Integra com:** POS Fast by Desbravador · Desbravador Enterprise / 4.0  
**Público:** Cliente / Equipe de TI / Fornecedor de hardware

---

## Histórico de Revisões

| Versão | Data | Descrição | Responsável |
| --- | --- | --- | --- |
| 1.0 | Jul/2026 | Criação do documento | Desbravador Software Ltda. |

---

> ℹ️ Esta é uma página compartilhada entre os sistemas Desbravador que integram com o módulo KDS.

## 1. Objetivo

Este documento apresenta os requisitos técnicos recomendados para instalação e utilização do sistema KDS — Kitchen Display System — integrado ao PDV.

O KDS permite que pedidos realizados no PDV sejam enviados e visualizados em monitores instalados nos diferentes setores da cozinha, como cozinha quente, cozinha fria, bar, confeitaria, expedição ou demais áreas operacionais.

---

## 2. Arquitetura de Funcionamento

O sistema utiliza uma arquitetura centralizada, composta por:

- Uma máquina principal com sistema operacional Windows.
- Serviço local executado por meio do ambiente XAMPP.
- Comunicação com o sistema de PDV.
- Monitores, tablets, computadores ou Smart TVs acessando o KDS por navegador.
- Rede local conectando todos os dispositivos.

A máquina principal funciona como servidor do KDS.

Os demais dispositivos da cozinha não precisam instalar o sistema. O acesso é realizado por meio de um navegador Google Chrome, utilizando o endereço de rede disponibilizado pelo servidor.

---

## 3. Requisitos da Máquina Principal — Servidor KDS

A máquina principal será responsável por executar:

- Sistema operacional Windows.
- Ambiente XAMPP.
- Aplicação do KDS.
- Comunicação com o PDV.
- Disponibilização do sistema para os demais monitores da cozinha.

### 3.1 Requisitos mínimos

| Campo | Especificação |
| --- | --- |
| **Sistema Operacional** | Windows 10 ou superior |
| **Processador** | Intel Core i3, AMD Ryzen 3 ou equivalente |
| **Memória RAM** | 8 GB |
| **Armazenamento disponível** | 20 GB (preferencialmente SSD) |
| **Rede** | Placa Ethernet ou Wi-Fi |
| **Navegador** | Google Chrome atualizado |
| **Periféricos** | Mouse e teclado para instalação, configuração e manutenção |
| **Endereço IP** | Fixo ou reserva de IP configurada na rede local |
| **XAMPP** | Instalado e configurado |

### 3.2 Configuração recomendada

| Campo | Especificação |
| --- | --- |
| **Sistema Operacional** | Windows 11 Pro |
| **Processador** | Intel Core i5, AMD Ryzen 5 ou superior |
| **Memória RAM** | 16 GB |
| **Armazenamento** | SSD com pelo menos 50 GB disponíveis |
| **Rede** | Conexão cabeada |
| **Proteção Elétrica** | Nobreak para proteção contra oscilações e quedas de energia |
| **Inicialização** | Automática dos serviços do KDS e do XAMPP |

### 3.3 Observações

A máquina principal deve permanecer ligada durante todo o período de operação do estabelecimento.

> ⚠️ Caso o servidor seja desligado, desconectado da rede ou apresente falha, os demais dispositivos poderão perder temporariamente o acesso ao KDS.

Recomenda-se que a máquina utilizada como servidor não seja compartilhada com aplicações que consumam muitos recursos de processamento ou memória.

---

## 4. Requisitos dos Monitores de Cozinha

Os monitores de cozinha acessam o KDS por navegador e não necessitam de instalação local da aplicação.

Podem ser utilizados:

- Computadores Windows.
- Mini PCs.
- Notebooks.
- Tablets.
- Monitores com computador acoplado.
- Smart TVs com sistema Android TV.

### 4.1 Requisitos gerais

O dispositivo deve possuir:

- Acesso à mesma rede local do servidor KDS.
- Navegador Google Chrome atualizado.
- Tela com resolução mínima de 1280 × 720.
- Resolução recomendada de 1920 × 1080 — Full HD.
- Conexão de rede estável.
- Capacidade de manter o navegador aberto durante toda a operação.
- Fonte de energia permanente durante o uso.

---

## 5. Utilização em Computadores Windows

Para utilização em computadores Windows, recomenda-se:

| Campo | Especificação |
| --- | --- |
| **Sistema Operacional** | Windows 10 ou superior |
| **Memória RAM** | Mínimo 4 GB |
| **Navegador** | Google Chrome atualizado |
| **Periféricos** | Mouse e teclado para configuração inicial e manutenção |
| **Tela** | Pelo menos 15 polegadas |
| **Rede** | Cabeada ou Wi-Fi estável |

O uso de mouse e teclado facilita a operação, a atualização da página, a autenticação e eventuais configurações do dispositivo.

---

## 6. Utilização em Tablets

O KDS pode ser acessado por tablets por meio do Google Chrome.

| Campo | Especificação |
| --- | --- |
| **Sistema Operacional** | Android atualizado |
| **Tela** | Mínimo 10 polegadas |
| **Memória RAM** | Mínimo 4 GB |
| **Navegador** | Google Chrome atualizado |
| **Rede** | Wi-Fi estável |
| **Suporte** | Estrutura de fixação apropriada |
| **Energia** | Alimentação elétrica contínua |

> ℹ️ Para ambientes de cozinha, recomenda-se a utilização de capa protetora e suporte adequado contra umidade, gordura, calor e impactos.

---

## 7. Utilização em Smart TVs

O sistema também pode funcionar em Smart TVs, desde que o equipamento utilize o sistema operacional Android TV.

### Requisitos obrigatórios

| Campo | Especificação |
| --- | --- |
| **Sistema Operacional** | Android TV |
| **Navegador** | Google Chrome instalado ou navegador compatível com aplicações web modernas |
| **Periférico** | Mouse USB ou Bluetooth conectado |
| **Rede** | Mesma rede local do servidor KDS |
| **Resolução** | Mínima HD, preferencialmente Full HD |
| **Operação** | Capacidade de manter o navegador aberto durante a operação |

### Restrições

Não é garantido o funcionamento em Smart TVs que utilizem sistemas operacionais proprietários, como:

- Samsung Tizen.
- LG webOS.
- Roku TV.
- Sistemas sem suporte ao Google Chrome.
- Equipamentos que não permitam conexão de mouse.

> ⚠️ **Atenção** — Mesmo em dispositivos Android TV, deve ser realizada uma validação prévia do modelo do equipamento, pois alguns fabricantes podem limitar a instalação ou a execução do navegador.

---

## 8. Requisitos de Rede

Todos os dispositivos do KDS devem estar conectados à mesma rede local da máquina principal.

### Requisitos mínimos

- Rede Ethernet ou Wi-Fi.
- Comunicação liberada entre o servidor e os dispositivos.
- Endereço IP fixo ou reservado para a máquina principal.
- Ausência de bloqueios de firewall entre os equipamentos.
- Sinal Wi-Fi estável nos setores da cozinha.
- Roteador ou infraestrutura de rede compatível com a quantidade de dispositivos.

### Recomendação

Sempre que possível, a máquina principal e os dispositivos fixos devem utilizar conexão cabeada.

A conexão Wi-Fi pode ser utilizada em tablets ou locais onde não seja possível instalar cabeamento, desde que haja boa cobertura e estabilidade de sinal.

---

## 9. Acesso ao Sistema

O acesso ao KDS será realizado por meio de endereço de rede informado durante a implantação.

Exemplo:

```
http://192.168.0.100/kds
```

O endereço poderá variar conforme a configuração da rede do cliente.

> ℹ️ Recomenda-se criar um atalho do KDS na área de trabalho ou configurar o navegador para abrir automaticamente o sistema ao iniciar o dispositivo.

---

## 10. Recomendações Operacionais

Para garantir maior disponibilidade do KDS, recomenda-se:

- Manter a máquina principal sempre ligada.
- Configurar o XAMPP para iniciar automaticamente com o Windows.
- Configurar o navegador dos monitores para abrir o KDS automaticamente.
- Desabilitar suspensão automática e hibernação.
- Desabilitar protetor de tela durante a operação.
- Evitar atualizações automáticas do Windows durante o horário de funcionamento.
- Utilizar endereço IP fixo no servidor.
- Utilizar nobreak na máquina principal e nos equipamentos de rede.
- Manter o Google Chrome atualizado.
- Monitorar a qualidade da rede local.
- Restringir o uso dos dispositivos do KDS para outras finalidades.

---

## 11. Responsabilidades do Cliente

São de responsabilidade do cliente:

- Disponibilizar os equipamentos dentro dos requisitos indicados.
- Disponibilizar licenças válidas do sistema operacional.
- Disponibilizar rede local estável.
- Providenciar cabeamento, Wi-Fi e pontos de energia.
- Disponibilizar mouse e teclado quando necessários.
- Garantir que Smart TVs utilizem Android TV.
- Manter os equipamentos protegidos contra calor, umidade, gordura e impactos.
- Garantir acesso administrativo à máquina Windows durante a implantação.
- Disponibilizar profissional de TI quando forem necessárias configurações de rede ou firewall.

> ⚠️ **Atenção** — A Desbravador **NÃO** realiza montagem/desmontagem de hardware nem instalação de sistemas operacionais.

---

## 12. Considerações Finais

O desempenho e a disponibilidade do KDS dependem diretamente da qualidade da máquina principal, dos dispositivos de exibição e da infraestrutura de rede local.

A utilização de equipamentos abaixo dos requisitos mínimos, redes instáveis ou Smart TVs com sistemas não compatíveis poderá comprometer o funcionamento da solução.

> ℹ️ Antes da implantação, recomenda-se realizar uma validação técnica do ambiente, especialmente quando forem utilizadas Smart TVs, tablets ou equipamentos compartilhados com outros sistemas.

O documento separa requisitos mínimos, recomendados, rede, servidor, tablets e Smart TVs, deixando claro que Android TV é obrigatório nesse cenário.

---

## 13. Contato e Suporte

**Desbravador Software Ltda.**  
🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

Para dúvidas técnicas durante a implantação, a equipe Desbravador estará disponível para esclarecimentos.
