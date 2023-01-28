import styled, { createGlobalStyle } from "styled-components";

export const CalenderStyle = createGlobalStyle`
    .fc-toolbar-chunk {
        display: flex;
        align-item: center;
    }
    .fc-toolbar-title{
        background: #fff !important;
        border-radius: 5px  !important;
        padding: 0.5rem !important;
        min-width: 10rem !important;
    }
  .fc-toolbar {
    background-color: #f2f2f0;
    color: #000;
    margin-bottom: 0 !important;
    padding: 1rem !important;
    font-size: 0.6rem !important;
  }
  .fc-button {
    color: black !important;
    border-radius: 50% !important;
    background: #fff !important;
    border: none !important;
    padding: 0.5rem !important;
    &:active, :focus, :focus-visible {
    border: none !important;
    outline: none !important;
    }
  }
  .fc-Home-button {
    border-radius: 5px !important;
    min-width: 3rem !important;
    background: none !important;
    color: blue !important;
    font-size: 1rem !important;
    pointer-events: none;
  }
  .fc-Lab-button {
    border-radius: 5px !important;
    min-width: 3rem !important;
    background: none !important;
    color: pink !important;
    font-size: 1rem !important;
    pointer-events: none;
  }
  .fc-col-header-cell-cushion {
    padding: 1rem !important;
  
  }
`;
