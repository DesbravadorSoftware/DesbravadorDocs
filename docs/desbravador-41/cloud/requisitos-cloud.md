# Requisitos para Instalação em Nuvem (Cloud)

**Sistema:** Desbravador 4.1 / 3.1 / 3.0 Smart  
**Modalidade:** Cloud — Plataforma AutoSky / Sky.One  
**Público:** Cliente hoteleiro / Equipe de TI

---

## A.1 Visão Geral

A solução é implantada em ambiente cloud utilizando a plataforma da Sky.One, por meio da oferta **AutoSky**, garantindo alta disponibilidade, segurança e escalabilidade para operação dos sistemas.

A arquitetura é baseada em modelo virtualizado e distribuído, com camadas independentes para aplicação, banco de dados e serviços auxiliares.

O ambiente contempla:

- Infraestrutura em nuvem com recursos escaláveis (CPU, memória e disco).
- Isolamento lógico entre ambientes (produção, homologação, testes).
- Camadas independentes para aplicação e banco de dados.
- Armazenamento de alto desempenho (SSD/NVMe).
- Recursos de segurança: firewall, controle de acesso e monitoramento.

---

## A.2 Provedor Cloud

A Sky.One é responsável pela disponibilização da infraestrutura cloud:

- Data centers com alta disponibilidade.
- Infraestrutura física (servidores, storage e rede).
- Virtualização e orquestração dos recursos.
- Monitoramento de infraestrutura.
- Segurança perimetral.

A plataforma **AutoSky** permite a gestão simplificada do ambiente, com provisionamento ágil e controle centralizado dos recursos.

---

## A.3 Modelo de Responsabilidade Compartilhada

| Responsabilidade | Sky.One / AutoSky | Desbravador | Cliente |
|------------------|:-----------------:|:-----------:|:-------:|
| Infraestrutura física (hardware, energia, refrigeração) | ✔ | | |
| Rede e conectividade da plataforma cloud | ✔ | | |
| Virtualização e disponibilidade da plataforma | ✔ | | |
| Segurança física e perimetral da infraestrutura | ✔ | | |
| SLA de disponibilidade dos recursos contratados | ✔ | | |
| Sistema operacional das máquinas virtuais | | ✔ | |
| Instalação, configuração e atualização das aplicações | | ✔ | |
| Gerenciamento do banco de dados (PostgreSQL) | | ✔ | |
| Segurança lógica (usuários, acessos, permissões) | | ✔ | |
| Backups e políticas de retenção de dados | | ✔ | ✔ |
| Monitoramento de aplicações e serviços | | ✔ | ✔ |
| Atualizações, patches e hardening dos sistemas | | ✔ | |
| Link de internet dedicado com redundância | | | ✔ |
| Equipamentos de rede local (switch, roteador, cabos) | | | ✔ |
| Estações de trabalho e periféricos (impressoras, etc.) | | | ✔ |
| Certificado digital (NF-e / NFC-e) — aquisição e renovação | | | ✔ |
| Criação de usuário Windows para integração AutoSky | | | ✔ |
| Configuração e manutenção da VPN local (impressão PDV) | | | ✔ |
| Repasse do IP da VPN para a equipe de infra (AutoSky) | | | ✔ |
| Licenças de acesso RDS (CALs) para os usuários | | | ✔ |
| Treinamento e capacitação dos usuários finais | | | ✔ |
| Segurança física das estações e periféricos locais | | | ✔ |

**Resumo Executivo**

| Campo | Valor |
|-------|-------|
| Modelo | Cloud gerenciada (IaaS com camada de gestão) |
| Provedor | Sky.One |
| Plataforma | AutoSky |
| Arquitetura | Distribuída e escalável |
| Responsabilidade | Compartilhada (infraestrutura × aplicação × cliente) |

---

## A.4 Configuração do Cliente para Acesso via AutoSky

Para que os usuários acessem o ambiente cloud, é necessário configurar corretamente cada computador cliente antes do primeiro acesso.

### A.4.1 Pasta de Executáveis

- A pasta de executáveis do Desbravador deve estar acessível no perfil do usuário dentro do ambiente AutoSky.
- O mapeamento é realizado pelo Analista de Implantação da Desbravador na configuração inicial.
- Atualizações de versão são centralizadas no servidor — nenhuma ação necessária nos clientes.

### A.4.2 Base de Dados

- A base de dados fica hospedada no servidor cloud. Nenhuma base local é necessária no cliente.
- A string de conexão é configurada pelo Analista de Implantação da Desbravador.
- O cliente não tem acesso direto ao banco de dados — toda comunicação ocorre via camada de aplicação.

> ℹ️ **Backup da Base**  
> A política de backup é responsabilidade da Desbravador no ambiente cloud. Confirmar frequência, retenção e local de armazenamento dos backups antes do go-live.

### A.4.3 Certificado Digital (NF-e / NFC-e)

- Certificado digital A1 (arquivo `.pfx`) ou A3 (token/smartcard) válido e dentro da validade.
- O certificado deve ser instalado no servidor de aplicação cloud pelo Analista de Implantação.
- A renovação é responsabilidade do cliente — comunicar a Desbravador com **mínimo de 15 dias** de antecedência.
- Para A3 (token físico): verificar viabilidade de redirecionamento USB no AutoSky com a Sky.One antes da contratação.

> ⚠️ **Atenção — Certificado Digital**
> - Certificado vencido impede a emissão de documentos fiscais.
> - Comunicar a Desbravador com mínimo de 15 dias antes do vencimento.
> - Não compartilhar a senha do certificado por canais não seguros.

### A.4.4 Impressão de PDV — Configuração da Máquina Local e VPN

A impressão de documentos PDV a partir do ambiente cloud requer que as impressoras físicas do hotel sejam acessíveis pelo servidor remoto. São necessários dois procedimentos na máquina onde as impressoras estão conectadas:

---

#### Passo 1 — Criação do Usuário Windows Dedicado

Crie um usuário Windows específico para a integração com o AutoSky:

1. Abra o **Gerenciamento do Computador**: clique com o botão direito em "Este Computador" → "Gerenciar" → "Usuários e Grupos Locais" → "Usuários".
2. Clique com o botão direito na área de usuários → **"Novo usuário..."**
3. Preencha o nome do usuário (ex.: `autosky`) e defina uma senha forte. Anote para repasse à infra.
4. **Desmarque** a opção "O usuário deve alterar a senha no próximo logon".
5. **Marque** a opção **"A senha nunca expira"**.
6. Clique em "Criar" e depois em "Fechar".
7. Localize o usuário criado → botão direito → "Propriedades" → aba "Membro de".
8. Clique em "Adicionar", insira `Administradores` e confirme — o usuário deve ser **Administrador local**.
9. **Repasse o nome do usuário e a senha para a equipe de infra da Sky.One** para inclusão no script de inicialização do AutoSky.

> ⚠️ **Segurança do Usuário**
> - Este usuário deve ser usado exclusivamente para a integração AutoSky.
> - Registre as credenciais em local seguro (cofre de senhas). Não envie por e-mail sem criptografia.
> - Se a senha precisar ser alterada, comunicar imediatamente a equipe de infra da Sky.One para atualização no script.

---

#### Passo 2 — Configuração da VPN na Máquina Local

Configure a VPN na mesma máquina onde as impressoras estão conectadas e compartilhadas:

1. Acesse: **Configurações → Rede e Internet → VPN → "Adicionar uma conexão VPN"**.
2. Preencha os dados da VPN conforme fornecido pela equipe de infra da Sky.One.
3. Salve e conecte a VPN.
4. Após conectar, verifique o IP atribuído: abra o **Prompt de Comando (CMD)** e execute `ipconfig`. Localize o adaptador de VPN e anote o **endereço IPv4**.
5. **Repasse o IP obtido para a equipe de infra da Sky.One** para inclusão no script de inicialização do AutoSky.
6. Configure a VPN para conectar automaticamente ao iniciar o Windows (ou conforme orientação da equipe de infra).

> ℹ️ **Informações a repassar para a equipe de infra da Sky.One**
> - ✅ Usuário Windows criado (nome e senha)
> - ✅ IP da VPN atribuído à máquina local
> - ✅ Nome das impressoras compartilhadas na rede local

---

#### Resumo — Configuração para Impressão PDV

| Item | Detalhe |
|------|---------|
| **Máquina** | Computador local onde as impressoras estão conectadas e compartilhadas |
| **Usuário Windows** | Criar usuário dedicado (ex.: `autosky`), adicionar ao grupo Administradores, marcar "Senha não expira" |
| **VPN** | Instalar e configurar VPN na mesma máquina das impressoras; anotar o IP atribuído |
| **Repasse para infra** | Usuário + senha + IP da VPN → equipe Sky.One (script de inicialização do AutoSky) |
| **Impressoras** | Garantir que estejam compartilhadas na rede local com driver instalado |
| **Link mínimo** | 10 Mbps simétrico estável · Latência < 50 ms entre cliente e nuvem |

---

## A.5 Rede, VPN e Segurança

- Acesso ao ambiente AutoSky via navegador web ou cliente RDP, conforme configuração da plataforma.
- Recomenda-se link de internet dedicado com contingência (ex.: 4G como backup).
- Firewall perimetral gerenciado pela Sky.One — regras adicionais devem ser solicitadas formalmente.
- Autenticação de usuários: política de senha forte; habilitar MFA se disponível no AutoSky.
- Segregação de acesso por perfil de usuário configurada pela Desbravador.
- Todos os acessos externos devem ser realizados por canais seguros (VPN ou HTTPS).

---

## A.6 Licenciamento em Ambiente Cloud

- **Windows Server:** conforme modelo contratado com a Sky.One (BYOL ou license included).
- **PostgreSQL:** gratuito (licença BSD).
- **Desbravador:** definido no contrato comercial — consultar equipe Desbravador.
- **CALs (RDS):** responsabilidade do cliente conforme número de usuários simultâneos.

---

## A.7 Responsabilidades e SLAs

| Item | Detalhe |
|------|---------|
| **Disponibilidade da infraestrutura** | SLA definido no contrato com a Sky.One |
| **Disponibilidade da aplicação** | Monitoramento e resposta a incidentes pela Desbravador em horário comercial |
| **Janela de manutenção** | Comunicada com antecedência mínima de 48h |
| **Suporte técnico Desbravador** | Conforme contrato de suporte — consultar equipe comercial |
| **Suporte infraestrutura Sky.One** | Direto com a Sky.One via canais AutoSky |
| **Backup** | Política definida pela Desbravador — frequência, retenção e restore a combinar com o cliente |

---

## A.8 Contato e Suporte

**Desbravador Software Ltda.**  
🌐 [www.desbravador.com.br](https://www.desbravador.com.br)

- Para contratação e implantação em nuvem: equipe comercial Desbravador.
- Para suporte de infraestrutura cloud: acionar diretamente a Sky.One via plataforma AutoSky.
