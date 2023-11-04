import { useState } from 'react'
import './App.css'

const Person = () => {
  return (
    <>
      <h2> Varsity: SRM University </h2>
      <h3> Course: CSE-Big Data </h3>
      <h3> Section: CSE-H </h3>
    </>
  )
}

const App = () => {
  const name = 'Vedika';
        const isNameShowing = true;
        return (
        <div className="App">
          <h1>Hello, {isNameShowing ? name : 'someone'}</h1>
          <h1>Wohoo! Your age is {12 + 8}</h1> {/*JavaScript Logic in Html*/}
          {/* {name ? (
        <>
          test
        </>
      ) : (
          <>
            <h1>Test</h1>
            <h2>There is no more name</h2>
          </>
      )
      } */}
            <Person />
        </div>
        )
}

export default App
