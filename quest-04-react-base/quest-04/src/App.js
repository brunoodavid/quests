import Paragrafo from './components/paragrafo/paragrafo.js'
import Button from './components/button/button.js'
import './App.css';

function App() {
  return (
    <>
      <Paragrafo color='red' maiusculo='uppercase' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit aut quod consequuntur in dicta molestiae aliquam aperiam magnam nemo. Provident cum incidunt ipsa vitae eos dolorum explicabo, maiores placeat?'>
      </Paragrafo>

      <Paragrafo color='blue' texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odit aut quod consequuntur in dicta molestiae aliquam aperiam magnam nemo. Provident cum incidunt ipsa vitae eos dolorum explicabo, maiores placeat?'>
      </Paragrafo>

      <Button label='Clique aqui'/>
    </>
  );
}

export default App;
