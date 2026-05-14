/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://dental-namour.vercel.app',
  generateRobotsTxt: false, // We manage robots.txt manually
  exclude: ['/mentions-legales', '/politique-confidentialite', '/cookies'],
  outDir: './public',
}
