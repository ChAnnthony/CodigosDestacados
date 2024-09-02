
import React from 'react';
import { Box, Button, Heading, Text, VStack, Card, CardBody, CardFooter } from '@chakra-ui/react';

function App() {
  return (
    <Box p={5} maxW="lg" mx="auto" borderWidth={1} borderRadius="lg" boxShadow="md">
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl" mb={4}>
          Bienvenido a la Implementación - Cedeño - Chávez
        </Heading>
        <Text fontSize="lg" mb={4}>
          Práctica con Chakra UI
        </Text>
        <Button colorScheme="blue" size="md">
          Haz clic aquí
        </Button>
        <Card mt={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <CardBody>
            <Heading size="md">Tarjeta de Ejemplo</Heading>
            <Text mt={3}>
              Este es un componente de tarjeta de ejemplo que muestra cómo usar los componentes de Chakra UI. Puedes personalizar la tarjeta según tus necesidades.
            </Text>
          </CardBody>
          <CardFooter>
            <Button colorScheme="teal">Saber Más</Button>
          </CardFooter>
        </Card>
      </VStack>
    </Box>
  );
}

export default App;
