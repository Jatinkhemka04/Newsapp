import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
 
  articles= [
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Thomas Gibbons-Neff, Dan Bilefsky, Farnaz Fassihi",
    "title": "Ukraine-Russia War: Live Updates - The New York Times",
    "description": "António Guterres helped broker the deal restoring the flow of food out of Ukraine. He and the leaders of Ukraine and Turkey will discuss the battles threatening a nuclear plant.",
    "url": "https://www.nytimes.com/live/2022/08/18/world/ukraine-russia-news-war",
    "urlToImage": "https://static01.nyt.com/images/2022/08/18/multimedia/18ukraine-briefing-promo-830am/18ukraine-briefing-promo-830am-facebookJumbo.jpg",
    "publishedAt": "2022-08-18T12:38:32Z",
    "content": "KYIV, Ukraine Russia unleashed a furious barrage of rocket attacks on the northeastern city of Kharkiv overnight Wednesday and Thursday morning, destroying a dormitory for the deaf, pulverizing score… [+3528 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Tierney Sneed",
    "title": "What to watch for from Thursday's hearing on releasing more warrant documents from the Mar-a-Lago search - CNN",
    "description": "An extraordinary dispute will play out in a federal courthouse in South Florida on Thursday afternoon over what transparency the American public is owed into the Justice Department investigation of the handling of classified documents from former President Do…",
    "url": "https://www.cnn.com/2022/08/18/politics/trump-mar-a-lago-search-doc-hearing/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220814133505-trump-documents-mar-a-lago.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-08-18T11:29:00Z",
    "content": "An extraordinary dispute will play out in a federal courthouse in South Florida on Thursday afternoon over what transparency the American public is owed into the Justice Department investigation of t… [+7264 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Barbara Kollmeyer",
    "title": "This contrarian investor gave a timely warning for the last big tech top. He now sees the biggest drop of this bear market dead ahead. - MarketWatch",
    "description": "Critical information for the U.S. trading day",
    "url": "https://www.marketwatch.com/story/this-contrarian-investor-gave-a-timely-warning-for-the-last-big-tech-top-he-now-sees-the-biggest-drop-of-this-bear-market-dead-ahead-11660820188",
    "urlToImage": "https://images.mktw.net/im-606276/social",
    "publishedAt": "2022-08-18T10:56:00Z",
    "content": "When can we truly say goodbye to this bear market? While Bank of Americas global fund managers are no longer apocalyptically bearish, some on Wall Street remain wary. Add our call of the day to that … [+6441 chars]"
    },
    {
    "source": {
    "id": "ign",
    "name": "IGN"
    },
    "author": "Ryan Dinsdale",
    "title": "Modding Websites Take Stance Against Anti LGBTQ+ Content - IGN",
    "description": "Major video game modding websites Nexus Mods and ModDB have taken a public stance against anti-LGBTQ+ content, after a Spider-Man PC mod aimed to remove every Pride flag in the game.",
    "url": "https://www.ign.com/articles/modding-websites-ban-anti-lgbtq-content-pride-flag-removal",
    "urlToImage": "https://assets-prd.ignimgs.com/2022/08/18/spider-manlgbtw-1660817276311.jpg?width=1280",
    "publishedAt": "2022-08-18T10:33:42Z",
    "content": "Major video game modding websites Nexus Mods and ModDB have taken a public stance against anti-LGBTQ+ content, after a Spider-Man PC mod aimed to remove every Pride flag in the game.\r\nNexus Mods, a w… [+2883 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Mike Calia",
    "title": "5 things to know before the stock market opens Thursday - CNBC",
    "description": "Here are the most important news items that investors need to start their trading day.",
    "url": "https://www.cnbc.com/2022/08/18/5-things-to-know-before-the-stock-market-opens-thursday-august-18.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107094894-16589473692022-07-27t183942z_1626511717_rc2ikv9tvqzy_rtrmadp_0_usa-fed.jpeg?v=1658947480&w=1920&h=1080",
    "publishedAt": "2022-08-18T10:32:33Z",
    "content": "Traders work on the floor of the New York Stock Exchange (NYSE), August 17, 2022.\r\nHere are the most important news items that investors need to start their trading day:\r\n1. Stocks look to bounce bac… [+4617 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NBCSports.com"
    },
    "author": "Josh Alper",
    "title": "Romeo Doubs: Aaron Rodgers just wants us to see what he sees - NBC Sports",
    "description": "When Aaron Rodgers speaks, people in Green Bay listen and that was the case with the quarterback’s comments about the team’s young receivers this week.Rodgers said those players have to be much more consistent when it comes to things like route running if the…",
    "url": "https://profootballtalk.nbcsports.com/2022/08/18/romeo-doubs-aaron-rodgers-just-wants-us-to-see-what-he-sees/",
    "urlToImage": "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2022/08/GettyImages-1414691032-e1660818260291.jpg",
    "publishedAt": "2022-08-18T10:24:00Z",
    "content": "When Aaron Rodgers speaks, people in Green Bay listen and that was the case with the quarterbacks comments about the teams young receivers this week.\r\nRodgers said those players have to be much more … [+1107 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "MarketWatch"
    },
    "author": "Anviksha Patel",
    "title": "This investor made $110 million from trading Bed Bath & Beyond --- and he's a 20-year-old student - MarketWatch",
    "description": "A 20-year-old USC student has made a $110 million profit from trading meme stock favorite Bed Bath & Beyond, following a frenzy in Wednesday’s trading session.",
    "url": "https://www.marketwatch.com/story/this-investor-made-110-million-from-trading-bed-bath-beyond-and-hes-reportedly-a-20-year-old-student-11660814284",
    "urlToImage": "https://images.mktw.net/im-604869/social",
    "publishedAt": "2022-08-18T09:18:00Z",
    "content": "At least one investor exited Bed Bath &amp; Beyond ahead of GameStop chairman Ryan Cohen.Securities and Exchange Commission filings show that Jake Freeman, who is a 20-year-old student, made $110 mil… [+1920 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "STAT"
    },
    "author": null,
    "title": "History doesn't have to repeat itself with stigma and monkeypox - STAT",
    "description": "Had the monkeypox outbreak emerged among young children in classrooms and summer camps across the country, the public health response would almost certainly moved swiftly to protect them.",
    "url": "https://www.statnews.com/2022/08/18/history-doesnt-have-to-repeat-itself-with-stigma-and-monkeypox/",
    "urlToImage": "https://www.statnews.com/wp-content/uploads/2022/08/AdobeStock_489460077-1024x576.jpeg",
    "publishedAt": "2022-08-18T08:51:09Z",
    "content": "Ricky (not his real name), is a patient of mine: a young, gay man with a gentle soul and well-controlled HIV. He recently went to his local emergency department with a rash on his face, excruciating … [+8100 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "By Heather Chen, Jack Guy and Ed Upright, CNN",
    "title": "Russia's war in Ukraine: Live updates - CNN",
    "description": "Ukrainian officials said seven people were killed and 20 others wounded in a Russian rocket attack on an apartment building in the northeastern city of Kharkiv in the early hours of Thursday. Follow here for the latest from Ukraine.",
    "url": "https://www.cnn.com/europe/live-news/russia-ukraine-war-news-08-18-22/index.html",
    "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220817093704-02-odesa-strike-0817-super-tease.jpg",
    "publishedAt": "2022-08-18T08:16:00Z",
    "content": "Russia's ministry of defense has said it is considering shutting down the occupied Zaporizhzhia nuclear power plant (NPP) in southern Ukraine, triggering a warning from Ukraine's state nuclear agency… [+2496 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "TMZ"
    },
    "author": "TMZ Staff",
    "title": "'RuPaul's Drag Race' Star Denies Stealing Wad of Cash from Vegas Guest - TMZ",
    "description": "A famous drag queen is denying stealing a massive amount of cash from a guest who claims the performer straight-up jacked her in plain sight ... a moment that was captured on video.",
    "url": "https://www.tmz.com/2022/08/18/rupaul-drag-race-queen-denies-stealing-money-vegas-guest/",
    "urlToImage": "https://imagez.tmz.com/image/43/16by9/2022/08/17/43e223e883484ed0b200456996bfb81f_xl.jpg",
    "publishedAt": "2022-08-18T07:50:00Z",
    "content": "A famous drag queen is denying stealing a massive amount of cash from a guest who claims the performer straight-up jacked her in plain sight ... a moment that was captured on video.\r\nBryan Watkins --… [+1389 chars]"
    },
    {
    "source": {
    "id": "cbs-news",
    "name": "CBS News"
    },
    "author": null,
    "title": "Remains of two children found in two suitcases auctioned in New Zealand - CBS News",
    "description": "An investigator says authorities \"are making very good progress with DNA inquiries\" as they try to identify the children and bring anyone behind their deaths to justice.",
    "url": "https://www.cbsnews.com/news/remains-of-two-children-found-in-two-suitcases-auctioned-in-new-zealand/",
    "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2022/08/12/f9780fa6-5a59-480a-91d3-a70376a9c5d5/thumbnail/1200x630/072689e37a9e5da27bd30e0b1568ab26/shutterstock_1191163906-7.jpg",
    "publishedAt": "2022-08-18T06:41:00Z",
    "content": "New Zealand police on Thursday confirmed that human remains found in two suitcases bought at an Auckland auction were those of two primary school-aged children, and officers vowed to find those respo… [+1837 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Sam Meredith",
    "title": "Germany has worked hard to shore up winter gas supplies — and it's ahead of schedule - CNBC",
    "description": "Russia has drastically reduced natural gas supplies to Europe, with flows via the Nord Stream 1 pipeline currently operating at just 20% of agreed volumes.",
    "url": "https://www.cnbc.com/2022/08/18/winter-gas-germany-ahead-of-schedule-on-natgas-supplies.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107104486-1660654512833-gettyimages-1242044611-20090101220722-99-113803.jpeg?v=1660654680&w=1920&h=1080",
    "publishedAt": "2022-08-18T05:19:26Z",
    "content": "European governments are scrambling to fill underground storage with gas supplies to provide households with enough fuel to keep homes warm during winter.\r\nGermany's natural gas storage facilities su… [+6666 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Times"
    },
    "author": "Trish Bendix",
    "title": "Trevor Noah on Liz Cheney’s ‘Bigly’ Loss - The New York Times",
    "description": "Noah said her defeat in a primary was “the chance for Wyoming Republicans to declare whether they stood with Liz Cheney or with Donald Trump, and they answered bigly.”",
    "url": "https://www.nytimes.com/2022/08/18/arts/television/trevor-noah-liz-cheney.html",
    "urlToImage": "https://static01.nyt.com/images/2022/08/18/arts/18latenight/18latenight-facebookJumbo.png",
    "publishedAt": "2022-08-18T05:15:47Z",
    "content": "You know how everyones been talking about the great resignation where people are just like leaving their jobs after the pandemic? Well, if you hate your job and fear confrontation, theres a new thing… [+1102 chars]"
    },
    {
    "source": {
    "id": "fox-news",
    "name": "Fox News"
    },
    "author": "Tracy Wright",
    "title": "Anne Heche said she 'warned' her 'Ally McBeal' co-star Portia de Rossi against pursuing ex Ellen DeGeneres - Fox News",
    "description": "Anne Heche told Portia de Rossi that her ex Ellen DeGeneres was a \"red flag\" on an episode of her podcast in 2021. Heche died and was removed from life support on Sunday.",
    "url": "https://www.foxnews.com/entertainment/anne-heche-warned-ally-mcbeal-co-star-portia-de-rossi-against-pursuing-ex-ellen-degeneres",
    "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/heche_portia.jpg",
    "publishedAt": "2022-08-18T04:57:16Z",
    "content": "Anne Heche recalled telling Portia de Rossi not to pursue her ex-girlfriend, Ellen DeGeneres, during a 2021 episode of her \"Better Together\" podcast with Heather Duffy.\r\nIn the YouTube video, Heche r… [+4172 chars]"
    },
    {
    "source": {
    "id": "abc-news",
    "name": "ABC News"
    },
    "author": "RAHIM FAIEZ and EBRAHIM NOROOZI Associated Press",
    "title": "Bombing at Kabul mosque kills 10, including prominent cleric - ABC News",
    "description": "An Afghan resident and police say that a bombing at a mosque in Kabul during evening prayers killed at least 10 people, including a prominent cleric, and wounded at least 27",
    "url": "https://abcnews.go.com/International/wireStory/bombing-kabul-mosque-kills-10-including-prominent-cleric-88505346",
    "urlToImage": "https://s.abcnews.com/images/International/WireAP_df7edfc615ef4db08e960fc95dabe3fa_16x9_992.jpg",
    "publishedAt": "2022-08-18T04:30:00Z",
    "content": "KABUL, Afghanistan -- A bombing at a mosque in the Afghan capital of Kabul during evening prayers on Wednesday killed at least 10 people, including a prominent cleric, and wounded at least 27, an eye… [+3002 chars]"
    },
    {
    "source": {
    "id": "politico",
    "name": "Politico"
    },
    "author": null,
    "title": "NY-10 debate is a lion's den for Daniel Goldman - POLITICO",
    "description": "Strong polling and a coveted endorsement — along with a nod from former President Donald Trump — had opponents circling former federal prosecutor Dan Goldman Wednesday.",
    "url": "https://www.politico.com/news/2022/08/17/ny-10-debate-daniel-goldman-00052587",
    "urlToImage": "https://static.politico.com/2a/bd/9c7a8c3c4f17beef1543d77734c9/https-delivery.gettyimages.com/downloads/1187383080",
    "publishedAt": "2022-08-18T03:35:06Z",
    "content": "We should know enough by now that we cant take Donald Trump at his word, and that he likes to meddle in elections, Goldman said in response to a question about the endorsement posed by debate hosts P… [+2816 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YourTango"
    },
    "author": "Ruby Miranda",
    "title": "The 3 Zodiac Signs With Rough Horoscopes On Thursday, August 18, 2022 - YourTango",
    "description": "Cancer, Leo and Virgo, you are the three zodiac signs with rough horoscopes on Thursday, August 18, 2022. Read on to find out why.",
    "url": "https://www.yourtango.com/2022353202/zodiac-signs-rough-horoscopes-thursday-august-18-2022",
    "urlToImage": "https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/zodiac-signs-rough-horoscopes-thursday-august-18-2022.png?itok=HGlVsefA",
    "publishedAt": "2022-08-18T03:03:30Z",
    "content": "What's standing in the way (or rather, hovering) of our having a really good day is the obstacle transit known as Moon square Saturn. What this transit has the power of doing to us is that it will pu… [+4788 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Omaha World-Herald"
    },
    "author": "Julie Anderson World-Herald Staff Writer",
    "title": "Douglas County child dies from suspected 'brain-eating amoeba' - Omaha World-Herald",
    "description": "A child died this week from a suspected infection, which may have been acquired while swimming in the Elkhorn River, according to the Douglas County Health Department.",
    "url": "https://omaha.com/news/local/douglas-county-child-dies-from-suspected-brain-eating-amoeba/article_e44c5f72-1e77-11ed-a8d1-27b72538869f.html",
    "urlToImage": "https://bloximages.newyork1.vip.townnews.com/omaha.com/content/tncms/assets/v3/editorial/e/44/e44c5f72-1e77-11ed-a8d1-27b72538869f/62fd7bb4b6989.preview.jpg?crop=1402%2C736%2C5%2C33&resize=1200%2C630&order=crop%2Cresize",
    "publishedAt": "2022-08-18T02:45:36Z",
    "content": "A Douglas County child died this week from a suspected infection with the amoeba Naegleria fowleri, which may have been acquired while swimming Sunday in the Elkhorn River, according to the Douglas C… [+3465 chars]"
    },
    {
    "source": {
    "id": "the-wall-street-journal",
    "name": "The Wall Street Journal"
    },
    "author": "Yuka Hayashi",
    "title": "U.S., Taiwan to Begin Formal Talks for Trade, Investment Pact This Fall - The Wall Street Journal",
    "description": "The aim is to deepen ties on a range of issues including digital trade, agriculture and trade facilitation, and comes amid fresh tensions over Taiwan between the U.S. and China.",
    "url": "https://www.wsj.com/articles/u-s-taiwan-to-begin-formal-talks-for-trade-investment-pact-this-fall-11660783393",
    "urlToImage": "https://images.wsj.net/im-606189/social",
    "publishedAt": "2022-08-18T02:07:00Z",
    "content": "WASHINGTONThe U.S. announced Wednesday that it and Taiwan will start negotiations for a bilateral trade and investment initiative this fall to deepen ties on a range of issues including technology an… [+263 chars]"
    },
    {
    "source": {
    "id": "usa-today",
    "name": "USA Today"
    },
    "author": "Danny Segura",
    "title": "UFC welterweights predict Kamaru Usman vs. Leon Edwards 2 - MMA Junkie",
    "description": "Kamaru Usman or Leon Edwards? UFC welterweights give their prediction.",
    "url": "https://mmajunkie.usatoday.com/lists/ufc-278-kamaru-usman-vs-leon-edwards-2-welterweight-peer-fighter-predictions",
    "urlToImage": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2015/12/kamaru-usman-leon-edwards-ufc-on-fox-17.jpg?w=640&h=420&crop=1",
    "publishedAt": "2022-08-18T02:02:00Z",
    "content": "“Everyone always has a chance when you step in the octagon, that’s always there. I think if Leon Edwards fights smart, he has the tools to win. He’s a long athlete with good distance, he’s southpaw, … [+382 chars]"
    }
    ]
    static defaultProps={
      country : 'in',
      pageSize : 8,
      category : 'general',
     }
     static propTypes={
       country : PropTypes.string,
       pageSize : PropTypes.number,
       category : PropTypes.string,
     }
      capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
  constructor(props){
    super(props);
    this.state={
      articles: this.articles,
      loading: false,
      page :1
    }
    document.title=`${this.capitalizeFirstLetter(this.props.category)}- NewsGuy`
  }
  async componentDidMount(){
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=97eced7703584ae980244d26bb4f7198&pageSize=${this.props.pageSize}`;
    this.setState({
     loading:true
     } )
    let data=  await fetch(url);
    this.props.setProgress(30);
    let pastData= await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: pastData.articles,
     totalResults : pastData.totalResults,
     loading:false
     } )
     this.props.setProgress(100);
  }
  toggleNext = async()=>{
    this.props.setProgress(0);
    if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=97eced7703584ae980244d26bb4f7198&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
      } )
    let data=  await fetch(url);
    this.props.setProgress(30);
    let pastData= await data.json();
    this.props.setProgress(70);
    this.setState({
      page : this.state.page +1,
      articles: pastData.articles,
      loading:false
     } )
    }
    this.props.setProgress(100);
  }
  togglePrev = async()=>{
    this.props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=97eced7703584ae980244d26bb4f7198&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
    let data=  await fetch(url);
    this.props.setProgress(30);
    let pastData= await data.json();
    this.props.setProgress(70);
    this.setState({
      page : this.state.page -1,
      articles: pastData.articles
     } )
     this.props.setProgress(100);
  }
  render() {
    return (<>
      <div className="container my-3">
        <h1 className="text-center" style={{margin : '35px 0px', marginTop: '90px'}}>News-Buddy - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
     {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading&& this.state.articles.map((element)=>{
           return <div className="col-md-3" key={element.url}>
           <Newsitems   title={element.title} description={element.description} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt} newsUrl={element.url}source={element.source.name}/>
             </div>
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.togglePrev}>&laquo; Previous</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.toggleNext}>Next &raquo;</button>
      </div>
      </>
    )
  }
}

export default News
