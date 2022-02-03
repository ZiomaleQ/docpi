import { serve } from 'https://deno.land/std@0.124.0/http/server.ts'
import { doc } from "https://deno.land/x/deno_doc@v0.26.0/mod.ts";

serve(async (req) => {

	const entrypoint = new URL(req.url).searchParams.get('entrypoint')

	try {

		const docs = await doc(entrypoint ?? "https://raw.githubusercontent.com/denoland/deno_doc/main/mod.ts")

		return new Response(JSON.stringify(docs), {
			headers: { "content-type": "application/json" }
		})
	} catch (_err) {
		return new Response("{\"error\":\"Couldn't generate the docs\"}",
		{
			status: 400,
			headers: { "content-type": "application/json" }
		})
	}
	
})