import HomePage from "./Home";
import { API_URL } from "../contants";

async function getLists() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json.results;
}

export default async function Home() {
  const lists = await getLists();
  return <HomePage initialLists={lists} />;
}
