---
title: Exemplo — Relatório Executivo
---

# Exemplo de Relatório Executivo

Demonstração do componente `<PrintReport>` com todos os sub-componentes.
Clique em **Imprimir / Salvar PDF** para ver o resultado profissional.

---

<PrintReport
  title="Relatório de Desempenho Hoteleiro"
  subtitle="Análise consolidada de ocupação, receita e indicadores operacionais"
  report-label="Relatório Executivo"
  company="Pousada Central Ltda."
  period="Janeiro – Junho / 2026"
  printed-by="Maria Silva"
  app-name="Desbravador 4.1"
  footer-text="Desbravador Software Ltda."
  confidential="Uso Interno"
  :show-cover="true"
  cover-notes="Este relatório é de uso exclusivo da diretoria. Proibida a reprodução sem autorização."
>

<PrintSection title="Resumo Executivo" eyebrow="Visão Geral">

<PrintSummary>

O semestre de **Janeiro a Junho de 2026** encerrou com **ocupação média de 78,4%**, superando a meta de 72% e registrando crescimento de **+8,7 p.p.** em relação ao mesmo período do ano anterior. A receita total atingiu **R$ 2.847.320,00**, com aumento de **+14,2%** sobre o semestre anterior.

O ticket médio por diária cresceu de R$ 340 para R$ 389, impulsionado pela revisão tarifária aplicada em março e pelo aumento na proporção de reservas diretas (de 38% para 51%). O RevPAR consolidado alcançou **R$ 305/quarto**, posicionando a unidade entre os três melhores desempenhos da rede.

</PrintSummary>

</PrintSection>

<PrintSection title="Indicadores-Chave" eyebrow="KPIs">

<PrintKPIGrid :cols="4">
  <PrintKPICard
    label="Ocupação Média"
    value="78,4%"
    change="+8,7 p.p. vs. 2025"
    change-dir="up"
    trend="up"
    note="Meta: 72,0%"
  />
  <PrintKPICard
    label="Receita Total"
    value="R$ 2,85M"
    change="+14,2% vs. sem. anterior"
    change-dir="up"
    trend="up"
    note="Jan – Jun 2026"
  />
  <PrintKPICard
    label="Ticket Médio / Diária"
    value="R$ 389"
    change="+R$ 49 vs. 2025"
    change-dir="up"
    trend="up"
    note="Crescimento de 14,4%"
  />
  <PrintKPICard
    label="RevPAR"
    value="R$ 305"
    change="+R$ 42 vs. 2025"
    change-dir="up"
    trend="neutral"
    note="Revenue per Available Room"
  />
</PrintKPIGrid>

<PrintKPIGrid :cols="4">
  <PrintKPICard
    label="Reservas Diretas"
    value="51%"
    change="+13 p.p. vs. 2025"
    change-dir="up"
    trend="up"
    note="Redução de comissionamento"
  />
  <PrintKPICard
    label="NPS Médio"
    value="72"
    change="+5 pts vs. 2025"
    change-dir="up"
    trend="up"
    note="Escala 0–100"
  />
  <PrintKPICard
    label="Cancelamentos"
    value="4,2%"
    change="-1,8 p.p. vs. 2025"
    change-dir="down"
    trend="down"
    note="Taxa sobre reservas confirmadas"
  />
  <PrintKPICard
    label="Custo por Quarto"
    value="R$ 128"
    change="+R$ 9 vs. 2025"
    change-dir="up"
    trend="warn"
    note="Atenção: acima da meta"
  />
</PrintKPIGrid>

</PrintSection>

<PrintSection title="Receita por Período" eyebrow="Análise Financeira" :page-break="true">

<PrintDataTable
  title="Receita Mensal Consolidada — Janeiro a Junho 2026"
  :columns="[
    { key: 'mes',        label: 'Mês',             align: 'left'  },
    { key: 'quartos',    label: 'Quartos Ocupados', align: 'center', type: 'number' },
    { key: 'ocupacao',   label: 'Ocupação',         align: 'center' },
    { key: 'ticket',     label: 'Ticket Médio',     align: 'right', type: 'currency' },
    { key: 'receita',    label: 'Receita',           align: 'right', type: 'currency', bold: true },
    { key: 'variacao',   label: 'Var. vs. 2025',    align: 'right' },
  ]"
  :rows="[
    { mes: 'Janeiro',    quartos: 1.240, ocupacao: '67,2%', ticket: 'R$ 352,00', receita: 'R$ 436.480,00', variacao: '+8,4%'  },
    { mes: 'Fevereiro',  quartos: 1.380, ocupacao: '74,8%', ticket: 'R$ 365,00', receita: 'R$ 503.700,00', variacao: '+11,2%' },
    { mes: 'Março',      quartos: 1.510, ocupacao: '81,9%', ticket: 'R$ 389,00', receita: 'R$ 587.390,00', variacao: '+16,8%' },
    { mes: 'Abril',      quartos: 1.490, ocupacao: '80,8%', ticket: 'R$ 395,00', receita: 'R$ 588.550,00', variacao: '+15,3%' },
    { mes: 'Maio',       quartos: 1.460, ocupacao: '79,2%', ticket: 'R$ 401,00', receita: 'R$ 585.460,00', variacao: '+14,9%' },
    { mes: 'Junho',      quartos: 1.380, ocupacao: '74,8%', ticket: 'R$ 396,00', receita: 'R$ 546.480,00', variacao: '+13,7%' },
    { mes: 'TOTAL',      quartos: 8.460, ocupacao: '78,4%', ticket: 'R$ 389,00', receita: 'R$ 2.848.060,00', variacao: '+13,4%', _total: true },
  ]"
/>

<PrintInfoBlock title="Destaque" variant="success">
Março foi o melhor mês do período, atingindo 81,9% de ocupação com ticket médio de R$ 389,
resultado direto da revisão tarifária aplicada em 01/03/2026.
</PrintInfoBlock>

</PrintSection>

<PrintSection title="Canal de Vendas" eyebrow="Distribuição">

<PrintDataTable
  title="Reservas por Canal — Acumulado Jan–Jun 2026"
  :columns="[
    { key: 'canal',      label: 'Canal',        align: 'left'   },
    { key: 'reservas',   label: 'Reservas',     align: 'right', type: 'number' },
    { key: 'participacao', label: 'Part. %',    align: 'center' },
    { key: 'ticket',     label: 'Ticket Médio', align: 'right', type: 'currency' },
    { key: 'receita',    label: 'Receita',      align: 'right', type: 'currency', bold: true },
  ]"
  :rows="[
    { canal: 'Site Próprio / Reserva Direta', reservas: 4.314, participacao: '51,0%', ticket: 'R$ 405,00', receita: 'R$ 1.747.170,00' },
    { canal: 'Booking.com',                   reservas: 2.115, participacao: '25,0%', ticket: 'R$ 378,00', receita: 'R$   799.470,00' },
    { canal: 'Expedia / Hotels.com',          reservas:   930, participacao: '11,0%', ticket: 'R$ 361,00', receita: 'R$   335.730,00' },
    { canal: 'Agências de Viagem (OTA)',      reservas:   676, participacao: '8,0%',  ticket: 'R$ 344,00', receita: 'R$   232.544,00' },
    { canal: 'Corporativo / Convênios',       reservas:   423, participacao: '5,0%',  ticket: 'R$ 412,00', receita: 'R$   174.276,00' },
    { canal: 'TOTAL', reservas: 8.458, participacao: '100%', ticket: 'R$ 389,00', receita: 'R$ 3.289.190,00', _total: true },
  ]"
  compact
/>

</PrintSection>

<PrintSection title="Observações e Próximos Passos" eyebrow="Conclusão" :page-break="true">

<PrintInfoBlock title="Pontos de Atenção" variant="warning">
O custo operacional por quarto cresceu 7,6% acima da inflação do período (IPCA: 4,2%).
Recomenda-se revisão do contrato de fornecedores de limpeza e manutenção no próximo trimestre.
</PrintInfoBlock>

<PrintInfoBlock title="Oportunidades Identificadas">
A janela de baixa ocupação em janeiro e junho pode ser explorada com pacotes corporativos
e eventos de pequeno porte (capacidade: até 80 pessoas), potencialmente elevando a ocupação
para 74% nesses meses.
</PrintInfoBlock>

<PrintInfoBlock title="Ações Aprovadas para 2º Semestre" variant="success">

- Renovação do motor de reservas com integração nativa ao WhatsApp Business
- Implementação de revenue management dinâmico com base em demanda em tempo real
- Meta de ocupação: 80% no 2º semestre e 82% no 4º trimestre

</PrintInfoBlock>

<PrintSignatureBlock
  place-date="São Paulo, 3 de julho de 2026"
  :signatures="[
    { name: 'Carlos Andrade',  role: 'Diretor Geral' },
    { name: 'Maria Silva',     role: 'Gerente de Revenue' },
    { name: 'João Costa',      role: 'Controller Financeiro' },
  ]"
/>

</PrintSection>

</PrintReport>
