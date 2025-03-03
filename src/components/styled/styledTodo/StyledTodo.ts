// src/components/styled/StyledTodo.ts
import styled from "styled-components";

export const TodoListContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  max-width: 36rem;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 0.25rem;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  background-color: #4f46e5;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;

  &:hover {
    background-color: #4338ca;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #ddd;
`;
