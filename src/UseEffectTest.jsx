import { useEffect, useState } from 'react'
import './App.css'

function UseEffectTest() {
  const [nome, setNome] = useState('João')
  useEffect( ()=>{

    console.log('Meu useEffect rodou!')
  },[nome])

  return (
   <>

    <h1>{nome}</h1> 
    <button onClick={e=>setNome('Georgia')}>Atualizar</button>

    </>
  )
}

export default UseEffectTest
