import usercontextprovider from "./context/usercontextprovider"

function App() {

  return (
    <usercontextprovider>
     <h1 >hard work is key to success in life </h1>
    <login/>
    <profile/>
    </usercontextprovider>
  )
}

export default App
