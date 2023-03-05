import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const MainHeading = styled.h1`
  color: #1e293b;
  font-size: 25px;
  font-family: 'Roboto';
  text-align: center;
`

export const Paragraph = styled.p`
  color: #334155;
  font-size: 18px;
  font-family: 'Roboto';
  text-align: center;
`

export const Image = styled.img`
  width: 70%;
  height: 350px;
`

export const Text = styled.p`
  margin-left: 170px;
  margin-right: 170px;
  color: #334155;
  font-size: 15px;
  font-family: 'Roboto';
  text-align: left;
  @media screen and (max-width: 576px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  background-color: #1f81ff;
  color: #ffffff;
  font-size: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
`
