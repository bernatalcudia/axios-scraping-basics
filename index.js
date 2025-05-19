import * as cheerio from 'cheerio'
import axios from 'axios'



const main = async () => {
    const cheerioDocsWeb = await axios.get('https://:cheerio.js.org/docs/intro')
    // const $ = cheerio.load('<h2 class="title">Hello world</h2>')

    // const text = $('h2.title').text()

    // console.log(text)
    console.log(cheerioDocsWeb)

}
main()