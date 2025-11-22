"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [newName, setNewName] = useState("");
  const [choice, setChoice] = useState("");

  async function load() {
    const res = await fetch("/api/restaurants/all");
    setRestaurants(await res.json());
  }

  async function addRestaurant() {
    if (!newName.trim()) return;

    await fetch("/api/restaurants/add", {
      method: "POST",
      body: JSON.stringify({ name: newName }),
    });

    setNewName("");
    load();
  }

  async function pickRandom() {
    const res = await fetch("/api/restaurants/random");
    const data = await res.json();
    setChoice(data?.name || "No restaurants found!");
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="p-6 mx-auto max-w-lg space-y-4">
      <h1 className="text-3xl font-bold">🍽️ Restaurant Picker</h1>

      <div className="flex gap-2">
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border px-3 py-2 rounded w-full"
          placeholder="Add a restaurant..."
        />
        <button onClick={addRestaurant} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <button
        onClick={pickRandom}
        className="bg-green-600 w-full text-white px-4 py-3 rounded text-lg"
      >
        What should we eat?
      </button>

      {choice && <p className="text-xl text-center font-semibold">🎉 {choice}</p>}

      <h2 className="text-xl font-bold pt-4">All restaurants:</h2>
      <ul className="list-disc pl-6">
        {restaurants.map((r: any) => (
          <li key={r.id}>{r.name}</li>
        ))}
      </ul>
    </main>
  );
}
