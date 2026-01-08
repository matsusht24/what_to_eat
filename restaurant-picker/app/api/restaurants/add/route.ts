import { supabase } from "@/lib/supabase";
export async function POST(req: Request) {
  const { name } = await req.json();

  const { data, error } = await supabase
    .from("restaurants")
    .insert([{ name}]);

  if (error) return Response.json({ error }, { status: 400 });

  return Response.json({ success: true, data });
}
