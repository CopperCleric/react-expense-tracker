import styled from 'styled-components';

const CardClass = styled.div`
    border-radius:12px;
    box-shadow:0 1px 8px rgba(0,0,0,0.25);
` 
const Card = (props) => {
  
  return (
    <CardClass className={props.className}>{props.children}</CardClass>
  )
}

export default Card;