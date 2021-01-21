import styled from "styled-components"

export const TableStyle = styled.table`
margin-left: auto;
margin-right: auto;
width: 100%;
 td,  th {
  border: 1px solid #ddd;
  padding: 8px;
}

 tr:nth-child(even){background-color: #f2f2f2;}

 tr:hover {background-color: #ddd;}

 th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: black;
  color: white;
}
td{text-align:center;}
`;

export const PubTable = styled.div`
  overflow: auto;
  text-align:center;
  @media screen and (max-width: 666px) {
    height: 500px;
}
`;