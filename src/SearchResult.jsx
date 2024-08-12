import React from 'react'
import { styled } from "styled-components";
import { BASE_URL, Button } from './App';
export default function SearchResult({data}) {
  return (
    <FoodContainer>
    <FoodCard>
      {
        data?.map((food,index)=>(
        
          <FoodShow key={food.name}>
              {/* {food.text} */}
              <div className='foodimage'>
                  <img src={BASE_URL + food.image}/>
              </div>
              <div className="foodinfo">
                <div className="info">
                    <h3>{food.name}</h3>
                    <p>{food.text}</p>
                </div>
                <Button>
                {food.price}
                </Button>
              </div>
          </FoodShow>
        )
        )
      }
    </FoodCard>
  </FoodContainer>
  )
}


const FoodContainer = styled.section`
  background-image: url("/bg.png");
  height: calc(100vh - 170px);
  background-size: cover;
`;

const FoodCard = styled.div`
display:flex;
flex-wrap:wrap;
row-gap:20px;
column-gap:20px;
justify-content:center;
align-items:center
`;

const FoodShow = styled.div`
width:340px;
height:167px;
border:0.66px solid;
border-image-source:radial-gradient(
    80.9% 208.9% at 108.4% 112.58% ,#eabfff 0% rbgba(135,38,183,0) 100%),

    background-url(.png),
    radial-gradient(
        90.9% 143.9% at 15.4% 21.58% ,rbgba(165,239,155,0.2) 100%),

        background-blend-mode:overlay,normal;
        backdrop-filter:blur(13.14px);
        border-radius:20px;
        display:flex

        
`;

// .foodinfo{
//     display:flex
//     flex-direction:row;
//     justify-content:space-between;
//     align-items:end;
//     h3{
//         margin-top:8px;
//         font-size:16px;
//         font-weight:
//     }

// }