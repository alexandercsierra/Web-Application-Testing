import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('does the strike button work', ()=>{
  // const App = render(<App/>);
  const container = render(<App/>);
  const button = container.getByTestId("strike");
  const strikesText = container.getByTestId("strikeText");
  console.log(button);
  fireEvent.click(button);

  expect(strikesText.textContent).toBe("Strikes: 1");
  fireEvent.click(button);
  expect(strikesText.textContent).toBe("Strikes: 2");
  fireEvent.click(button);
  expect(strikesText.textContent).toBe("Strikes: 0");


})

test('does the ball button work', ()=>{
  // const App = render(<App/>);
  const container = render(<App/>);
  const button = container.getByTestId("ball");
  const Text = container.getByTestId("ballText");
  console.log(button);
  fireEvent.click(button);

  expect(Text.textContent).toBe("Balls: 1");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Balls: 2");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Balls: 3");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Balls: 0");


})

test('does the foul button work', ()=>{
  // const App = render(<App/>);
  const container = render(<App/>);
  const button = container.getByTestId("foul");
  const Text = container.getByTestId("strikeText");
  console.log(button);
  fireEvent.click(button);

  expect(Text.textContent).toBe("Strikes: 1");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Strikes: 2");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Strikes: 2");


})

test('does the foul button work', ()=>{
  // const App = render(<App/>);
  const container = render(<App/>);
  const button = container.getByTestId("foul");
  const Text = container.getByTestId("strikeText");
  console.log(button);
  fireEvent.click(button);

  expect(Text.textContent).toBe("Strikes: 1");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Strikes: 2");
  fireEvent.click(button);
  expect(Text.textContent).toBe("Strikes: 2");


})