import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "./reducers/counterSlice";
import { fetchPokemon } from "./reducers/pokemonSlice";
import { fetchProducts } from "./reducers/productsSlice";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const loading = useSelector((state) => state.pokemon.loading);
  const pokemon = useSelector((state) => state.pokemon.value);
  const productLoading = useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.value);

  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Async</h1>
      <h1>{counter}</h1>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}> decrease</button>
      <button onClick={() => dispatch(reset())}> reset</button>
      <button onClick={() => dispatch(fetchPokemon())}>fetch pokemon</button>

      {!loading && pokemon.map((poke) => <p key={poke.id}>{poke.name} </p>)}
      <button onClick={() => dispatch(fetchProducts())}>fetch products</button>
      {!productLoading &&
        products.map((product) => <p key={product.id}>{product.name} </p>)}
    </>
  );
}

export default App;
