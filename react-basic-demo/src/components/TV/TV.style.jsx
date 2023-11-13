import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #2b2a49;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 16px;
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.8%;
`;

export const TvDetail = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.8;
  color: white;
  padding: 5px;
  font-size: 15px;
`;

export const TvContainer = styled.div`
  position: relative;
  width: 250px;
  margin: 16px;
  background-color: #373b69;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const TvImage = styled.img`
  width: 100%;
  min-height: 15vw;
  margin-top: 0.5vw;
`;

export const TvInfo = styled.div`
  width: 100%;
  min-height: 5%;
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 0.8vw;
  cursor: pointer;
`;