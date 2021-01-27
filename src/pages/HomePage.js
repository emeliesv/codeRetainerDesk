import React, { useState } from 'react'
import styled from 'styled-components'

import { ListItem } from '../components/ListItem'

const Main = styled.main`
  display: grid;
  grid-template-rows: min-content;
  grid-template-columns: repeat(2, 1fr);
  min-height: 100vh;
  background-image: linear-gradient(180deg, #224ee1, #7784e9, #a7bcef, #cff8f3)
`
const Header = styled.header`
    grid-column: span 2;
    background: transparent;
    color: #EDFFFD;
    text-align: center;
    font-size: 1.5em;

    @media screen and (min-width: 768px){
        font-size: 2em;
    }
`
const Button = styled.button`
    grid-column: span 2;
    justify-self: center;
    margin: 5em 0;
    padding: 1.5em;
    max-height: 5em;
    border: none;
    border-radius: 5px;
    background: #3157E2;
    color: #EDFFFD;
    font-weight: 600;
    font-size: 1.5em;
`
const List = styled.ul`
    min-width: 80%;
    background: #3157E2;
    justify-self: center;
    grid-column: span 2;
    padding: 0.2em;
    box-shadow: 10px 10px 15px -3px rgba(0,0,0,0.8);

    @media screen and (min-width: 768px){
        min-width: 50%;
    }
`
export const HomePage = () => {
  const API_URL = 'http://dummy.restapiexample.com/api/v1/employees'
  const [employeeList, setEmployeeList] = useState([])

  const fetchEmployees = () => {
    fetch(API_URL, {
      method: 'GET',
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not fetch any employees')
        }
        return res.json()
      })
      .then((json) => {
        setEmployeeList(json.data)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }

  return (
    <Main>
        <Header><h1>Let's see all our employees</h1></Header>
        {employeeList.length=== 0 ? (<Button onClick={fetchEmployees}>Fetch Employees here!</Button>)
        :<List>
        {employeeList.map((employee) => (
          <ListItem key={employee.id}
          name={employee.employee_name}
          age={employee.employee_age}
          salary={employee.employee_salary}
          />
        ))}
        </List>}
    </Main>
  )
}
