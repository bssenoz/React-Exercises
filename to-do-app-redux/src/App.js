import Header from "./components/Header";
import Note from "./components/Note";
import List from "./components/List";
import { ChakraProvider, Container } from "@chakra-ui/react";

function App() {
  document.body.style.backgroundColor = "#e2e2e2";
  return (
    <ChakraProvider>
      <Container
        maxWidth={750}
        mt={15}
        shadow="md"
        p={5}
        my="auto"
        justifyContent={"space-between"}
      >
        <Header />
        <Note />
        <List />
      </Container>
    </ChakraProvider>
  );
}

export default App;