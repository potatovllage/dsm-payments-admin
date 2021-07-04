import styled from "styled-components";

export const TablePagination = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PagenationButtonWrapper = styled.div`
  > button {
    background-color: white;
    border: none;
    &::before {
      content: "";
      position: relative;
      display: inline-block;
      /* By using an em scale, the arrows will size with the font */
      width: 0.6em;
      height: 0.6em;
      border-right: 0.2em solid black;
      border-top: 0.2em solid black;
      margin-right: 0.5em;
    }
  }
  > .front {
    &::before {
      /* top: 3pt; Uncomment this to lower the icons as requested in comments*/
      transform: rotate(45deg);
    }
  }
  > .back {
    &::before {
      transform: rotate(225deg);
    }
  }
`;

export const PagenationButton = styled.button``;
