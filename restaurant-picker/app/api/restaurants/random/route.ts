import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("restaurants")
    .select("*")
    .order("random()")
    .limit(1);

  if (error) return Response.json({ error }, { status: 400 });

  return Response.json(data[0]);
}
