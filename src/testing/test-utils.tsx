import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderAPI } from '@testing-library/react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

const Providers: React.FC = ({ children }) => (
    <ApplicationProvider {...eva} theme={eva.light}>
        <>{children}</>
    </ApplicationProvider>
)

const customRender = (ui: ReactElement, options?: RenderOptions): RenderAPI =>
    render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
