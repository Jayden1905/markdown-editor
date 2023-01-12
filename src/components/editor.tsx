import React, { useCallback, useEffect } from 'react'
import useCodeMirror from './use-codemirror'

type Props = {
  initialDoc: string
  onChange: (doc: string) => void
}

const Editor: React.FC<Props> = (props: Props) => {
  const { initialDoc, onChange } = props
  const handleChange = useCallback((state) => onChange(state.doc.toString()), [onChange])
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing for now
    }
  }, [editorView])

  return <div className='editor-wrap h-full border-none focus:outline-none focus:border-none' ref={refContainer}></div>
}

export default Editor
