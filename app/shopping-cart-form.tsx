"use client";

import { useState, useTransition } from "react";

type Props = {
  onSubmit: (formData: FormData) => any;
};

export default function ShoppingCartForm({ onSubmit }: Props) {
  let [res, setRes] = useState<any>();
  let [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      let res = await onSubmit(formData);
      setRes(res);
    });
  }

  return (
    <form className="mt-8 rounded border bg-white p-8" action={handleSubmit}>
      <button
        disabled={isPending}
        type="submit"
        className="text-blue-500 hover:text-blue-600 disabled:pointer-events-none disabled:opacity-50"
      >
        Add item
        <span className="ml-2">{!isPending && res?.ok && "✅"}</span>
      </button>
    </form>
  );
}
