import React from 'react';
import Header from "../components/Header";
import { Box, Text, Container, UnorderedList, ListItem, Heading, VStack, Divider } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

export default function LearnMore() {
    const navigate = useNavigate();

    return (
        <div>
            <Header onPricesClick={() => {
                sessionStorage.setItem('scrollToPrices', 'true');
                navigate('/');
            }} />
            <Box 
                paddingTop="120px" 
                minHeight="100vh"
                bgGradient="linear(to-b, gray.50, white)"
            >
                <Container maxW="4xl" py={10}>
                    <VStack spacing={10} align="stretch">
                        <Box>
                            <Heading 
                                as="h1" 
                                size="2xl" 
                                mb={6} 
                                color="black"
                                bgGradient="linear(to-r, var(--color-primary), var(--color-secondary))"
                                bgClip="text"
                                letterSpacing="tight"
                            >
                                Starting a GLP-1 Medication: What to Expect on Your Journey to Better Health
                            </Heading>

                            <Text 
                                fontSize="lg" 
                                color="gray.700" 
                                lineHeight="tall"
                            >
                                Beginning a GLP-1 medication can be an exciting step, especially if you're managing type 2 diabetes or looking for support in your weight-loss journey. GLP-1 medications work by mimicking a natural hormone in your body that helps regulate blood sugar levels and suppress appetite. Here's what to expect as you get started, along with tips to help you feel confident and prepared for the transition.
                            </Text>
                        </Box>

                        <Divider borderColor="gray.300" />

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">1. The First Doses: Easing Into Treatment</Heading>
                            <Text mb={4} color="gray.700">
                                Most GLP-1 medications, like Ozempic, Wegovy, and Mounjaro, start with a low dose that gradually increases over time. This slow introduction allows your body to adjust and helps minimize any side effects. Some people may experience mild symptoms, such as nausea, which tends to be most common during the initial weeks.
                            </Text>
                            <Text fontWeight="bold" color="var(--color-secondary)">Pro Tip:</Text>
                            <Text color="gray.700">Start doses as directed by your doctor, and if you notice any digestive discomfort, try eating smaller meals to ease the effects. Many users find their bodies adapt within a few weeks as they reach a stable dose.</Text>
                        </Box>

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">2. How GLP-1 Medications Affect Appetite</Heading>
                            <Text mb={4} color="gray.700">
                                One of the most noticeable effects of GLP-1 medications is a reduced appetite. These medications work by slowing down gastric emptying, meaning you feel full for longer after eating. This effect can lead to eating less, which is helpful for both weight management and blood sugar control.
                            </Text>
                            <Text fontWeight="bold" color="var(--color-secondary)">What You'll Notice:</Text>
                            <Text color="gray.700">You may feel satisfied with smaller portions or find that cravings, especially for high-calorie foods, are less intense. Many people describe this as a subtle but helpful change in how they approach meals.</Text>
                        </Box>

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">3. Managing Side Effects</Heading>
                            <Text mb={4} color="gray.700">Common side effects include nausea, mild digestive discomfort, and sometimes constipation. Here's how to manage them:</Text>
                            <UnorderedList mb={4} spacing={3} color="gray.700">
                                <ListItem>Nausea: Stick to smaller meals with lower-fat content. Fatty foods can worsen nausea, so try to keep meals light.</ListItem>
                                <ListItem>Constipation: Drinking plenty of water and adding fiber-rich foods like fruits, vegetables, and whole grains to your diet can help.</ListItem>
                                <ListItem>Fatigue or Lightheadedness: As your body adjusts, some people feel slightly fatigued or lightheaded. If this occurs, discuss with your healthcare provider, as they may suggest dosage adjustments or supplements if needed.</ListItem>
                            </UnorderedList>
                            <Text fontWeight="bold" color="var(--color-secondary)">Be Patient:</Text>
                            <Text color="gray.700">Side effects often fade over time, especially as your body becomes accustomed to the medication. If symptoms persist, talk to your healthcare provider. They can offer tailored advice or suggest a different medication if necessary.</Text>
                        </Box>

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">4. Tracking Progress: Blood Sugar and Weight Changes</Heading>
                            <Text mb={4} color="gray.700">
                                One of the benefits of GLP-1 medications is their positive impact on blood sugar levels. Within weeks, you might notice improved blood sugar readings. For those taking a GLP-1 medication for weight loss, results are often gradual but consistent over time.
                            </Text>
                            <Text fontWeight="bold" color="var(--color-secondary)">Keep Track:</Text>
                            <Text color="gray.700">Regularly monitor your blood sugar (if recommended by your doctor) and track any changes in weight or measurements. This data can be motivating and help your healthcare team make any necessary adjustments to optimize your treatment.</Text>
                        </Box>

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">5. Lifestyle Adjustments to Maximize Results</Heading>
                            <Text mb={4} color="gray.700">While GLP-1 medications can help with blood sugar control and weight management, combining the medication with healthy lifestyle choices makes a significant difference:</Text>
                            <UnorderedList mb={4} spacing={3} color="gray.700">
                                <ListItem>Diet: Focus on nutrient-rich, balanced meals with plenty of fruits, vegetables, and lean proteins.</ListItem>
                                <ListItem>Exercise: Aim for regular physical activity. Even gentle movement like walking can improve your overall results.</ListItem>
                                <ListItem>Sleep: Getting enough restful sleep is essential for metabolic health and overall well-being.</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">6. Setting Realistic Expectations and Goals</Heading>
                            <Text color="gray.700">
                                Starting a GLP-1 medication can feel like a big change, but remember that progress takes time. These medications are designed to work gradually, providing sustainable benefits without drastic swings in weight or blood sugar.
                            </Text>
                        </Box>

                        <Box 
                            p={8} 
                            bg="white" 
                            borderRadius="xl" 
                            boxShadow="lg"
                        >
                            <Heading as="h2" size="lg" mb={4} color="var(--color-primary)">7. Staying Connected with Your Healthcare Team</Heading>
                            <Text color="gray.700">
                                Regular follow-up appointments with your healthcare provider can make a significant difference in your treatment experience. They'll monitor your progress, adjust doses if necessary, and address any side effects you experience.
                            </Text>
                        </Box>

                        <Divider borderColor="gray.300" />

                        <Box>
                            <Heading 
                                as="h2" 
                                size="xl" 
                                mb={6} 
                                color="black"
                                bgGradient="linear(to-r, var(--color-primary), var(--color-secondary))"
                                bgClip="text"
                                letterSpacing="tight"
                            >
                                Looking Ahead: A Healthier You
                            </Heading>
                            <Text 
                                fontSize="lg" 
                                color="gray.700" 
                                lineHeight="tall"
                            >
                                GLP-1 medications offer a unique way to manage blood sugar and support weight loss, and while every person's journey is different, taking it one day at a time can help you succeed. With the right support, lifestyle adjustments, and a positive outlook, GLP-1 medications can be a powerful tool in reaching your health goals.
                            </Text>
                        </Box>
                    </VStack>
                </Container>
            </Box>
        </div>
    );
}