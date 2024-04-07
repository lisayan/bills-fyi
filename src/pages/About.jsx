import React from 'react';
import Header from "../components/Header";
import { Stack, Button, Box, Text, Image, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ethan from '../images/ethan.png';
import lisa from '../images/lisa.png';
import serena from "../images/serena.png";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <div>
                <Text marginTop="80px" marginLeft="100px" fontSize="5xl" fontWeight="bold">Meet the leadership team.</Text>
                <Text noOfLines={3} marginTop="20px" marginLeft="100px" fontSize="15px">We've combined the best of healthcare leaders and
                    enterprise SaaS experts to lead us towards reducing
                    financial complexity.</Text>
                <Stack
                    marginTop="100px"
                    marginLeft="100px"
                    spacing={20}
                    align="flex-start"
                    direction={["column", "row", "row"]}
                    pt={[4, 4, 0, 0]}
                >
                    <div>
                        <Image src={ethan} width="300px" height="300px"></Image>
                        <Text marginLeft="20px" marginTop="10px">Ethan Zang</Text>
                        <Link marginLeft="20px" href='https://www.linkedin.com/in/ethanzang/' isExternal>
                            LinkedIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </div>
                    <div>
                        <Image src={lisa} width="300px" height="300px"></Image>
                        <Text marginLeft="20px" marginTop="10px">Lisa Yan</Text>
                        <Link marginLeft="20px" href='https://www.linkedin.com/in/elizabeth-lisa-yan-32254989/' isExternal>
                            LinkedIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </div>
                    <div>
                        <Image src={serena} width="300px" height="300px"></Image>
                        <Text marginLeft="20px" marginTop="10px">Serena Wang</Text>
                        <Link marginLeft="20px" href='https://www.linkedin.com/https://www.linkedin.com/in/serena-w-719011b2//ethanzang/' isExternal>
                            LinkedIn <ExternalLinkIcon mx='2px' />
                        </Link>
                    </div>
                </Stack>
            </div>
        </div>
    )
};