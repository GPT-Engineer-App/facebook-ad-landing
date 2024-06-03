import { Container, Box, VStack, HStack, Text, Button, Image, IconButton, Heading } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        {/* Header Section */}
        <Box bg="blue.500" color="white" p={4} borderRadius="md" textAlign="center">
          <Heading as="h1" size="2xl">
            Amazing Product
          </Heading>
          <Text fontSize="lg">The best solution for your needs</Text>
        </Box>

        {/* Product Image Section */}
        <Box display="flex" justifyContent="center">
          <Image src="https://images.unsplash.com/photo-1693763824929-bd6b4b959e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwc2hvd2Nhc2V8ZW58MHx8fHwxNzE3NDI2MjM3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" boxSize="400px" objectFit="cover" borderRadius="md" />
        </Box>

        {/* Product Description Section */}
        <Box p={4} textAlign="center">
          <Text fontSize="xl" mb={4}>
            Our product offers exceptional quality and features that you will love. It's designed to meet all your needs and exceed your expectations.
          </Text>
          <Text fontSize="md" color="gray.600">
            With cutting-edge technology and a user-friendly interface, our product stands out in the market. Don't miss the chance to own it!
          </Text>
        </Box>

        {/* Call to Action Section */}
        <Box display="flex" justifyContent="center">
          <Button colorScheme="blue" size="lg">
            Buy Now
          </Button>
        </Box>

        {/* Social Media Section */}
        <Box display="flex" justifyContent="center">
          <HStack spacing={4}>
            <Text>Share on:</Text>
            <IconButton aria-label="Share on Facebook" icon={<FaFacebook />} size="lg" colorScheme="facebook" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
