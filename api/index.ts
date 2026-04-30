import { render } from '../dist/server/entry-server.js'

export default async function handler(req: any, res: any) {
  try {
    const url = req.url

    const html = await render(url)

    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200
    res.end(html)
  } catch (err) {
    res.statusCode = 500
    res.end('Server Error')
    console.error(err)
  }
}