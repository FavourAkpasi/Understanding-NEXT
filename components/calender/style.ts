import styled, { createGlobalStyle } from "styled-components";

export const CalenderStyle = createGlobalStyle`
  .fc-toolbar-chunk {
        display: flex;
        align-items: center;
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
    min-width: 900px;
    overflow:auto;
  }
  .fc-button {
    color: black !important;
    border-radius: 50% !important;
    background: #fff !important;
    border: none !important;
    padding: 0.5rem !important;
    &:active, &:focus, &:focus-visible {
    border: none !important;
    outline: none !important;
    }
  }
  .fc-next-button, .fc-prev-button {
    height: 2rem
  }
  .fc-Home-button {
    background: none !important;
    color: blue !important;
    font-size: 1rem !important;
    pointer-events: none;
  }
  .fc-Lab-button {
    background: none !important;
    color: pink !important;
    font-size: 1rem !important;
    pointer-events: none;
  }
  .fc-col-header-cell-cushion {
    padding: 1.5rem !important;
    text-align:center;
  }
  .fc-button-group{
    padding: 0.3rem !important;
    background: #fff !important;
    border-radius: 5px !important;
    margin-left: 2rem !important;
  }
  .fc-dayGridMonth-button, .fc-timeGridWeek-button, .fc-timeGridDay-button {
    min-width: 3rem !important;
    font-size: 0.8rem !important;
    border-radius: 5px !important;
    &:active, :focus, :focus-visible {
    border: none !important;
    outline: none !important;
    background: blue !important;
    color: white  !important;
    border-radius: 5px !important;
    }
  } 
  .fc-button-active {
    border: none !important;
    outline: none !important;
    background: blue !important;
    color: white  !important;
    border-radius: 5px !important;
  }
  .lab  {
    color: blue !important;
    background: rgba(59, 72, 229, 0.5) !important;
    border: 1px solid rgb(59, 72, 229) !important;
  }
  .home {
    color: red !important;
    border: 1px solid hotpink !important;
    background: pink !important;
  }
  .fc-daygrid-event-dot{
    display: none !important;
  }
  .fc-view-harness {
    min-width:900px;
    overflow: auto;
}
`;
