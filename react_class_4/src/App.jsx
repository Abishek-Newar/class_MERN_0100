

function App() {
  const [count, setCount] = useState(0)
  console.log("hello")
  function inc(){
    setCount(count+1)
  }

  return (
    <>
      <button onClick={inc}>{count}</button>
    </>
  )
}

export default App
