import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'

type Props = { initialDoc: string }

const Editor: React.FC<Props> = (props: Props) => {
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: 'Hello, World',
    onChange: () => {}
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return (
    <div className='h-full' ref={refContainer}>
      Editor
    </div>
  )
}

export default Editor
