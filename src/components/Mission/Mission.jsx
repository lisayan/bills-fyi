import React from 'react';
import { Box, Heading, Text, Container, VStack, Image } from '@chakra-ui/react';

const Mission = () => {
  return (
    <Box bg="gray.50" minHeight="100vh" py={16}>
      <Container maxW="4xl">
        <VStack spacing={12} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" color="black">
            Join the Fight
          </Heading>
          
          <Image
            src="/path/to/your/image.jpg"
            alt="Symbolic image representing our mission"
            borderRadius="md"
            boxShadow="lg"
          />
          
          <Text fontSize="xl" fontStyle="italic" textAlign="center" color="gray.600">
            "Bills suck"
          </Text>
          
          <Box>
            <Heading as="h2" size="xl" mb={4} color="var(--color-primary)">
              Our Story
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              We hate medical bills. The vast majority of US patients have no access to healthcare prices before seeing the doctor. This means we are uninformed consumers with no way to shop for the most affordable, highest quality care. Instead, we receive surprise bills post-treatment.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size="xl" mb={4} color="var(--color-primary)">
              Our Impact
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              Here, we would describe the tangible and intangible ways our mission
              has made a difference. We could include statistics, personal anecdotes,
              or testimonials that illustrate the positive change we've brought about.
              This section would reinforce the importance of our work and inspire
              others to support or join our cause.
            </Text>
          </Box>
          
          <Box>
            <Heading as="h2" size="xl" mb={4} color="var(--color-primary)">
              Join Us
            </Heading>
            <Text fontSize="lg" lineHeight="tall">
              In this final section, we would invite readers to become part of our
              mission. We could outline ways they can contribute, whether through
              volunteering, donations, or spreading awareness. The tone would be
              inspiring and action-oriented, encouraging readers to take the next
              step in supporting our cause.
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Mission;
