import React from 'react';
import styled from 'styled-components';
import WeaponTypeList from './components/WeaponTypeList';
import DamageTypeList from './components/DamageTypeList';
import logo from './logo.svg';
import './App.css';

function App() {
  const Row = styled.div`
    display: flex;
  `
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <WeaponTypeList />
          <DamageTypeList />
        </Row>
      </header>
    </div>
  );
}

export default App;
