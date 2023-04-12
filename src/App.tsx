import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import antlr4, { ParserRuleContext } from 'antlr4';
import MyGrammarLexer from './grammers/SQLite/SQLiteLexer';
import MyGrammarParser, { ParseContext, Table_nameContext } from './grammers/SQLite/SQLiteParser';
import SQLiteParserVisitor from './grammers/SQLite/SQLiteParserVisitor';
import 'antd/dist/reset.css';
import { Tree } from 'antd';

const input = "select id, name,age from students where age < 18 limit 3;"
class CustomVisitor extends SQLiteParserVisitor<any> {

  visitChildren(ctx: ParserRuleContext) {
    if (!ctx) {
      return {};
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        //@ts-ignore
        if (child.children && child.children.length != 0) {
          //@ts-ignore
          return child.accept(this);
        } else {
          return child.getText();
        }
      });
    }
    return ctx;
  }
}

function App() {
  const [state, setState] = useState<{
    keyObjectMap: {
      [key: string]: any;
    };
    treeData: any;
    tree: any
    parser: any
  }>({ keyObjectMap: [], treeData: [], tree: undefined, parser: undefined })
  const [selectKey, setSelectKey] = useState<string | undefined>(undefined);
  useEffect(() => {
    // Create the lexer and parser
    const chars = new antlr4.CharStream(input);
    const lexer = new MyGrammarLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokens);

    parser.buildParseTrees = true;
    const tree = parser.parse()
    // const customVisitor = new CustomVisitor()
    // tree.accept(customVisitor);
    //console.log(getText(tree).trim())
    const res = traverseTree(tree, parser.ruleNames);
    setState({ ...res, tree, parser })
  }, [])
  let value = '';
  if (selectKey) {
    const selectInfo = state.keyObjectMap[selectKey];
    console.log(selectInfo)
    value = selectInfo?.symbol?.text;
  }
  console.log(state.tree)
  return (
    <div className="App">
      {state.treeData.length && <Tree selectedKeys={selectKey ? [selectKey] : undefined} onSelect={(ev, info) => {
        setSelectKey(info.node.key + '')
      }} defaultExpandAll treeData={state.treeData} />}
      <div>
        <div>{input}</div>
        <input value={value} onChange={(ev) => {
          const text = ev.target.value;
          if (selectKey) {
            const selectInfo = state.keyObjectMap[selectKey];
            if (selectInfo && selectInfo.symbol) {
              selectInfo.symbol.text = text;
              console.log(selectInfo.symbol.text)
              const res = traverseTree(state.tree, state.parser.ruleNames);
              setState({ ...res, tree: state.tree, parser: state.parser })
            }
          }
        }}></input>
        <div>
          {state.tree && getText(state.tree).trim()}
        </div>
      </div>
    </div>
  )
}

export default App

function getText(target: any): string {
  if (target?.symbol?.text) {
    const text = target?.symbol?.text;
    if (text === '<EOF>') {
      return '';
    }
    if ([';', ','].includes(text)) {
      return text;
    }
    return ' ' + text;
  }
  if (target.getChildCount() === 0) {
    return "";
  } else {
    return target.children.map(function (child) {
      return getText(child);
    }).join("");
  }
}

function traverseTree(tree: ParseContext, ruleNames: string[]) {
  const keyObjectMap: { [key: string]: any } = {}
  function inner(tree: any, idPrefix?: string) {
    const count = tree.getChildCount();
    const base = {
      id: idPrefix || '',
      key: idPrefix || '',
      title: tree.getText(),
      value: tree.getText(),
      ruleIndex: tree.ruleIndex,
      ruleName: tree.ruleIndex ? ruleNames[tree.ruleIndex] : undefined
    }
    keyObjectMap[base.id] = tree;
    if (count) {
      const children = [];
      for (let index = 0; index < count; index++) {
        const element = tree.getChild(index);
        const newKey = [base.id, index].join('-');
        children.push(inner(element, newKey));
      }
      return {
        ...base,
        children: children,
        value: undefined,
        title: base.ruleName
      }
    } else {
      return {
        ...base,
      }
    }
  }
  const treeData = inner(tree, '0');
  return { keyObjectMap, treeData: [treeData] };
}