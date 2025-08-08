// src/Blogs.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import blogImage1 from '../assets/blog-img/blog1.jpg';
import blogImage2 from '../assets/blog-img/pexels-mikhail-nilov-7988079.jpg';
import blogImage3 from '../assets/blog-img/pexels-diva-plavalaguna-6937667.jpg';
import blogImage4 from '../assets/blog-img/pexels-tobias-dziuba-319638-927629.jpg';
import blogImage5 from '../assets/blog-img/pexels-mikhail-nilov-6981024.jpg';
// import blogImage6 from '../assets/blog-img/pexels-anna-shvets-5211915.jpg';

// Blog post data
export const blogPosts = [
  {
    id: 1,
    title: "Modern SEO best practices for small and medium businesses",
    slug: "modern-seo-best-practices",
    tags: ["SEO"],
    description: "If you are still stuffing keywords into invisible footers, writing blog posts for “Google robots,” or hiring someone’s cousin who promises to 'rank you #1 overnight', then your SEO is dead. Not because the game is over, but because you are playing with 2009 rules in a 2025 arena.",
    fullContent: `
      <p>Let’s clear the confusion first: SEO is not dead but your strategy could be. And it is definitely tired of your outdate tactics.</p>
      <p>If you are still stuffing keywords into invisible footers, writing blog posts for “Google robots,” or hiring someone’s cousin who promises to "rank you #1 overnight," then your SEO is dead. Not because the game is over, but because you are playing with 2009 rules in a 2025 arena.</p>
      <p>It’s time to resurrect your strategy and give it a modern, performance-driven, human-first twist. Here’s how to do SEO the right way, today.</p>
      
      <h2>Step 1: Start with real humans, not algorithms</h2>
      <p><strong>Old SEO:</strong> "What are the exact keywords people type into Google and how many times can I cram them into this sentence?"</p>
      <p><strong>Modern SEO:</strong> "What questions are my potential customers asking and how can I be the best answer on the internet?"</p>
      
      <h3>Tips:</h3>
      <ul>
        <li>Use tools to find real queries posted in internet.</li>
        <li>Structure content around helpful answers, not awkwardly optimized gibberish.</li>
        <li>Focus on topics, not just individual keywords.</li>
      </ul>
      <p class="italic">Example: Instead of targeting “best plumber Tampa cheap fast,” write a guide called “How to find a reliable plumber in Tampa without getting overcharged.”</p>
      
      <h2>Step 2: Content quality over content quantity</h2>
      <p>You can’t just churn out regular posts and expect Google to hand you a trophy.</p>
      
      <h3>Focus on:</h3>
      <ul>
        <li>Depth: Answer all the related questions in one article.</li>
        <li>Authority: Use credible sources, include quotes or data.</li>
        <li>Format: Use headers, bullet points, short paragraphs, and visuals to keep readers engaged.</li>
      </ul>
      <p class="italic">Pro tip: One well-written, genuinely helpful blog post can outperform 10 keyword-stuffed clones any day.</p>
      <p><strong>How Digify America helps:</strong> We don’t create content just to fill space. We craft it to attract, inform, and convert with SEO baked right into every word.</p>
      
      <h2>Step 3: Mobile-first or bust</h2>
      <p>If your site is not mobile-friendly then it is already failing. More than half of web traffic is mobile, and Google indexes your mobile version first.</p>
      
      <h3>Check:</h3>
      <ul>
        <li>Does your content resize properly on different devices?</li>
        <li>Are buttons clickable without a magnifying glass?</li>
        <li>Does your site load in under 3 seconds on mobile?</li>
      </ul>
      
      <h3>Fixes:</h3>
      <ul>
        <li>Use responsive design.</li>
        <li>Optimize image sizes.</li>
        <li>Reduce pop-ups and intrusive interstitials.</li>
      </ul>
      <p>Digify America ensures your site works on mobile and wins at it too.</p>
      
      <h2>Step 4: Technical SEO — Bit complex and totally necessary</h2>
      <p>Technical SEO is like the plumbing in your house. No one sees it, but when it’s broken, everything stinks.</p>
      
      <h3>Checklist:</h3>
      <ul>
        <li>XML Sitemap submitted to Google Search Console</li>
        <li>Proper use of heading tags (H1, H2, H3… and so on)</li>
        <li>Fast load speeds</li>
        <li>HTTPS (secure site)</li>
        <li>Schema markup to help Google understand your content</li>
      </ul>
      <p>These terms are not fancy words but foundational requirement to keep your rankings from sinking.</p>
      <p>At Digify America, we do all the backend work so you don’t have to touch a single line of code.</p>
      
      <h2>Step 5: Link building without being a Gremlin</h2>
      <p>Don’t buy backlinks. Just... don’t. That’s black-hat junk from the days of dial-up.</p>
      
      <h3>Modern link building means:</h3>
      <ul>
        <li>Guest blogging on legit sites in your niche</li>
        <li>Creating useful content people actually want to share</li>
        <li>Partnering with other businesses or influencers</li>
        <li>Earning links through media mentions or PR</li>
      </ul>
      <p>Don’t play games with the system but contribute to it. Be generous. Be relevant. Be smart.</p>
      
      <h2>Step 6: Local SEO for real-world reach</h2>
      <p>If you are a local business, local SEO is your superpower. Show up when people search for things like “coffee shop near me” or “emergency vet Orlando.”</p>
      
      <h3>Essentials:</h3>
      <ul>
        <li>Set up and optimize your Google Business Profile</li>
        <li>Get listed on local directories (Yelp, Bing, Apple Maps, etc.)</li>
        <li>Use consistent Name/Address/Phone (NAP) everywhere</li>
        <li>Encourage customer reviews (and respond to them!)</li>
      </ul>
      <p>We help businesses turn casual Googlers into loyal customers without cramming keywords.</p>
      
      <h2>Step 7: Track, Learn, and Adapt</h2>
      <p>SEO is not a "set it and forget it" deal but an on-going strategy.</p>
      
      <h3>Use:</h3>
      <ul>
        <li>Google Analytics and Search Console to track traffic and search queries</li>
        <li>Heatmaps (like Hotjar) to see where people click</li>
        <li>A/B testing to try different page versions</li>
      </ul>
      
      <h3>Ask:</h3>
      <ul>
        <li>What is working?</li>
        <li>What is outdated?</li>
        <li>What do my users want?</li>
      </ul>
      <p>Then tweak accordingly.</p>
      
      <h2>The Digify America difference</h2>
      <p>We don’t do lazy SEO with outdate methods. We do smart strategy, clean code, optimized content and a relentless drive to help your business stand out.</p>
      <p>Let’s bring your SEO strategy back to life and make sure it stays that way.</p>
      <p>Because SEO will ghost you if you treat it like a number game instead of a conversation with your audience.</p>
      <p>Let’s talk. Let’s rank. Let’s win.</p>
    `,
    imageSrc: blogImage1,
    layout: "col-span-1"
  },
  {
    id: 2,
    title: "Your website is boring: Here’s how to fix that before visitors bounce",
    slug: "your-website-is-boring",
    tags: ["Web Design"],
    description: "Welcome to the hard truth: if your website doesn’t grab attention in three seconds or less, it’s already lost...",
    imageSrc: blogImage2,
    fullContent: `
      <p>You’ve got a website. Great! So does your neighbor’s cat. But is it actually doing anything?</p>
      <p>Welcome to the hard truth: if your website doesn’t grab attention in three seconds or less, it’s already lost. Let’s break down how you can transform your snoozefest of a site into a high-performance conversion machine—without needing to learn code or sacrifice your sanity. And yes, <a href="#">Digify America</a> can do all of this for you (without judging your current homepage).</p>
      
      <h2>1. Visual design that doesn’t make eyes bleed</h2>
      <p>You don’t need to be Picasso, but your website needs to look good. Visitors judge your credibility in milliseconds based on aesthetics alone. That means no clashing colors, Comic Sans fonts, or layout choices inspired by 2003.</p>
      
      <h3>Fixes:</h3>
      <ul>
        <li>Whitespace is your best friend. Don’t cram everything at the top.</li>
        <li>Consistent fonts and colors. Two fonts max. Three colors max.</li>
        <li>Visual hierarchy. Headlines big, subheads smaller, buttons bold.</li>
        <li>High-quality images. Crisp, relevant visuals matter.</li>
      </ul>
      <p><strong>How Digify America helps:</strong> Our design team knows how to make your brand look sharp without going overboard. We design websites people want to look at—and stay on.</p>
      
      <h2>2. Messaging that doesn’t sound like a robot</h2>
      <p>People are not confused—they are bored. And most websites sound like they were written by a sentient PowerPoint slide.</p>
      
      <h3>Fixes:</h3>
      <ul>
        <li>Say what you do—in plain English.</li>
        <li>Focus on benefits, not just features.</li>
        <li>Use tone that reflects your brand (serious, playful, premium?).</li>
        <li>Clear CTAs like “Get Your Free Quote” instead of just “Submit.”</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We craft messaging that’s conversational, clear, and aligned with your voice. We tell your brand story like a human—not a disclaimer.</p>
      
      <h2>3. Performance tweaks that make you lightning fast</h2>
      <p>Even if your site looks great and reads like a dream, it won’t matter if it loads slowly. Think of it as a Porsche stuck in traffic.</p>
      
      <h3>Fixes:</h3>
      <ul>
        <li>Compress your images before uploading.</li>
        <li>Limit unnecessary scripts and plugins.</li>
        <li>Use a CDN to deliver content fast worldwide.</li>
        <li>Mobile-first, responsive design is a must.</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We don’t just design pretty pages—we engineer them for speed. We optimize everything behind the scenes.</p>
      
      <h2>Final Touches: Analytics, UX, and a Little Bit of Soul</h2>
      <ul>
        <li>Track user behavior with Google Analytics.</li>
        <li>Keep forms short—less is more.</li>
        <li>Test, tweak, repeat. Small changes = big wins.</li>
      </ul>
      <p>And here’s the kicker: your website isn’t a one-and-done thing. It’s a living part of your brand that should evolve, respond to user behavior, and constantly delight.</p>
      
      <h2>How Digify America Can Help</h2>
      <p>We turn boring websites into beautiful, high-converting digital machines. Whether you need a full redesign, a performance tune-up, or a complete brand voice overhaul—we are your people. We make websites that are impossible to ignore.</p>
      <p>Stop losing visitors. Start turning them into customers.</p>
    `,
    layout: "col-span-1"
  },
  {
    id: 3,
    title: "The Psychology of Branding: Why your logo is only 10% of the story",
    slug: "psychology-of-branding",
    tags: ["Branding"],
    description: "Your logo is important because it’s a visual signature, a symbol, a badge...",
    imageSrc: blogImage3,
    fullContent: `
      <p>Let’s clear something up: your logo is not your brand. It’s just the tip of the very large, very complex, emotion-laden iceberg floating in the mind of your customer.</p>
      <p>Your logo is important because it’s a visual signature, a symbol, a badge. But without the rest of your brand built around it, it’s just an empty shell. Like dressing a mannequin in designer clothes and hoping someone falls in love with its personality.</p>
      <p>If you want your brand to stick, resonate, and—dare we say—connect, then it’s time to go deeper. Let’s talk about branding psychology, color choices, emotional hooks, tone of voice and why consistency is everything.</p>

      <h2>1. Emotional connection: Brands aren’t logic machines</h2>
      <p>Humans don’t buy with logic. They buy with feelings and then use logic to justify those feelings. This means your brand has to do more than explain—it has to feel.</p>
      <h3>Ask yourself:</h3>
      <ul>
        <li>What do you want people to feel when they interact with your brand?</li>
        <li>Trust? Excitement? Belonging? Confidence?</li>
      </ul>
      <p>Example: Think of Apple. People are not buying tech with it because there are many other brands selling it. They buy identity. Sleek, modern, minimal and powerful.</p>
      <p>This means, your brand should aim to be more than a name, it should be a mood.</p>
      <p><strong>How Digify America helps:</strong> We craft your brand around emotional resonance, not only visual appeal. Because lasting impressions can’t be crafted with pixels alone.</p>

      <h2>2. The silent power of color psychology</h2>
      <p>Colors influence perception before a single word is read. Here’s a quick cheat sheet to understand the psychology behind different colors:</p>
      <ul>
        <li>Red: Excitement, urgency, energy</li>
        <li>Blue: Trust, calm, reliability</li>
        <li>Green: Growth, health, prosperity</li>
        <li>Yellow: Optimism, warmth, creativity</li>
        <li>Black: Sophistication, luxury, power</li>
      </ul>
      <p>But beware, it’s not universal. Context, culture, and contrast all matter. Bold red might work for an energy drink, but probably not for a law firm.</p>
      <p><strong>How Digify America helps:</strong> We choose your brand colors based on psychology. This means we test, refine, and apply them consistently across all touchpoints so you don’t end up looking like a piñata explosion.</p>

      <h2>3. Tone of voice: How your brand sounds when it talks</h2>
      <p>Your brand speaks even when you don’t. From website copy to social captions to email subject lines, it’s all part of the conversation.</p>
      <h3>Is your brand:</h3>
      <ul>
        <li>Friendly or formal?</li>
        <li>Witty or wise?</li>
        <li>Bold or humble?</li>
      </ul>
      <p>The secret sauce: Tone is about how you say things. A bakery and a law firm might offer the same promise of reliability, but they will say it very differently.</p>
      <p>Tip: Imagine your brand as a person. Write like they talk.</p>
      <p><strong>How Digify America helps:</strong> We develop your brand voice across your site, social media, emails, and even ads. The right way to make everything feel cohesive and not chaotic.</p>
      
      <h2>4. Consistency …… because repetition builds recognition</h2>
      <p>The human brain loves patterns. The more someone sees the same logo, hears the same tone, and feels the same vibe across different platforms, the more likely they trust you. Or in other words, inconsistency triggers doubt.</p>
      <h3>Where consistency matters:</h3>
      <ul>
        <li>Logo usage and spacing</li>
        <li>Font styles and typography hierarchy</li>
        <li>Brand colors and imagery</li>
        <li>Copy tone and messaging themes</li>
      </ul>
      <p>Pro tip: Create a brand guide. Then use it religiously.</p>
      <p><strong>How Digify America helps:</strong> We build complete brand systems and logo is just the beginning. So your Instagram post, website, business card, and even your invoices look like they came from the same smart universe.</p>

      <h2>5. The deeper layers: Values, Mission, and Story</h2>
      <p>Modern consumers care about why you exist. They are drawn to authenticity and not only aesthetics.</p>
      <h3>A strong brand knows:</h3>
      <ul>
        <li>Its origin story</li>
        <li>Its mission and values</li>
        <li>Its audience and purpose</li>
      </ul>
      <p>This is what turns casual buyers into loyal fans.</p>
      <p><strong>How Digify America helps:</strong> We uncover your story, help define your values, and shape them into a brand that sells and also stands for something.</p>

      <h2>Your business is not just a logo but a legacy</h2>
      <p>Branding is how people remember you when you are not in the room. It’s how they feel when they see your name. It’s the stories they tell others about you.</p>
      <p>Your logo is just 10% of the work. Let Digify America help you build the other 90%. Because lasting brands are engineered to connect, influence, and inspire.</p>
      <p>Are you ready to turn your brand into something unforgettable? Let’s talk.</p>
    `,
    layout: "col-span-1"
  },
  {
    id: 4,
    title: "Social Media that sells: Here's how you can also turn Likes into Leads",
    slug: "social-media-that-sells",
    tags: ["Social Media"],
    description: "The vanity metrics are fun until you realize your 1,000 likes are not paying the bills...",
    imageSrc: blogImage4,
    fullContent: `
      <p>The vanity metrics are fun until you realize your 1,000 likes are not paying the bills. It’s easy to get caught up in the dopamine rush of social media. It could be a viral reel, a witty caption, or a flood of fire emojis in your DM’s. But if all that engagement is not translating into site visits, email signups, or actual customers, then what’s the point of all this?</p>
      <p>Good news? You can fix that. You can turn likes into leads without selling your soul or sounding like a spammy chatbot from 2012. Let’s break down how.</p>
      
      <h2>1. Lead with value, not vibes</h2>
      <p>First rule of social media that sells: Stop making it about you. Start making it about them. People don’t follow brands just to be sold to. They follow for inspiration, entertainment, education, or connection.</p>
      <p><strong>Instead of:</strong> "Check out our new service!" <strong>Try:</strong> "Struggling with [pick a problem]? Here’s a quick tip that actually works."</p>
      <h3>Your content should:</h3>
      <ul>
        <li>Solve a problem</li>
        <li>Answer a question</li>
        <li>Entertain with relevance</li>
        <li>Offer insight they didn’t know they needed</li>
      </ul>
      <p><strong>Digify America pro move:</strong> We help you create content buckets based on audience pain points and not brand talking points.</p>
      
      <h2>2. Be human and not a headline machine.</h2>
      <p>If your captions read like they were written by an AI who’s afraid of rejection, it’s time for a refresh.</p>
      <ul>
        <li>Speak like a person.</li>
        <li>Use contractions.</li>
        <li>Ask real questions.</li>
        <li>Use emojis but strategically.</li>
      </ul>
      <p>People buy from people, not logos.</p>
      <p><strong>Example:</strong> Instead of posting a stock photo with "Happy Monday! Get organized this week!" try: "Not sure what day it is, but here’s a 30-second productivity trick that might help."</p>
      <p><strong>Digify America pro move:</strong> We refine your brand voice and keep your content sounding sharp, consistent, and human.</p>
      
      <h2>3. Use CTAs that are not awkward</h2>
      <p>Yes, you need to tell people what to do. But that doesn’t mean you need to end every post with "Click the link in bio."</p>
      <h3>Better CTA examples:</h3>
      <ul>
        <li>"Want the full how-to? We broke it down on the blog."</li>
        <li>"We just posted the checklist version, check our story."</li>
        <li>"Need help with this? Shoot us a DM."</li>
      </ul>
      <p>CTAs should feel like a natural extension of the conversation and not an abrupt sales pitch.</p>
      
      <h2>4. Create native funnels that don’t feel like a sales pitch</h2>
      <p>People don’t go on Instagram to find your pricing page. They go to scroll, snack on content and sometimes get curious enough to learn more.</p>
      <h3>Your job? Make that curiosity effortless.</h3>
      <ul>
        <li>Mini value posts that tease a longer blog or freebie</li>
        <li>Stories with polls or quizzes that segment interest</li>
        <li>Linktree-style landing pages that are branded and intuitive</li>
      </ul>
      <p>Each piece of content should serve a purpose: Pull the user closer without pushing them away.</p>
      <p><strong>Digify America pro move:</strong> We design customized micro-funnels from post to landing page to lead magnet. It’s not spam, it’s smart.</p>
      
      <h2>5. Engage like you are at a dinner party</h2>
      <p>Stop posting and ghosting. Engagement is more than likes and shares. It includes comments, DMs, tagged mentions, reactions and how you respond.</p>
      <h3>Real engagement tips:</h3>
      <ul>
        <li>Reply to every comment (especially the thoughtful ones)</li>
        <li>Ask open-ended questions in your captions</li>
        <li>Jump into your audience’s content, don’t wait for them to come to you</li>
      </ul>
      <p>Bonus: Save stories where people tag your brand. Create a highlights section that acts as social proof.</p>
      <p><strong>How Digify America Helps:</strong> We manage your social presence with intention, ensuring that every interaction builds brand affinity and maybe even a sale.</p>
      
      <h2>6. Track what matters</h2>
      <p>Sure, 500 likes look good. But you know what’s better?</p>
      <ul>
        <li>15 people who clicked the link</li>
        <li>8 who downloaded your free guide</li>
        <li>2 who scheduled a call</li>
      </ul>
      <p>Now that is the real gold.</p>
      <h3>Use tools like:</h3>
      <ul>
        <li>Instagram Insights</li>
        <li>Google Analytics</li>
        <li>Bitly for trackable links</li>
      </ul>
      <p>Watch what content leads to actual actions. Double down on what works.</p>
      <p><strong>Digify Bonus:</strong> We handle performance reviews monthly. And this means no guesswork, just growth.</p>
      
      <h2>Stop posting just to post</h2>
      <p>If your content is not leading people somewhere (mentally or literally) then you are just making noise.</p>
      <p>But when you focus on value, voice, and real connections, you build a brand people want to follow. And more importantly, buy from.</p>
      <p>That’s where we come in.</p>
      <p>At Digify America, we turn your social feed into a lead-generating machine with smart strategy, scroll-stopping design, and human-first storytelling.</p>
      <p>Let’s make each ‘like’ work harder.</p>
    `,
    layout: "col-span-1 lg:col-span-1 row-span-2"
  },
  {
    id: 5,
    title: "Digital first impressions: What your homepage says about your business in 3 seconds or less",
    slug: "digital-first-impressions",
    tags: ["Web Design"],
    description: "Digital first impressions: What your homepage says about your business in 3 seconds or less...",
    imageSrc: blogImage5,
    fullContent: `
      <p>Your homepage is being judged right now. Not in ten seconds. Not after a scroll. Right now.</p>
      <p>Within the first three seconds of landing on your site, visitors have already formed an opinion about your brand. They have either decided to stay and explore or bail like someone just pulled the fire alarm.</p>
      <p>So, what is your homepage really saying?</p>
      <p>Let’s break it down and help you figure out whether your site is attracting new visitors or pushing them away.</p>

      <h2>1. Clarity: What you can do instantly?</h2>
      <p>The moment someone lands on your homepage, they are subconsciously asking: What is this? Is it for me? Why should I care?</p>
      <p>If they don’t get that answer immediately, you have lost them.</p>
      <p>You might have the best service in the world, but if it’s buried under cluttered layouts, no one will stick around.</p>
      <h3>Ask yourself:</h3>
      <ul>
        <li>Is your main headline clear and jargon-free?</li>
        <li>Does the subheading explain what you offer and how it benefits the visitor?</li>
        <li>Are there visible calls to action (CTAs) above the fold?</li>
      </ul>
      <h3>Fixes:</h3>
      <ul>
        <li>Use simple, bold headlines that spell out your value.</li>
        <li>Include a brief explainer or tagline that answers the big “why.”</li>
        <li>Place a primary CTA where it can’t be missed.</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We turn your homepage into a mission statement your audience understands.</p>

      <h2>2. Visual impact: Do you look like you know what you are doing?</h2>
      <p>Just like books are judged by their covers, businesses are judged by their websites.</p>
      <p>A cluttered design screams: “We haven’t updated this since Obama’s first term.” And that kind of impression sticks.</p>
      <h3>Quick Visual Audit:</h3>
      <ul>
        <li>Is your design clean and modern?</li>
        <li>Are your brand colors consistent?</li>
        <li>Are your fonts readable across devices?</li>
        <li>Does the layout guide the eye naturally from top to bottom?</li>
      </ul>
      <h3>Fixes:</h3>
      <ul>
        <li>Simplify. Use white space. Let your design breathe.</li>
        <li>Keep everything from logos to text and buttons aligned. Visual order = mental calm.</li>
        <li>Invest in original imagery or high-quality visuals that reflect your brand.</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We design homepages that look nice and lead users exactly where you want them to go, effortlessly.</p>

      <h2>3. Loading speed: Are you even there?</h2>
      <p>If your site takes more than three seconds to load, a chunk of your audience is already gone. That’s not a maybe, that’s data.</p>
      <h3>Quick Check:</h3>
      <ul>
        <li>Test your site on Google PageSpeed Insights or GTmetrix.</li>
        <li>Load it on your phone using mobile data.</li>
      </ul>
      <h3>Fixes:</h3>
      <ul>
        <li>Compress images and streamline media.</li>
        <li>Ditch unnecessary plugins and scripts.</li>
        <li>Use caching tools and CDNs (content delivery networks).</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We handle all the performance tuning so your homepage loads faster to keep up with the most impatient of users.</p>

      <h2>4. Navigation: Can I find what I am looking for without a map?</h2>
      <p>Your homepage should act like a smart concierge—friendly, efficient, and quietly pointing people in the right direction.</p>
      <h3>Common navigation fails:</h3>
      <ul>
        <li>Too many menu items</li>
        <li>Confusing dropdowns</li>
        <li>Tiny, hard-to-click links</li>
        <li>Missing or unclear CTAs</li>
      </ul>
      <h3>Fixes:</h3>
      <ul>
        <li>Limit your main menu to 5–7 items.</li>
        <li>Use clear, action-driven CTAs like “Get Started” or “See Pricing.”</li>
        <li>Make your contact, about, and service pages easy to find.</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We build beautiful homepages and engineer them with UX best practices so visitors never feel lost.</p>

      <h2>5. Trust signals: Can I believe you are legit?</h2>
      <p>Visitors are cautious. They have been burned before. That means your homepage needs to answer one more silent question: Can I trust you?</p>
      <h3>Trust Builders:</h3>
      <ul>
        <li>Client logos or brand mentions</li>
        <li>Testimonials or reviews</li>
        <li>Certifications, awards, or stats</li>
        <li>Social proof (number of users, clients served, etc.)</li>
      </ul>
      <h3>Fixes:</h3>
      <ul>
        <li>Add a short testimonial above the fold.</li>
        <li>Include client badges or stats to build authority.</li>
        <li>Link to a full testimonials page if possible.</li>
      </ul>
      <p><strong>How Digify America helps:</strong> We bake credibility into your homepage design without making it look like you are trying too hard.</p>

      <h2>First impression is the last impression</h2>
      <p>Your homepage is your digital storefront, your handshake, your elevator pitch. In three seconds, it has to:</p>
      <ul>
        <li>Communicate what you do</li>
        <li>Look credible and current</li>
        <li>Guide users toward action</li>
      </ul>
      <p>If it fails, your bounce rate rises and your revenue drops. But the good news? Digify America can help. We combine smart design, performance optimization, and strategic storytelling to turn your homepage into a conversion powerhouse.</p>
      <p>Your website deserves more than a shrug. It deserves a wow.</p>
      <p>Let’s make your first impression unforgettable.</p>
    `,
    layout: "col-span-1"
  },
//  {
//    id: 6,
//    title: "Maximizing Revenue During Off-Peak Seasons",
//    slug: "maximizing-revenue",
//    tags: ["Strategy"],
//    description: "As we transition into different seasons, many vacation rental markets are either winding down from their peak...",
//    imageSrc: blogImage6,
//    layout: "col-span-1"
//  },
];

const Blogs = () => {
  return (
    <>
      {/* This is the main hero section at the top of the page.
        The layout is centered for all devices and the content scales with the viewport.
      */}
      <section
        className="relative h-[100vh] bg-cover bg-center flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url("https://www.bluetent.com/wp-content/uploads/2021/01/EmailPageHeader.png")`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000c1] bg-opacity-60 z-10"></div>
        <div className="relative z-20 max-w-5xl px-4 md:px-8 lg:px-40">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Owner Acquisition</h3>
          <h1 className="text-2xl md:text-3xl lg:text-[34px] font-light leading-tight mb-6">
            Grow your vacation rental business
          </h1>
          <a
            href="#"
            className="inline-block border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white hover:text-black transition"
          >
            Chat with our team!
          </a>
        </div>
      </section>

      {/* This is the main container for the blog posts.
        Added `overflow-x-hidden` to prevent horizontal scrolling issues on small screens,
        which can sometimes be caused by subtle scaling or positioning of elements.
      */}
      <div className="bg-gray-100 relative z-20 mt-[-50px] md:mt-[-100px] overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[minmax(250px, auto)]">
          {blogPosts.map(post => (
            <Link
              key={post.id}
              to={`/blogs/${post.slug}`}
              className={`bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02] flex flex-col ${post.layout}`}
            >
              <div className="relative">
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-40 md:h-48 object-cover transform transition duration-300 ease-in-out hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 text-sm flex-grow">{post.description}</p>
                <div className="mt-4 text-xs text-gray-400">
                  <p>By Author Name</p>
                  <p>August 7, 2025</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Blogs;
