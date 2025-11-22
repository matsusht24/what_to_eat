import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const { name, added_by } = await req.json();

  const { data, error } = await supabase
    .from("restaurants")
    .insert([{ name, added_by }]);

  if (error) return Response.json({ error }, { status: 400 });

  return Response.json({ success: true, data });
}
