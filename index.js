import * as cheerio from 'cheerio'



const main = () => {
    const $ = cheerio.load('<h2 class="title">Hello world</h2>')

    const text = $('h2.title').text()

    console.log(text)

}
main()