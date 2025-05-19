import * as cheerio from 'cheerio'
import axios from 'axios'



const main = async () => {
    const cheerioDocsWebResponse = await axios.get('https://:cheerio.js.org/docs/intro')
    const cheerioDocsWeb = cheerioDocsWebResponse.data
    const $ = cheerio.load(cheerioDocsWeb)

    const text = $('h1').text()

    console.log(text)

}
main()