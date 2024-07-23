import styled from "styled-components";

function AppUserComponent(props) {
  return (
    <div>
      <AppUserComponentStyle>
        <img src="https://placehold.co/100" />
        <div className="user-desc">
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
        </div>
      </AppUserComponentStyle>
    </div>
  );
}

const AppUserComponentStyle = styled.div`
  /* border: 1px solid black; */
  width: 400px;
  display: flex;
  border-radius: 5px; //curve the corner
  background-color: #686767;
  margin-left: 10px;
  margin-top: 10px;

  img {
    padding: 5px;
    border-radius: 10px;
  }

  .user-desc {
    /* border: 1px solid black; */
    width: 200px;
    display: flex;
    flex-direction: column; //the elements direction h4 and p
    justify-content: center;
    margin-left: 10px;
  }
`;

export default AppUserComponent;
