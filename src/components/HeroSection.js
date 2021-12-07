import React from "react";
import { Input, Button, SimpleGrid, Center } from '@chakra-ui/react'

export default function HeroSection(){
    return(
        <div className="hero-sect">
            <SimpleGrid columns="2" spacing="10">
                <Center>
                <Input placeholder='We accept inputs' size='md' />
                </Center>
                <Center>
                <Button colorScheme='teal' size='lg' w="20">
                    Button
                </Button>
                </Center>
            </SimpleGrid>
        </div>
    );
}