import {
  LexicalComposer,
  InitialEditorStateType,
} from '@lexical/react/LexicalComposer';
import React from 'react';
import PlaygroundNodes from './nodes/PlaygroundNodes';
import PlaygroundEditorTheme from './themes/PlaygroundEditorTheme';
import './EditorComposer.css';
import i18n from './locale';
import { I18nextProvider } from 'react-i18next';
import { HTMLConfig, Klass, LexicalNode } from 'lexical';

interface IEditorComposer {
  children: React.ReactElement;
  initialEditorState?: InitialEditorStateType;
  nodes?: Array<Klass<LexicalNode>>;
  html?: HTMLConfig;
}

const EditorComposer = ({ children, initialEditorState, nodes, html }: IEditorComposer) => {
  const initialConfig = {
    namespace: 'VerbumEditor',
    nodes: nodes || PlaygroundNodes,
    onError: (error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme,
    editorState: initialEditorState,
    html: html,
  };
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <I18nextProvider i18n={i18n}>
        <div className="editor-shell">{children}</div>
      </I18nextProvider>
    </LexicalComposer>
  );
};

export default EditorComposer;
