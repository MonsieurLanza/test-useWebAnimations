import { useReducer } from "react";

import { Stack } from "./Stack";
import { Product } from "./Product";
import { Fade } from "./Fade";
import { Suggestion } from "./Suggestion";

import "./styles.css";

const initialState = [
  { id: 1, type: "product", label: "Pecorino" },
  { id: 2, type: "product", label: "Parmigiano" },
  { id: 3, type: "suggestion", label: "Taleggio" },
  { id: 4, type: "suggestion", label: "Puzzone" },
  { id: 5, type: "suggestion", label: "Ricotta" },
  { id: 6, type: "suggestion", label: "Scamorza" }
];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, type: "product" } : item
      );
    case "remove":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, type: "suggestion" } : item
      );
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [products, suggestions] = state.reduce(
    (acc, curr) => {
      acc[curr.type === "product" ? 0 : 1].push(curr);
      return acc;
    },
    [[], []]
  );

  return (
    <div className="App">
      <Stack className="products">
        {products.map((item) => (
          <Fade
            key={item.id}
            onAnimationEnd={() =>
              dispatch({ type: "remove", payload: { id: item.id } })
            }
          >
            <Product>{item.label}</Product>
          </Fade>
        ))}
      </Stack>
      <Stack className="suggestions">
        {suggestions.length ? <h3>Suggested</h3> : null}
        {suggestions.map((item) => (
          <Fade
            key={item.id}
            onAnimationEnd={() =>
              dispatch({ type: "add", payload: { id: item.id } })
            }
          >
            <Suggestion>{item.label}</Suggestion>
          </Fade>
        ))}
      </Stack>
    </div>
  );
}
