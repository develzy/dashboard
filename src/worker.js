
export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const origin = request.headers.get("Origin") || "*";

        // CORS Headers logic
        const corsHeaders = {
            "Access-Control-Allow-Origin": origin,
            "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        if (request.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (url.pathname === "/api/yayasan") {
            try {
                const { results } = await env.DB.prepare(
                    "SELECT * FROM yayasan LIMIT 1"
                ).all();
                return new Response(JSON.stringify(results[0]), {
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                });
            } catch (e) {
                return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: corsHeaders });
            }
        }

        return new Response("Not Found", { status: 404, headers: corsHeaders });
    },
};
