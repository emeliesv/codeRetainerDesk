import React from 'react'
import styled from 'styled-components'

const Thinner = styled.span`
  font-weight: 400;
`
const Item = styled.li`
  list-style: none;
  color: #cff8f3;
  font-size: 1em;
  font-weight: 600;
  margin: 0.2em;
  background: rgba(75,117,244,0.5);
  padding: 1em;
`

export const ListItem = ({ name, age, salary }) => {
  return (
    <>
      <Item>
        Name: <Thinner>{name}</Thinner> Age: <Thinner>{age}</Thinner> Salary: <Thinner>{salary}</Thinner>
      </Item>
    </>
    /* <StyledCard>
      <Text>Name: <Thinner>{name}</Thinner></Text>
      <Text>Age: <Thinner>{age}</Thinner></Text>
      <Text>Salary: <Thinner>{salary}</Thinner></Text>
    </StyledCard> */
  )
}
