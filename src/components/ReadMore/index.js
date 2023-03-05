// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  MainHeading,
  Paragraph,
  Image,
  Text,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const text = reactHooksDescription
  const slicedText = text.slice(0, 171)
  console.log(text)
  console.log(slicedText)
  const [isClicked, setIsClicked] = useState(false)
  const onClickBtn = () => setIsClicked(prevState => !prevState)
  const BtnTxt = isClicked ? 'Read Less' : 'Read More'
  const Description = isClicked ? reactHooksDescription : slicedText
  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Text>{Description}</Text>
      <Button type="button" onClick={onClickBtn}>
        {BtnTxt}
      </Button>
    </MainContainer>
  )
}

export default ReadMore
