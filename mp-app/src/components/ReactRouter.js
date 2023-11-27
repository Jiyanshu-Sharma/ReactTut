import React from 'react'
import Counter from './counter';
import {Route , Switch} from "react-router-dom";

function ReactRouter() {
  return (
    <div>
        <Switch>
            <Route path ="/" Component={Counter}></Route>
        </Switch>
      <Counter></Counter>
    </div>
  )
}

export default ReactRouter
