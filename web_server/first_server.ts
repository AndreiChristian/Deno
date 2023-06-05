import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const server = serve({ port: 3000 });

for await (const request of server) {
  request.respond({ body: "Response from Deno" });
}
