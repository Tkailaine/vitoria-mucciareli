// seo.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, writeFileSync } from "fs";

const hostname = "https://vitoriamucciareliadvocacia.com.br/";

// cria o stream
const sitemap = new SitemapStream({ hostname });

// escreve o arquivo sitemap.xml na raiz
const writeStream = createWriteStream("./sitemap.xml");
sitemap.pipe(writeStream);

// adiciona as páginas
sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
sitemap.write({ url: "/sobre", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/atuacao", changefreq: "monthly", priority: 0.8 });
sitemap.write({ url: "/blog", changefreq: "daily", priority: 0.7 });
sitemap.write({ url: "/contato", changefreq: "monthly", priority: 0.5 });

// fecha o stream
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log("✅ sitemap.xml criado com sucesso!");
});

// gera robots.txt também na raiz
const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml
`.trim();

writeFileSync("./robots.txt", robotsTxt);
console.log("✅ robots.txt criado com sucesso!");
