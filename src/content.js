const Work = [
    {
        title: 'Wrapp',
        subtitle: 'May 2017 - Present | Head Of Merchant Product',
        body: `Currently managing a team of developers to expose Wrapp's campaign logic and transactional insights to our merchant customers through an innovative self-service tool. 
                `
    },
    {
        title: 'Mobenzi',
        subtitle: 'January 2017 - May 2017 | Software Project Manager',
        body: `
        During a transition period before moving to Europe, I worked with a team of talented developers at Mobenzi, managing project specific implementations of the Mobenzi platform. Check out some of the cool things Mobenzi are doing in the world of mobile research <a href="http://mobenzi.com/">here</a>.`
    },
    {
        title: 'Groupon South Africa',
        subtitle: 'November 2016 - December 2017 | Head Of Strategy & Planning',
        body: `Headed up a team of 8 planners working to optimise Groupon's inventory across the Local, Travel & Product verticals.`
    },
    {
        title: 'Yumbi',
        subtitle: 'October 2015 - November 2017 | Marketing Manager',
        body: `Worked to shape Yumbi's brand into two coherent stories - a whitelabeled enterprise B2B service, and a high engagement B2C app.`
    },
    {
        title: 'Groupon Australia',
        subtitle: 'January 2013 - October 2015 | Planning Analyst',
        body: `Reporting to the Strategy Manager for the New South Wales and Queensland regions, I worked to ensure that Groupon’s Queensland pages were kept crisp, creative and commercially viable.

        This role was all about strategic product planning - using various data sources to understand regional demand, and plan supply accordingly.`
    }
]

const Projects = [
    {
        title: 'simple-transaction-processor',
        href: 'https://github.com/bouwermike/simple-transaction-processor',
        body: `A first attempt at using Node's native event emitter. 
            The idea was to mock a small part of Wrapp's transactional processing flow. <br> This fires events at each step, with appropriate handlers listening downstream.
            Clone the repo and follow along in a terminal :) <br><br>
            
            <b>Stack Used</b>
            <ul>
                <li> Just plain ol' NodeJS </li>
            </ul>
            `
    },
    {
        title: 'Product-X',
        href: 'https://github.com/go-product-x',
        body: `Product-X is a more mature attempt at mocking a 'transactional-processor' based on a simple event driven architecture.
                I've broken this into a few different services, one to generate dummy transactions, one to handle queueing, and one to handle actual business logic.<br><br>
                The goal of this project was to learn about RabbitMQ, and use PostgresDB's native pub/sub to pass some events about. I also wanted to focus on proper error handling and code commenting.
                Feel free to check out the repos and give me some feedback! I'd welcome comments on my code. (Be gentle, I'm learning!)  <br><br>
                
                <b>Stack Used</b>
                <ul>
                    <li> NodeJS</li>
                    <li> Express</li>
                    <li> RabbitMQ (with AMQPlib for Node)</li>
                    <li> PostgresDB with node-postgres</li>
                </ul>
                `
    },
    {
        title: 'bouwermichael.com',
        href: 'https://github.com/bouwermike/bouwermichael',
        body: `The website you're busy looking at was built with my bare hands, using nothing but plain old vanillaJS - and I mean really vanillaJS, the whole site is created on the fly using JS and HTML template literal strings.
                I'm not super proud of how this site has been built - to be honest, its hacky AF. <br><br>
                But, I wanted to teach myself a few things - specifically how to setup Webpack from scratch, how to use DocumentFragments to store pieces of HTML, and how to handle simple hash routing by listening to "popstate" events.
                <br><br>
                Feel free to check out the repo and judge me ruthlessly. (Full disclosure: I know this is not a good way to build websites.)
                <br><br>
                <b>Stack Used</b>
                <ul>
                    <li> vanillaJS, via transpiled ES7.</li>
                    <li> Webpack</li>
                    <li> NPM scripts for build tasks etc.</li>
                </ul>
                `
    },
    {
        title: 'warpShift',
        href: 'https://github.com/bouwermike/warp-shift',
        body: `This is a little physics game built using SVG and plain old JS. I wanted to learn about mutation observers, and also get my head around some really simple physics.
                I want to come back to this and clean up the code (said every developer ever). The code is kind of all over the place, but the <a href="https://bouwermike.github.io/warp-shift/">game</a> is pretty fun. You can fly around and bounce off of
                a randomly generated landscape of little blocks. You can also teleport!
                <br><br>
                <b>Stack Used</b>
                <ul>
                    <li> vanillaJS, literally. The repo doesn't even have a package.json.</li>
                </ul>
                `
    }
]

const Writing = [
    {
        title: 'There is no low hanging fruit until you’ve found product-market fit',
        href: 'https://medium.com/@michaelbouwer/there-is-no-low-hanging-fruit-until-youve-found-product-market-fit-62483345de9e',
        description: 'An article in which I argue for a distinction between <i>Inception</i> and <i>Optimisation</i>. ' 
    },
    {
        title: 'Where do you actually add value?',
        href: 'https://medium.com/@michaelbouwer/where-do-you-actually-add-value-b2983677e766',
        description: 'An article in which I explore what it is that I am <i>actually</i> good at.' 
    },
    {
        title: 'Groupon South Africa: Lessons From the End of An Era',
        href: 'https://medium.com/@michaelbouwer/groupon-south-africa-lessons-from-the-end-of-an-era-5de4f35f7b79',
        description: 'An article in which I recount the experience of watching a multi-national corporation close up shop around me.' 
    },

]

const Skills = [
    {
        title: 'Education',
        body: `<i>Bachelor of Commerce</i> Economics, University of South Africa`
    },
    {
        title: 'Tools',
        body: `
        <ul>
            <li>Jira</li>
            <li>Saleforce</li>
            <li>PowerBI</li>
            <li>Mode Analytics</li>
            <li>Periscope Data</li>
            <li>Metabase</li>
            <li>Superset (though I gave up cos it's buggy)</li>
            <li>Github</li>
            <li>Heroku</li>
            <li>AWS (SNS,SQS, Lambda with <i>Serverless</i>. Never actually used EC2.)</li>
        </ul>
        `
    },
    {
        title: 'Code',
        body: `
        <ul>
            <li>NodeJS</li>
            <li>Express</li>
            <li>vanillaJS</li>
            <li>Webpack</li>
            <li>Some React</li>
            <li>Some Vue</li>
            <li>Some Python</li>
            <li>Some Numpy</li>
            <li>Some Pandas</li>  
        </ul>
        `
    },
    {
        title: 'Databases',
        body: `
        <ul>
            <li>MySQL</li>
            <li>Postgres (the best!)</li>
            <li>Redshift</li>
            <li>MongoDB</li>
            <li>Redis</li>
        </ul>
        `
    }
]


const Aboutme = [
    {
        title: '',
        body: `
        <p>
    Orignally, from Durban, South Africa, I have spent the last few years travelling and working for tech companies, in this order:<br>
    <ul>
        <li>Sydney, Australia</li>
        <li>Back to Durban</li>
        <li>Cape Town, South Africa</li>
        <li>Stockholm, Sweden</li>
        <li>Next?</li>
    </ul>
    <br>On my off days, you'll find me surfing, writing, building hacky apps in NodeJS, and hanging out with my daughter.
    <br><br>I'm currently based in Stockholm, Sweden, heading up the merchant facing product of  <a href="https://www.wrapp.com/">Wrapp</a>.</p>
<br>
<h4>Get in touch</h4>
<p>(+46) 0728419904 </p>
<p><a href="mailto:bouwermichael@gmail.com">bouwermichael@gmail.com</a></p>
<p><a href="https://www.linkedin.com/in/michael-bouwer-922b0163/">LinkedIn</a></p>
`
    }
]

const Title = `Product. Strategy. Storytelling.`

const Hero = `
I am a product & business strategist with experience working for large and small tech companies on three continents.<br><br>
I care about two things: finding product-market fit, and then achieving scale.<br><br>
I've tried to position myself at the intersection of tech, business, and design - equal parts tech nerd, sales jock and UX hipster.
Most of all, I enjoy turning data into executable narrative - breaking down complex problems into simple stories that drive a company towards product-market fit, and ultimately, commercial success.`


export { Work, Projects, Writing, Skills, Aboutme, Title, Hero }