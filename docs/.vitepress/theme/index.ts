import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'

// Homepage
import HomeTable from './HomeTable.vue'

// Print Layout (legado)
import PrintLayout from './PrintLayout.vue'

// Print Report (novo sistema)
import PrintReport from './PrintReport.vue'
import PrintSection from './print/PrintSection.vue'
import PrintKPIGrid from './print/PrintKPIGrid.vue'
import PrintKPICard from './print/PrintKPICard.vue'
import PrintDataTable from './print/PrintDataTable.vue'
import PrintChartBlock from './print/PrintChartBlock.vue'
import PrintInfoBlock from './print/PrintInfoBlock.vue'
import PrintSummary from './print/PrintSummary.vue'
import PrintSignatureBlock from './print/PrintSignatureBlock.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.component('HomeTable', HomeTable)
    app.component('PrintLayout', PrintLayout)

    app.component('PrintReport', PrintReport)
    app.component('PrintSection', PrintSection)
    app.component('PrintKPIGrid', PrintKPIGrid)
    app.component('PrintKPICard', PrintKPICard)
    app.component('PrintDataTable', PrintDataTable)
    app.component('PrintChartBlock', PrintChartBlock)
    app.component('PrintInfoBlock', PrintInfoBlock)
    app.component('PrintSummary', PrintSummary)
    app.component('PrintSignatureBlock', PrintSignatureBlock)
  },
}
