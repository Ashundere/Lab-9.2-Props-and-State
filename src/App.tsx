import { useState } from 'react'
import React from 'react';
import './App.css'
import { TextInput } from './components/TextInput/TextInput';
import { StatsDisplay } from './components/StatsDisplay/StatsDisplay';

function App() {

  return (
    <>
    <TextInput/>
    <StatsDisplay/>
    </>
  )
}

export default App