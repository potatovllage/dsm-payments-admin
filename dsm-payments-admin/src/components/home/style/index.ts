import styled from "styled-components";

export const Home = styled.div`
  width: 100%;
`;

export const HomeBody = styled.div`
  margin-left: 250px;
  margin-top: 90px;
  width: calc(100% - 250px);
  display: flex;
  justify-content: center;
  > div {
    overflow: hidden;
    width: 1160px;
    float: left;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin: 15px 15px 15px 15px;
  float: left;
  padding: 15px;
  box-sizing: border-box;
`;

export const BigCard = styled(Card)`
  width: 800px;
  height: 630px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  > h3 {
    width: 100%;
  }
  > p {
    text-align: center;
  }
  > div {
    width: 500px;
    height: 500px;
    margin: auto;
  }
`;

export const MiddleCard = styled(Card)`
  width: 800px;
  height: 300px;
`;

export const SmallCard = styled(Card)`
  width: 300px;
  height: 300px;
`;

export const Description = styled.h3`
  font-size: 20px;
  font-weight: 300;
`;

export const SmallCount = styled.p`
  font-size: 60px;
  font-weight: 600;
  margin: auto;
  margin-top: 70px;
  text-align: center;
  > span {
    font-size: 20px;
    font-weight: 300;
  }
`;
