import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { styled } from "styled-components";
import SearchResult from "./SearchResult";
import  {foodData} from './datafile'
export const BASE_URL = "http://localhost:9000";
function App() {
  const [data, setData] = useState(foodData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterdata, setFilterdata] = useState(foodData);
  const [mycick, setMyclick] = useState(false);
  const [mybreak, setMybreak] = useState(null);

  async function fetchfooddata() {
    setLoading(true);
    try {
      const respose = await fetch(BASE_URL);
      const json = await respose.json();
      setData(json);
      setFilterdata(json);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      console.log(json);
    } catch (error) {
      setError("unable to fetch data");
    }
  }

  const searchfood = (event) => {
    const serachvalue = event.target.value;
    if (serachvalue === "") {
      setFilterdata(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(serachvalue.toLowerCase())
    );
    setFilterdata(filter);
  };
  const temp = [
    {
      name: "Boilded Egg",
      price: 10,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: "/images/egg.png",
      type: "breakfast",
    },
  ];

  useEffect(() => {
    // fetchfooddata();
  }, []);

  if (error) {
    return <div> {error}</div>;
  }

  if (loading) {
    return <div> loadding.........</div>;
  }

  const filterme = (tyoes) => {
    setMyclick(true);
    if (tyoes == "all") {
      setFilterdata(data);
    } else {
      const ff = data.filter((item) => item.type === tyoes);
      setFilterdata(ff);
    }
  }

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/Foody Zone.svg" />
          </div>
          <div className="search">
            <input
              placeholder="search food"
              type="search"
              onChange={searchfood}
            />
          </div>
        </TopContainer>
        <FilterContainer>
          <Button onClick={() => filterme("all")}>All </Button>
          <Button onClick={() => filterme("breakfast")}>Breakfast </Button>
          <Button onClick={() => filterme("lunch")}>Lunch </Button>
          <Button onClick={() => filterme("dinner")}>Dinner </Button>
        </FilterContainer>
        <SearchResult data={filterdata} />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  min-width: 1280px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  backgroundcolor: grey;

  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      height: 40px;
      font-size: 16px;
      padding: 0 4px;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 6px 12px;
  background: orange;
  border-radius: 5px;
  border: none;
  color: white;
`;
