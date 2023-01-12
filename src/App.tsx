import React from 'react'
import Editor from './components/editor'
import Preview from './components/preview'
import { RootLayout } from './components/layouts/main'

function App() {
  const [doc, setDoc] = React.useState<string>('## Hello, world everyone!\n')

  const handleDocChange = React.useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <RootLayout>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc} />
    </RootLayout>
  )
}

export default App
