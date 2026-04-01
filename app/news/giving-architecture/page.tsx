"use client";

import { useState } from "react";

const GF = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Instrument+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap";

const css = `
@import url('${GF}');
*{box-sizing:border-box;margin:0;padding:0;}
:root{
  --ink:#0E0E0C;
  --paper:#F5F0E8;
  --cream:#EDE8DC;
  --gold:#4a6741;
  --rust:#8B3A2A;
  --slate:#2C3E50;
  --muted:#7A7060;
  --border:#D4CEBC;
}
html{scroll-behavior:smooth;}
body{background:var(--paper);color:var(--ink);font-family:'Instrument Sans',sans-serif;font-weight:300;}

.article{max-width:720px;margin:0 auto;padding:140px 48px 100px;}

.section-label{
  font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.22em;
  color:var(--gold);text-transform:uppercase;margin-bottom:24px;
  display:flex;align-items:center;gap:12px;
}
.section-label::after{content:'';flex:1;height:1px;background:var(--border);}

.section-name{
  font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.2em;
  text-transform:uppercase;color:var(--muted);
  text-align:center;margin-top:-32px;margin-bottom:40px;
}

.headline{
  font-family:'Cormorant Garamond',serif;
  font-size:clamp(44px,6vw,72px);
  font-weight:400;line-height:1.04;
  color:var(--ink);margin-bottom:20px;
  letter-spacing:-.01em;
}
.headline em{font-style:italic;color:var(--gold);}

.deck{
  font-family:'Cormorant Garamond',serif;
  font-style:italic;font-size:19px;
  color:var(--muted);line-height:1.55;
  margin-bottom:36px;max-width:580px;
}

.byline{
  display:flex;align-items:center;gap:20px;
  padding:20px 0;
  border-top:1px solid var(--border);
  border-bottom:1px solid var(--border);
  margin-bottom:56px;
}
.byline-avatar{
  width:44px;height:44px;border-radius:50%;
  background:var(--ink);display:flex;align-items:center;justify-content:center;
  font-family:'Cormorant Garamond',serif;font-size:16px;color:var(--paper);
  flex-shrink:0;
}
.byline-meta{flex:1;}
.byline-name{font-size:14px;font-weight:500;color:var(--ink);margin-bottom:2px;}
.byline-role{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);}
.byline-read{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);white-space:nowrap;}

.prose{font-size:17px;line-height:1.85;color:var(--slate);}
.prose p{margin-bottom:28px;}
.prose em{font-style:italic;}
.prose strong{font-weight:500;color:var(--ink);}

.section-break{
  display:flex;align-items:center;gap:16px;
  margin:48px 0 16px;
}
.section-break::before,.section-break::after{content:'';flex:1;height:1px;background:var(--border);}
.section-break span{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.2em;color:var(--gold);text-transform:uppercase;}

.pull-quote{
  margin:48px -40px;
  padding:40px 40px 40px 44px;
  border-left:3px solid var(--gold);
  background:var(--cream);
  position:relative;
}
.pull-quote-text{
  font-family:'Cormorant Garamond',serif;
  font-style:italic;font-size:clamp(22px,3vw,28px);
  line-height:1.42;color:var(--ink);
  margin-bottom:14px;
}
.pull-quote-attr{
  font-family:'DM Mono',monospace;font-size:9px;
  letter-spacing:.14em;text-transform:uppercase;color:var(--muted);
}

.inline-quote{
  font-family:'Cormorant Garamond',serif;
  font-style:italic;font-size:17px;
  color:var(--ink);line-height:1.7;
}

.fn-mark{
  font-family:'DM Mono',monospace;font-size:9px;
  vertical-align:super;color:var(--gold);
  cursor:pointer;margin-left:1px;
  position:relative;
}
.fn-mark:hover .fn-tip{opacity:1;transform:translateY(0);}
.fn-tip{
  position:absolute;bottom:calc(100% + 8px);left:50%;
  transform:translateX(-50%) translateY(4px);
  background:var(--ink);color:var(--paper);
  font-family:'Instrument Sans',sans-serif;font-size:11px;font-weight:300;
  line-height:1.5;padding:10px 14px;width:260px;
  pointer-events:none;opacity:0;transition:opacity .2s,transform .2s;
  z-index:200;font-style:normal;letter-spacing:0;
}
.fn-tip::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:var(--ink);}

.footnotes{
  margin-top:64px;
  padding-top:32px;
  border-top:2px solid var(--border);
}
.footnotes-toggle{
  display:flex;align-items:center;justify-content:space-between;
  width:100%;background:none;border:none;cursor:pointer;padding:0;
  font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.18em;
  text-transform:uppercase;color:var(--muted);margin-bottom:0;
  transition:color .2s;
}
.footnotes-toggle:hover{color:var(--ink);}
.footnotes-icon{font-size:14px;transition:transform .3s;}
.footnotes-icon.open{transform:rotate(180deg);}
.footnotes-body{max-height:0;overflow:hidden;transition:max-height .5s ease;}
.footnotes-body.open{max-height:2400px;}
.footnotes-list{padding-top:24px;display:flex;flex-direction:column;gap:12px;}
.fn-item{display:flex;gap:12px;font-size:12px;line-height:1.65;color:var(--muted);}
.fn-num{font-family:'DM Mono',monospace;color:var(--gold);flex-shrink:0;font-size:10px;padding-top:1px;}

.author-box{
  margin-top:64px;padding:40px;
  background:var(--cream);border-left:3px solid var(--gold);
}
.author-box-label{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;}
.author-box-name{font-family:'Cormorant Garamond',serif;font-size:22px;margin-bottom:6px;color:var(--ink);}
.author-box-bio{font-size:14px;line-height:1.75;color:var(--muted);}

.related{margin-top:64px;}
.related-label{font-family:'DM Mono',monospace;font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:20px;}
.related-link{
  display:flex;align-items:center;justify-content:space-between;
  padding:20px 0;border-bottom:1px solid var(--border);
  text-decoration:none;transition:color .2s;cursor:pointer;
}
.related-link:hover .related-title{color:var(--gold);}
.related-title{font-family:'Cormorant Garamond',serif;font-size:18px;color:var(--ink);transition:color .2s;line-height:1.3;}
.related-arrow{font-family:'DM Mono',monospace;font-size:12px;color:var(--muted);}

@media(max-width:700px){
  .article{padding:100px 24px 80px;}
  .pull-quote{margin:40px 0;padding:28px;}
}
`;

function Fn({ n, tip }: { n: number; tip: string }) {
  return (
    <span className="fn-mark">
      {n}
      <span className="fn-tip">{tip}</span>
    </span>
  );
}

const FOOTNOTES = [
  { n: 1, text: 'Ackoff, R. (1994). "Systems thinking and thinking systems." System Dynamics Review, 10(2–3).' },
  { n: 2, text: 'Walker, D. (2023). From Generosity to Justice: A New Gospel of Wealth. Disruption Books.' },
  { n: 3, text: 'Gregory, A.G. & Howard, D. (2009). "The Nonprofit Starvation Cycle." Stanford Social Innovation Review, Fall 2009.' },
  { n: 4, text: 'Harold, J., Berger, K. & Taylor, A. (2013). "The Overhead Myth." Open letter to the donors of America. GuideStar, Charity Navigator, and BBB Wise Giving Alliance.' },
  { n: 5, text: 'Charity Navigator. (2023). Updated rating framework removing overhead ratios as a primary metric. nonprofitpro.com' },
  { n: 6, text: 'Center for Effective Philanthropy. (2025). "Breaking the Mold: The Transformative Effect of MacKenzie Scott\'s Big Gifts." cep.org' },
  { n: 7, text: 'Scott, M. (2020). "384 Ways to Help." Medium. mackenzie-scott.medium.com' },
  { n: 8, text: 'Villanueva, E. (2018). Decolonizing Wealth: Indigenous Wisdom to Heal Divides and Restore Balance. Berrett-Koehler Publishers.' },
  { n: 9, text: 'Senge, P. (1990/2006). The Fifth Discipline: The Art and Practice of the Learning Organization. Doubleday. See Chapter 6, "Shifting the Burden."' },
  { n: 10, text: 'Inside Philanthropy. (2015). "There Are Way Too Many Nonprofits. What Are Funders Going to Do About That?" insidephilanthropy.com' },
  { n: 11, text: 'Grantmakers for Effective Organizations. (2009). "What Capacities Do Nonprofits Need in Order to Collaborate?" Includes Carol Thompson Cole, Venture Philanthropy Partners. geofunders.org' },
  { n: 12, text: 'Nonprofit Quarterly. (2025). "Are There Too Many Nonprofits? Or Too Few Bridges Between Them?" nonprofitquarterly.org' },
  { n: 13, text: 'Novogratz, J. (2020). Manifesto for a Moral Revolution. Henry Holt and Company.' },
  { n: 14, text: 'Bernholz, L. (2022). How We Give Now: A Philanthropic Guide for the Rest of Us. MIT Press.' },
  { n: 15, text: 'Giridharadas, A. (2018). Winners Take All: The Elite Charade of Changing the World. Knopf.' },
  { n: 16, text: 'Bridgespan Group. (2017). "15 Success Stories of Audacious Philanthropy." bridgespan.org' },
];

export default function GivingArchitecturePage() {
  const [footnotesOpen, setFootnotesOpen] = useState(false);

  return (
    <>
      <style>{css}</style>

      <article className="article">

        <div className="section-label">Founder&apos;s Corner</div>

        <h1 className="headline">
          The Giving<br /><em>Architecture</em>
        </h1>

        <p className="deck">
          American philanthropy doesn&apos;t have a generosity problem. It has a design problem.
        </p>

        <div className="byline">
          <div className="byline-avatar">NK</div>
          <div className="byline-meta">
            <div className="byline-name">Nick Kislinger</div>
            <div className="byline-role">Founder, KIC</div>
          </div>
          <div className="byline-read">8 min read</div>
        </div>

        <div className="prose">

          <p>Americans gave $557 billion to charity last year. By any measure, this is a generous country. Generosity is not the problem.</p>

          <p>The problem is architecture. How giving is structured. Who decides where it goes. What gets funded — and what never does. We have built an enormous philanthropic infrastructure that optimizes for donor comfort, punishes the organizations it claims to support, and reproduces the very inequities it was designed to address. The machinery is impressive. The outcomes are not.</p>

          <p>This essay is about the machinery. Not about any single grant or grantmaker, but about the system itself — the incentives, the assumptions, the design choices that shape where $557 billion actually lands. Because the answer to why American philanthropy underperforms is not that people don&apos;t care enough. It&apos;s that caring has been given the wrong container.</p>

        </div>

        <div className="section-break"><span>I</span></div>
        <div className="section-name">The Starvation Cycle</div>

        <div className="prose">

          <p>Russell Ackoff put it plainly:<Fn n={1} tip="Ackoff, R. (1994). 'Systems thinking and thinking systems.' System Dynamics Review, 10(2–3)." /> <span className="inline-quote">&quot;All of our social problems arise out of doing the wrong thing righter. The more efficient you are at doing the wrong thing, the wronger you become.&quot;</span></p>

          <p>We have gotten extraordinarily efficient at doing the wrong thing. We fund programs that treat symptoms. We measure inputs and call them outcomes. We write one-year restricted grants to organizations that need ten-year relationships. We optimize for donor comfort instead of community impact.</p>

          <p>Darren Walker, who led the Ford Foundation for over a decade, named the real reason:<Fn n={2} tip="Walker, D. (2023). From Generosity to Justice: A New Gospel of Wealth. Disruption Books." /> <span className="inline-quote">&quot;A major reason foundations have not been willing to give unrestricted support is the issue of control and power, which we donors don&apos;t like to talk about.&quot;</span> Walker was born in a charity hospital in rural Louisiana, raised in a shotgun house in Ames, Texas. He was in the first Head Start class of 1965. He knows what a program designed <em>for</em> a community feels like from the inside. When he flipped Ford&apos;s grantmaking from 20% to over 80% general operating support, it wasn&apos;t a policy change. It was a reckoning.</p>

          <p>The overhead ratio is one of the most destructive ideas in the history of American charity. In 2009, Ann Goggins Gregory and Don Howard documented what they called the nonprofit starvation cycle in the <em>Stanford Social Innovation Review</em>:<Fn n={3} tip="Gregory, A.G. & Howard, D. (2009). 'The Nonprofit Starvation Cycle.' Stanford Social Innovation Review, Fall 2009." /> funders demand low overhead, nonprofits underreport costs, organizations slowly starve themselves of the infrastructure they need to function. The result isn&apos;t efficiency. It&apos;s a sector that burns through its best people, falsifies its reporting, and atrophies exactly where it needs to grow.</p>

          <p>By 2013, the heads of GuideStar, Charity Navigator, and the BBB Wise Giving Alliance — the very watchdogs who had enforced overhead obsession for decades — issued a joint letter admitting they&apos;d gotten it wrong:<Fn n={4} tip="Harold, J., Berger, K. & Taylor, A. (2013). 'The Overhead Myth.' Open letter. GuideStar, Charity Navigator, and BBB Wise Giving Alliance." /> <span className="inline-quote">&quot;The people and communities served by charities don&apos;t need low overhead, they need high performance.&quot;</span> Charity Navigator eventually removed overhead ratios from its rating system entirely.<Fn n={5} tip="Charity Navigator. (2023). Updated rating framework removing overhead ratios as a primary metric. nonprofitpro.com" /></p>

          <p>We still act like this revelation didn&apos;t happen.</p>

        </div>

        <div className="section-break"><span>II</span></div>
        <div className="section-name">The Trust Gap</div>

        <div className="prose">

          <p>At Summit Impact, I sat in the Executive Director&apos;s chair. At EIF, I worked inside an institution with genuine reach — celebrity platforms, corporate partnerships, real fundraising capacity. The gap I couldn&apos;t name then: we had reach and no real understanding of what we were reaching for. We were raising significant money for significant causes. We weren&apos;t close enough to know if we were solving the right problems.</p>

          <p>MacKenzie Scott is running a different experiment. She gave $7.1 billion in 2025 alone — no applications, no restrictions, no reporting requirements. A three-year study by the Center for Effective Philanthropy tracked more than a thousand of her recipients:<Fn n={6} tip="Center for Effective Philanthropy. (2025). 'Breaking the Mold: The Transformative Effect of MacKenzie Scott's Big Gifts.' cep.org" /> 93% reported a stronger ability to achieve their mission. The median grant was $5 million — roughly equal to a recipient&apos;s entire prior-year budget. Organizations hired people. Raised salaries. Built reserves. Did the work. <span className="inline-quote">&quot;Because our research is data-driven and rigorous,&quot;</span> she wrote, <span className="inline-quote">&quot;our giving process can be human and soft.&quot;</span><Fn n={7} tip="Scott, M. (2020). '384 Ways to Help.' Medium. mackenzie-scott.medium.com" /> She demolished the false binary between strategic philanthropy and trusting philanthropy.</p>

          <p>Edgar Villanueva names the structural condition underneath:<Fn n={8} tip="Villanueva, E. (2018). Decolonizing Wealth: Indigenous Wisdom to Heal Divides and Restore Balance. Berrett-Koehler Publishers." /> 90% of foundation CEOs are white, 85% of foundation boards are white, and no more than 10% of philanthropic funding reaches organizations led by people of color. The architecture of giving — who decides, who designs, who evaluates — replicates the same hierarchies the giving claims to dismantle.</p>

        </div>

        <div className="pull-quote">
          <div className="pull-quote-text">
            &quot;The architecture of giving — who decides, who designs, who evaluates — replicates the same hierarchies the giving claims to dismantle.&quot;
          </div>
          <div className="pull-quote-attr">Nick Kislinger · Kislinger Impact Collective</div>
        </div>

        <div className="prose">

          <p>Peter Senge called this &quot;shifting the burden to the intervenor&quot; in <em>The Fifth Discipline</em>:<Fn n={9} tip="Senge, P. (1990/2006). The Fifth Discipline: The Art and Practice of the Learning Organization. Doubleday. See Chapter 6, 'Shifting the Burden.'" /> the intervention helps temporarily, the underlying system goes unchanged, and over time the community becomes dependent while its own capacity atrophies. We keep funding the cleanup. We never fund the factory.</p>

        </div>

        <div className="section-break"><span>III</span></div>
        <div className="section-name">The Silo Problem</div>

        <div className="prose">

          <p>Here&apos;s something I&apos;ve never said publicly but see in nearly every portfolio review I do: we are funding the same work at a dozen different organizations and calling it a strategy.</p>

          <p>The pattern is consistent. Three organizations in the same city, serving the same population, writing nearly identical grant proposals — each maintaining its own staff, its own overhead, its own brand. None of them talking to each other. Not because they&apos;re hostile. Because the incentive structure punishes collaboration. Each needs its own funding. Each needs to prove its own impact. Each needs its own story. The system manufactures competition among people who share exactly the same mission.</p>

          <p>Inside Philanthropy made the diagnosis in 2015 and nothing has changed:<Fn n={10} tip="Inside Philanthropy. (2015). 'There Are Way Too Many Nonprofits. What Are Funders Going to Do About That?' insidephilanthropy.com" /> <span className="inline-quote">&quot;The nonprofit sector has too many small organizations that are just getting by, and too few big ones that can really solve problems.&quot;</span> At nearly two million nonprofits — one for every 100 Americans — the sector has outgrown any reasonable coordination. And funders own a share of this: <span className="inline-quote">&quot;Foundation grantmaking strategies tend to fuel duplication and fragmentation. Instead of pushing similar groups to consolidate, some big foundations just fund all of them.&quot;</span></p>

          <p>Carol Thompson Cole of Venture Philanthropy Partners named why collaboration stays rare:<Fn n={11} tip="Grantmakers for Effective Organizations. (2009). 'What Capacities Do Nonprofits Need in Order to Collaborate?' Includes Carol Thompson Cole, Venture Philanthropy Partners. geofunders.org" /> <span className="inline-quote">&quot;To consider teaming up with a competitor requires a whole new way of thinking and behaving. It requires developing trust, which takes time, and additional organizational capacity — and time and capacity are as scarce to nonprofit leaders as capital.&quot;</span> Grantmakers for Effective Organizations put the obligation on funders directly: <span className="inline-quote">&quot;If funders truly want to spur their grantees to align efforts, we will need to take a hard look at our core grantmaking practices and assess the degree to which we are encouraging a go-it-alone mindset.&quot;</span></p>

          <p>We are. Every one-year restricted grant to a single organization is a vote against the collaboration we claim to want.</p>

        </div>

        <div className="pull-quote">
          <div className="pull-quote-text">
            &quot;The system manufactures competition among people who share the same mission. Every one-year restricted grant is a vote against the collaboration we claim to want.&quot;
          </div>
          <div className="pull-quote-attr">Nick Kislinger · Kislinger Impact Collective</div>
        </div>

        <div className="prose">

          <p>Three questions I now ask every family and foundation before adding a new grantee: Do you know who else is working on this, specifically? Have you introduced your grantees to each other? Are you willing to fund the coordination itself — not just the programs?<Fn n={12} tip="Nonprofit Quarterly. (2025). 'Are There Too Many Nonprofits? Or Too Few Bridges Between Them?' nonprofitquarterly.org" /></p>

          <p>Coordination is slow and rarely fundable. But the alternative is a sector where organizations with identical missions spend their best energy competing for the same dollars and avoiding the phone call that might make both of their work stronger.</p>

        </div>

        <div className="section-break"><span>IV</span></div>
        <div className="section-name">The Design</div>

        <div className="prose">

          <p>Jacqueline Novogratz built Acumen on the concept of patient capital — long-term investment in people closest to the problem. She asked the question that cuts through all of this:<Fn n={13} tip="Novogratz, J. (2020). Manifesto for a Moral Revolution. Henry Holt and Company." /> <span className="inline-quote">&quot;It&apos;s not a question of whether we have enough capital. It&apos;s a question of whether we have the moral imagination to rethink the way our system of capitalism can be extended.&quot;</span></p>

          <p>Moral imagination. That&apos;s what proximity gives you and what distance removes. When you&apos;ve sat with a family navigating a broken food system, you read a food security grant differently. When you&apos;ve been in a room with a teenager who has no language for what they&apos;re feeling, you understand what a mental health program actually needs to be — not what it needs to look like on paper.</p>

          <p>Lucy Bernholz at Stanford&apos;s PACS center names the infrastructure trap:<Fn n={14} tip="Bernholz, L. (2022). How We Give Now: A Philanthropic Guide for the Rest of Us. MIT Press." /> <span className="inline-quote">&quot;There&apos;s all this rhetoric about the &apos;democratization&apos; of giving, when in reality, they&apos;re all just a ton of intermediated products for moving money from point A to point B.&quot;</span> The intermediaries extract value and add distance. The people doing the work absorb the gap.</p>

        </div>

        <div className="pull-quote">
          <div className="pull-quote-text">
            &quot;The architecture of your giving matters more than the amount. Multi-year. Unrestricted. High trust. Close enough to understand what you&apos;re actually funding.&quot;
          </div>
          <div className="pull-quote-attr">Nick Kislinger · Kislinger Impact Collective</div>
        </div>

        <div className="prose">

          <p>Anand Giridharadas asked the harder version in <em>Winners Take All</em>:<Fn n={15} tip="Giridharadas, A. (2018). Winners Take All: The Elite Charade of Changing the World. Knopf." /> what if the way we give lets us feel generous without threatening the systems that produced the inequality in the first place?</p>

          <p>Here&apos;s where I&apos;ve landed. The answer isn&apos;t to give less or wait for perfect clarity. The Bridgespan Group studied 15 of the greatest social impact achievements of the 20th century — tobacco control, the National School Lunch Program, the movement for marriage equality — and found that 80% required changing government policy, and that advocacy investments returned $100 or more for every dollar spent.<Fn n={16} tip="Bridgespan Group. (2017). '15 Success Stories of Audacious Philanthropy.' bridgespan.org" /> Those outcomes happened not because donors gave more. Because they gave differently.</p>

          <p>The architecture of your giving matters more than the amount. Multi-year. Unrestricted. High trust. Funding collaboration, not just programs. Close enough to understand what you&apos;re actually funding. Built to change the conditions that produce the problem, not just treat its symptoms.</p>

          <p>The question isn&apos;t how much you&apos;re giving. It&apos;s how.</p>

        </div>

        {/* FOOTNOTES */}
        <div className="footnotes">
          <button
            className="footnotes-toggle"
            onClick={() => setFootnotesOpen(o => !o)}
          >
            <span>Sources &amp; Notes ({FOOTNOTES.length})</span>
            <span className={`footnotes-icon${footnotesOpen ? " open" : ""}`}>↓</span>
          </button>
          <div className={`footnotes-body${footnotesOpen ? " open" : ""}`}>
            <div className="footnotes-list">
              {FOOTNOTES.map(f => (
                <div className="fn-item" key={f.n}>
                  <span className="fn-num">[{f.n}]</span>
                  <span className="fn-text">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AUTHOR BOX */}
        <div className="author-box">
          <div className="author-box-label">About the author</div>
          <div className="author-box-name">Nick Kislinger</div>
          <div className="author-box-bio">
            Nick is the founder of Kislinger Impact Collective, a boutique philanthropic advisory firm serving family offices and private foundations. He is completing a master&apos;s in clinical psychology with a clinical placement at Burbank High School.
          </div>
        </div>

        {/* RELATED */}
        <div className="related">
          <div className="related-label">Also from the Founder&apos;s Corner</div>
          <a href="/news/proximity" className="related-link">
            <span className="related-title">What Sitting With a Teenager in Crisis Taught Me About Grantmaking</span>
            <span className="related-arrow">→</span>
          </a>
          <a href="/impact-report" className="related-link">
            <span className="related-title">KIC Impact Landscape: Where Philanthropic Capital Is Moving in 2025</span>
            <span className="related-arrow">→</span>
          </a>
        </div>

      </article>
    </>
  );
}
