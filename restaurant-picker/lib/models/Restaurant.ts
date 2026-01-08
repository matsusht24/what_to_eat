import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

// lib/restaurant.ts
export class Restaurant {
  constructor(
    public id: number,
    public name: string,
    public createdAt: Timestamp
  ) {}

}
