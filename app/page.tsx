import { revalidatePath } from "next/cache";
import ShoppingCartForm from "./shopping-cart-form";

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let db = {
  items: 1,
};

async function addItemToCart() {
  "use server";
  await sleep(500);
  db.items++;
  revalidatePath("/");

  return { ok: true };
}

export default function Home() {
  return (
    <div className="m-8 mx-auto max-w-md">
      <p>You have {db.items} items in the cart</p>
      <ShoppingCartForm onSubmit={addItemToCart} />
    </div>
  );
}
