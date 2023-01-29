import { Flex } from '@chakra-ui/react';
import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import AllRoutes from './routes/AllRoutes';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Flex justifyContent={'space-between'} padding={6}gap={6}>
        <Sidebar />
        <AllRoutes />
      </Flex>
    </div>
  );
}

export default App;
