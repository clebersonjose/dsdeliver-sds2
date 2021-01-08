import { useState } from "react"

export default function Counter() {

  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  const handleDescrease = () => {
    setCounter(counter - 1);
  }

  return(
    <div>
      <button onClick={handleIncrease}>Incrementar</button>
      <button onClick={handleDescrease}>Decrementar</button>
      <h1>Valor do contador: {counter}</h1>
    </div>
  )
}
