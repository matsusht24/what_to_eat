import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .rpc("random_restaurant");

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json(data?.[0] ?? null);
}
