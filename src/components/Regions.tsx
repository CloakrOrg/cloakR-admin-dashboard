'use client'

import React from 'react';
import { Box, Button, Grid, Heading, Center } from '@chakra-ui/react';
import states from '../constant/states.json';

export default function Regions() {
  const itemsPerRow = 4;

  const rows = [];
  for (let i = 0; i < states.length; i += itemsPerRow) {
    rows.push(states.slice(i, i + itemsPerRow));
  }

  return (
    <Box p={10}>
      <Heading as="h1" size="xl" mb={10} mt={5}>
        Choose Region
      </Heading>
      <Grid templateColumns={`repeat(${itemsPerRow}, 1fr)`} gap={4} className="grid-container">
        {rows.map((row, rowIndex) => (
          <Box key={rowIndex} className="grid-row" mb={4}>
            {row.map((state) => (
              <Center key={state.abbreviation} className="grid-item">
                <Button size="lg" variant="outline" w="100%">
                  {state.name.length > 10 ? state.name.substring(0, 10) + '...' : state.name}
                </Button>
              </Center>
            ))}
          </Box>
        ))}
      </Grid>
    </Box>
  );
}