# Sistemas de TEF Homologados

> ℹ️ Esta é uma página compartilhada entre todos os sistemas Desbravador. Última atualização: 24/05/2026.

---

## O que é TEF

TEF (Transferência Eletrônica de Fundos) é o sistema que permite o processamento integrado de pagamentos com cartão de crédito, débito e demais modalidades eletrônicas diretamente no ERP/PDV. A integração TEF elimina a necessidade de equipamentos autônomos de captura, centralizando a autorização das transações dentro do fluxo de venda do sistema.

---

## Sistemas Homologados

| Sistema | Fornecedor | Modelo de integração |
| --- | --- | --- |
| **FiServ** | FiServ (anteriormente First Data / Bin) | TEF dedicado / discado |
| **TEF Scope** | Conexão Itaú — Itaú Unibanco | TEF dedicado via Scope |

> ℹ️ A contratação dos serviços de TEF é feita diretamente pelo cliente com o adquirente ou banco. A Desbravador realiza a integração técnica — não intermedia a contratação comercial.

---

## FiServ

A FiServ é uma empresa global de tecnologia financeira, resultante da fusão entre a First Data e a Fiserv. No Brasil, operou historicamente sob as marcas First Data e Bin, e atualmente consolida seus serviços de captura e processamento de pagamentos sob a marca FiServ.

A integração com os sistemas Desbravador é realizada via módulo de TEF dedicado, com comunicação entre o PDV e o pinpad homologado instalado na estação de trabalho. A autorização das transações ocorre de forma transparente ao operador, sem necessidade de equipamento autônomo.

> ⚠️ **Atenção** — Antes de contratar qualquer solução de TEF, confirme a versão homologada com a equipe Desbravador para garantir compatibilidade com o sistema e módulos utilizados.

---

## TEF Scope / Conexão Itaú

O TEF Scope é a solução de captura eletrônica de pagamentos oferecida pelo Itaú Unibanco por meio da plataforma Conexão Itaú. Permite o processamento de transações de crédito, débito e outras modalidades com integração direta ao fluxo de venda do ERP/PDV.

A integração com os sistemas Desbravador utiliza o protocolo Scope, com comunicação entre a aplicação de TEF instalada na estação e o pinpad homologado. A configuração da solução exige habilitação prévia junto ao Itaú Unibanco.

> ⚠️ **Atenção** — Antes de contratar qualquer solução de TEF, confirme a versão homologada com a equipe Desbravador para garantir compatibilidade com o sistema e módulos utilizados.

---

## Requisitos de Infraestrutura para TEF

Para que a integração TEF funcione corretamente em qualquer um dos sistemas homologados, os seguintes requisitos devem ser atendidos na estação de trabalho e na infraestrutura de rede:

| Requisito | Detalhe |
| --- | --- |
| **Conexão com a internet** | Estável e dedicada — oscilações causam falha ou timeout nas transações |
| **Pinpad homologado** | Instalado e conectado à estação que processa os pagamentos |
| **Drivers do pinpad** | Instalados, atualizados e compatíveis com o sistema operacional em uso |
| **Porta de comunicação** | USB ou serial disponível e livre de conflitos |
| **Aplicação de TEF** | Instalada, configurada e ativa na estação antes do uso |
| **Firewall** | Portas de comunicação liberadas conforme especificação do adquirente ou processador |

> ⚠️ **Atenção** — A instalação e configuração da aplicação de TEF deve ser realizada por técnico habilitado pelo adquirente. A Desbravador não realiza instalação de software de terceiros.

Para verificar os modelos de pinpad compatíveis com os sistemas de TEF homologados:

- 💳 [Pinpads homologados](./pinpads-homologados.md)

---

## Observações Importantes

- A homologação de um sistema de TEF é específica por versão de software. Uma atualização do sistema Desbravador ou da aplicação de TEF pode exigir nova validação de compatibilidade.
- Em caso de troca de adquirente ou processador, verificar com a equipe Desbravador se a nova solução é suportada antes de realizar a migração.
- Problemas de comunicação TEF (timeout, falha de conexão, transação não autorizada) devem ser investigados primeiramente junto ao adquirente, que dispõe de ferramentas de diagnóstico de transação.
- O TEF móvel (processamento em mesas ou ambientes externos) pode ter requisitos adicionais de hardware e rede — consultar a Desbravador para orientação específica.

---

## Contato e Suporte

**Desbravador Software Ltda.**  
 🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

Para dúvidas sobre compatibilidade, versões homologadas ou integração de novos sistemas de TEF, entre em contato com a equipe técnica da Desbravador.
