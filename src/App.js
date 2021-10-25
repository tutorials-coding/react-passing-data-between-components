import { Component as ParentToChild } from './parent-to-child/Component'
import { Component as ChildToParent } from './child-to-parent/Component'
import { Component as SiblingToSibling } from './sibling-to-sibling/Component'
import { Component as ParentToGrandchild } from './parent-to-grandchild/Component'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <div className="example-container">
        <p>Parent to Child</p>
        <ParentToChild />
      </div>
      <div className="example-container">
        <p>Child to Parent</p>
        <ChildToParent />
      </div>
      <div className="example-container">
        <p>Sibling to Sibling</p>
        <SiblingToSibling />
      </div>
      <div className="example-container">
        <p>Parent to Grandchild</p>
        <ParentToGrandchild />
      </div>
    </div>
  )
}
