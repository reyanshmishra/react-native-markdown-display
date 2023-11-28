import React from 'react'
import { Text, View, StyleSheet,  TouchableOpacity } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter
      customStyle={styles.custom}
      codeTagProps={{ selectable: true }}
      PreTag={View}
      CodeTag={Text}
      style={tomorrow}
      language="javascript"
      fontSize={12}
      highlighter="prism">
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock

const styles = StyleSheet.create({
  custom: { marginLeft: -8, marginRight: -8, borderRadius: 8 }
})
