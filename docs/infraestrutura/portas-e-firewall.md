# Padrão de Portas e Configuração de Firewall

> ⚠️ **Atenção — Segurança crítica**
> Portas abertas desnecessariamente na internet são vetores reais de invasão, ransomware e vazamento de dados. Toda porta listada neste documento deve ser acessível **apenas na rede interna ou via VPN**. Nunca exponha portas de aplicação, banco de dados ou serviços internos diretamente para a internet.

---

## Por que isso é importante

### O que acontece quando portas internas ficam expostas

Quando serviços internos são acessíveis diretamente pela internet, eles se tornam alvos de ataques automatizados que operam 24 horas por dia, 7 dias por semana. O processo começa com varreduras de portas — ferramentas que percorrem faixas de endereços IP em busca de serviços conhecidos. Uma vez identificado um serviço exposto, ferramentas especializadas tentam explorar vulnerabilidades conhecidas naquele serviço, testar credenciais padrão ou forçar autenticação por dicionário.

O risco não é teórico. Sistemas ERP e de hotelaria são alvos especialmente atrativos porque:

- **Concentram dados financeiros sensíveis** — transações de cartão (mesmo que tokenizadas), histórico de pagamentos, contas a receber e a pagar
- **Armazenam dados pessoais de hóspedes** — CPF, passaporte, endereço, dados de contato, preferências — informações com alto valor no mercado de dados roubados
- **Têm acesso direto ao PDV e ao TEF** — um atacante com acesso ao servidor de contas pode interceptar ou manipular transações em andamento
- **Operam em ambientes onde a TI é enxuta** — hotéis e restaurantes frequentemente não têm equipe de segurança dedicada, o que torna a superfície de ataque maior

### Vetores de ataque comuns em ambientes ERP expostos

**Exploração de banco de dados exposto:** bancos como PostgreSQL, quando acessíveis na internet sem autenticação forte ou restrição de IP, são varridos por scanners automatizados em questão de horas após a exposição. A partir de um banco comprometido, o atacante obtém acesso a toda a base de dados do cliente — incluindo senhas, configurações e dados transacionais.

**Ataque a serviços de sincronização e back office:** portas de sincronização entre filiais ou entre servidor e PDV raramente têm autenticação robusta — são projetadas para operar em rede confiável. Expostas na internet, tornam-se pontos de entrada sem resistência significativa.

**Ransomware via acesso a servidor de aplicação:** após obter acesso ao servidor, atacantes instalam ransomware que criptografa o banco de dados e os arquivos do sistema, tornando o ambiente completamente inoperante. No setor de hotelaria, isso significa incapacidade de fazer check-in, processar pagamentos ou acessar reservas — pressão enorme para pagamento de resgate.

**Movimentação lateral:** uma porta exposta raramente é o destino final do atacante. É a porta de entrada para movimentação lateral na rede interna, comprometendo outros sistemas, servidores de backup e credenciais de administrador.

### Rede interna, VPN e exposição pública — a distinção que importa

| Contexto | O que significa | Nível de risco |
| --- | --- | --- |
| Rede interna (LAN) | Tráfego restrito ao ambiente físico ou VLAN do cliente | Baixo — contanto que a rede interna seja segmentada |
| VPN autenticada | Túnel criptografado com autenticação de usuário/dispositivo | Aceitável — para acesso remoto legítimo |
| Internet pública | Qualquer endereço IP do mundo pode tentar conexão | Inaceitável para serviços internos |

> ℹ️ A Desbravador fornece o software — a segurança da infraestrutura de rede é responsabilidade do cliente (LICENCIADO) e da equipe de TI responsável pela implantação.

---

## Princípios de firewall para ambientes Desbravador

A configuração correta do firewall é a primeira e mais importante linha de defesa. Os princípios a seguir não são opcionais — são requisitos mínimos para operação segura.

**Princípio do menor privilégio:** abra apenas as portas estritamente necessárias para o funcionamento do sistema. Cada porta aberta é uma superfície de ataque potencial. Se não há necessidade operacional documentada, a porta deve estar fechada.

**Serviços internos ficam na rede interna:** qualquer porta da faixa 17000–17999 e 18500–18999 que opere no contexto "Local" deve ser acessível apenas dentro da rede do cliente. Nunca deve haver uma regra de firewall permitindo acesso externo a esses serviços.

**Banco de dados: acesso exclusivo pelo servidor de aplicação:** o PostgreSQL (porta 5432) jamais deve ter uma regra de firewall que permita conexão de fora do servidor de aplicação. A regra correta é: somente o IP do servidor de aplicação pode conectar na porta 5432, e apenas na rede interna.

**Acesso externo legítimo via VPN obrigatoriamente:** qualquer necessidade de acesso remoto — manutenção, suporte técnico, acesso de gestores externos — deve ser feita via VPN com autenticação forte. MFA (autenticação de múltiplos fatores) é fortemente recomendado.

**Monitoramento de tentativas de acesso não autorizado:** o firewall deve registrar tentativas de conexão em portas não autorizadas. Picos de tentativas de varredura são sinal precoce de reconhecimento de alvo — permitem ação preventiva antes de uma exploração efetiva.

**Revisão periódica das regras:** regras de firewall acumulam exceções ao longo do tempo. Cada nova regra adicionada deve ter justificativa documentada, responsável e prazo de revisão. Regras sem uso devem ser removidas.

---

## URLs obrigatórias — liberação em proxy e firewall de saída

O endereço abaixo deve estar **permitido (bypass)** em todos os proxies, filtros de conteúdo e firewalls de saída do cliente. O bloqueio desta URL impede o funcionamento de serviços essenciais do sistema Desbravador.

| URL | Protocolo | Porta | Finalidade |
| --- | --- | --- | --- |
| `https://servicos.desbravador.com.br/` | HTTPS | 443 | Serviços online do sistema Desbravador |

> ⚠️ **Atenção — Liberação obrigatória**
> Firewalls, proxies corporativos e soluções de filtragem de conteúdo (ex.: Fortinet, Sophos, pfSense com filtro de URL, Squid) podem bloquear este endereço por padrão. Verificar e adicionar a exceção antes da implantação. A ausência da liberação pode causar falhas silenciosas em funcionalidades do sistema que dependem de comunicação com os servidores da Desbravador.

---

## Faixas de portas por sistema

Entrar em contato com o suporte da Desbravador e verificar quais são as portas recomendadas.

[https://desbravador.movidesk.com/kb/pt-br/article/270137/orientacoes-de-padrao-de-portas-dos-aplicativos-dsl](https://desbravador.movidesk.com/kb/pt-br/article/270137/orientacoes-de-padrao-de-portas-dos-aplicativos-dsl)

> 🔴 **Nunca abra o PostgreSQL (porta 5432) para a internet.**
> Existem scanners automáticos que varrem a internet 24 horas por dia em busca de bancos de dados expostos. Um servidor PostgreSQL acessível publicamente sem VPN é detectado em minutos. A partir daí, tentativas de autenticação por força bruta, exploração de vulnerabilidades conhecidas e, em casos de configuração fraca, acesso direto sem senha são consequências praticamente certas. Um banco comprometido significa perda total de confidencialidade de todos os dados do cliente.

---

## Contato e Suporte

Dúvidas sobre a configuração de portas, integração de firewall ou arquitetura de rede para ambientes Desbravador devem ser encaminhadas ao suporte técnico:

- **Portal de suporte:** [suporte.desbravador.com.br](https://suporte.desbravador.com.br)
- **Base de conhecimento:** Artigo de referência original — *"Orientações de padrão de portas dos aplicativos DSL"* (Eduardo Henrique Kawaguchi, atualizado em 31/05/2026)

> ℹ️ Este documento é uma referência técnica para a equipe de TI do cliente. A Desbravador não realiza configuração de firewall ou infraestrutura de rede — essa responsabilidade é do cliente ou do fornecedor de infraestrutura contratado. Em caso de dúvida sobre a configuração correta, consulte o suporte antes de abrir regras de firewall.

---

*Documento gerado em 31/05/2026 — baseado na versão v.40 das orientações de portas DSL.*
