import { serve } from 'https://deno.land/std@0.124.0/http/server.ts'
import { doc } from "https://deno.land/x/deno_doc@v0.26.0/mod.ts";

serve((req) => {

	const entrypoint = new URL(req.url).searchParams.get('entrypoint')

	return new Response(JSON.stringify(doc(entrypoint)), {
		headers: { "content-type": "application/json" }
	})
})