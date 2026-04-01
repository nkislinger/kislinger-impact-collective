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
  { n: 1, text: 'American School Counselor Association. (2024–25). School Counselor Roles & Ratios. schoolcounselor.org' },
  { n: 2, text: 'Stevenson, B. (2014). Just Mercy: A Story of Justice and Redemption. Spiegel & Grau.' },
  { n: 3, text: 'Center for Effective Philanthropy. (2013). "Working Well With Grantees." cep.org — finding that the program officer matters more to grantee experience than the foundation itself.' },
  { n: 4, text: 'Center for Effective Philanthropy. (2013). Ibid. Connected funders are five times as likely to provide capacity-building support that nonprofits actually need.' },
  { n: 5, text: 'Glaros, C. (2019). "What Funders Get Wrong About Site Visits." Philanthropy Without Borders. philanthropywithoutborders.com' },
  { n: 6, text: 'Kramer, M. & Phillips, S. (2024). "Where Strategic Philanthropy Went Wrong." Stanford Social Innovation Review, Summer 2024.' },
  { n: 7, text: 'French Gates, M. (2024). Giving Pledge letter. givingpledge.org/pledger/melinda-french-gates' },
  { n: 8, text: 'Walker, D. Nonprofit Finance Fund blog. (2014). "The Business of Hope." nff.org/blog/darren-walker-business-of-hope' },
  { n: 9, text: 'Miller, M.L. as quoted in Tough, P. (2016). "Most of What You Believe About Poverty Is Wrong." Education Next / The Atlantic.' },
  { n: 10, text: 'Farmer, P. (2011). "Accompaniment as Policy." Harvard Kennedy School commencement address. lessonsfromhaiti.org/press-and-media/transcripts/accompaniment-as-policy' },
  { n: 11, text: 'Partners In Health internal outcomes data, as reported in Kidder, T. (2003). Mountains Beyond Mountains. Random House. Accompaniment model achieving ~90% viral suppression vs. 13% in non-accompanied settings.' },
  { n: 12, text: 'Jackson, A., Kania, J. & Montgomery, T. (2020). "Effective Change Requires Proximate Leaders." Stanford Social Innovation Review, October 2020.' },
  { n: 13, text: 'Villanueva, E. (2018). Decolonizing Wealth: Indigenous Wisdom to Heal Divides and Restore Balance. Berrett-Koehler Publishers.' },
  { n: 14, text: 'Adler, A. as quoted in Ansbacher, H. & Ansbacher, R. (Eds.) (1956). The Individual Psychology of Alfred Adler. Basic Books. On Gemeinschaftsgefühl (social interest) as the criterion of psychological health.' },
  { n: 15, text: 'Brown, B. (2013). "Empathy." RSA Shorts animated video. Based on research from The Gifts of Imperfection (2010) and Daring Greatly (2012). Hazelden Publishing.' },
];

export default function ProximityPage() {
  const [footnotesOpen, setFootnotesOpen] = useState(false);

  return (
    <>
      <style>{css}</style>

      <article className="article">

        <div className="section-label">Founder&apos;s Corner</div>

        <h1 className="headline">
          What the Field<br /><em>Teaches</em>
        </h1>

        <p className="deck">
          Most grantmakers have never sat in the room with the people their grants are meant to help. That&apos;s not a minor gap. It&apos;s the whole problem.
        </p>

        <div className="byline">
          <div className="byline-avatar">NK</div>
          <div className="byline-meta">
            <div className="byline-name">Nick Kislinger</div>
            <div className="byline-role">Executive Director, Flourish Trust · Founder, KIC</div>
          </div>
          <div className="byline-read">7 min read</div>
        </div>

        <div className="prose">

          <p>A grant request came across my desk from a community mental health organization. I read the executive summary and felt something I hadn&apos;t expected: I understood it completely.</p>

          <p>I understood the Executive Director — because I&apos;d been one, at Summit Impact, and I knew exactly what it cost to write that letter. The careful framing. The anxiety about whether the ask was too large or too small. The awareness that you were one declined grant away from a very hard conversation with your team.</p>

          <p>I understood the clinic — because I&apos;d been working at Burbank Family Service, a free mental health agency operating on a sliding-scale model in the community around Burbank High School. I knew what the waiting room looked like. I knew how long the intake process took and what happened when someone didn&apos;t show for their second appointment.</p>

          <p>And I understood the teenagers the organization was trying to reach — because I&apos;d been sitting with them that week. Not reading about them. Sitting with them.</p>

          <p>A decade earlier, coming out of the Governor&apos;s Office, I would have read the same proposal and seen a program theory. This time I saw people. The difference wasn&apos;t the proposal. It was me.</p>

          <p>That&apos;s what proximity does. It doesn&apos;t add context. It changes what you see.</p>

        </div>

        <div className="section-break"><span>I</span></div>
        <div className="section-name">The Site Visit Problem</div>

        <div className="prose">

          <p>There are roughly 87,000 foundations in the United States. Most of them conduct site visits. Almost none require program officers to have spent real time in the communities they fund.</p>

          <p>The national student-to-counselor ratio is 372:1 against a recommended 250:1.<Fn n={1} tip="American School Counselor Association. (2024–25). School Counselor Roles & Ratios. schoolcounselor.org" /> California runs at 432:1. Burbank Unified, where I did my placement, is closer to 1,582:1. These numbers are in every grant application I review for school-based mental health. Funders read them and nod. Most have never been inside a school counselor&apos;s office on a Tuesday morning when three students are waiting and one of them is in crisis.</p>

          <p>Bryan Stevenson, whose work at the Equal Justice Initiative has put more people free than almost any legal effort in modern American history, opens <em>Just Mercy</em> with the lesson his grandmother gave him:<Fn n={2} tip="Stevenson, B. (2014). Just Mercy: A Story of Justice and Redemption. Spiegel & Grau." /> <span className="inline-quote">&quot;You can&apos;t understand most of the important things from a distance, Bryan. You have to get close.&quot;</span> His entire career is the argument. The Center for Effective Philanthropy, surveying nearly 20,000 grantees across 86 foundations, found that the program officer matters more to a grantee&apos;s experience than the foundation itself.<Fn n={3} tip="Center for Effective Philanthropy. (2013). 'Working Well With Grantees.' cep.org" /> And program officers who are genuinely connected to the work — who know what it actually looks like on the ground — are five times as likely to provide the kind of capacity-building support that nonprofits say they actually need.<Fn n={4} tip="Center for Effective Philanthropy. (2013). Ibid. Connected funders are five times as likely to provide capacity-building support that nonprofits actually need." /></p>

          <p>The site visit doesn&apos;t close this gap. Caliopy Glaros, writing in <em>Philanthropy Without Borders</em>, named what site visits actually are:<Fn n={5} tip="Glaros, C. (2019). 'What Funders Get Wrong About Site Visits.' Philanthropy Without Borders. philanthropywithoutborders.com" /> <span className="inline-quote">&quot;Nonprofit clients are sometimes paraded around in inauthentic and even re-traumatizing ways.&quot;</span> The visit is designed to reassure the funder, not to educate them. And the reassurance is false. Decades of research in social psychology shows that prejudice does not lessen when people simply acquire new knowledge. Empathy cannot be achieved through passive learning. Watching a program for two hours does not make you a better judge of whether it works.</p>

        </div>

        <div className="pull-quote">
          <div className="pull-quote-text">
            &quot;Most grantmakers have never been inside a school counselor&apos;s office on a Tuesday morning when three students are waiting and one of them is in crisis.&quot;
          </div>
          <div className="pull-quote-attr">Nick Kislinger · Kislinger Impact Collective</div>
        </div>

        <div className="prose">

          <p>Mark Kramer and Steve Phillips, writing in the <em>Stanford Social Innovation Review</em> in 2024, put the systemic version plainly:<Fn n={6} tip="Kramer, M. & Phillips, S. (2024). 'Where Strategic Philanthropy Went Wrong.' Stanford Social Innovation Review, Summer 2024." /> <span className="inline-quote">&quot;Wealthy donors often lack the lived experience to understand the problems they attempt to solve and may sidestep deeper solutions that undermine their own wealth and privilege.&quot;</span> This isn&apos;t a moral failing. It&apos;s a structural one. The sector doesn&apos;t ask for proximity, doesn&apos;t train for it, and rarely hires for it.</p>

        </div>

        <div className="section-break"><span>II</span></div>
        <div className="section-name">The Reckoning</div>

        <div className="prose">

          <p>Melinda French Gates, in her 2024 Giving Pledge letter, described the moment her certainty broke:<Fn n={7} tip="French Gates, M. (2024). Giving Pledge letter. givingpledge.org/pledger/melinda-french-gates" /> <span className="inline-quote">&quot;It&apos;s much easier to imagine that you have all the answers when you&apos;re sitting in a conference room in Seattle than when you&apos;re face-to-face with a business owner in Nairobi or an indigenous activist in New Mexico.&quot;</span> She&apos;d spent decades at the Gates Foundation running the most data-intensive philanthropy in history. She still had to go be with people to understand what the data missed.</p>

          <p>Darren Walker was more direct about the contradiction he lives inside:<Fn n={8} tip="Walker, D. (2014). 'The Business of Hope.' Nonprofit Finance Fund. nff.org/blog/darren-walker-business-of-hope" /> <span className="inline-quote">&quot;Most of us who lead foundations aren&apos;t proximate to that kind of reality. We are proximate in our work, because every day we come to work and hear stories of poverty. But for most of us, when we go home, we&apos;re not on the phone with some family member we&apos;ve got to make sure we&apos;re getting through the day.&quot;</span> Walker grew up on a dirt road in rural Texas. He was in the first Head Start class of 1965. And he still names his distance from the communities Ford funds as a limitation — not a technicality, but a genuine constraint on judgment.</p>

          <p>Maurice Lim Miller ran a conventional social service organization for 20 years before he concluded it wasn&apos;t working. His assessment, when Oakland Mayor Jerry Brown asked what he&apos;d do differently:<Fn n={9} tip="Miller, M.L. as quoted in Tough, P. (2016). 'Most of What You Believe About Poverty Is Wrong.' Education Next / The Atlantic." /> <span className="inline-quote">&quot;I don&apos;t know what I would do. But my mother figured out how to get me out of poverty. I think every mother, father, or guardian will know the best way to get their families&apos; lives together.&quot;</span> He then spent the next decade building the Family Independence Initiative — an organization that gives money and gets out of the way — on the premise that people closest to the problem have better answers than the people funding solutions to it.</p>

          <p>I think about my time at EIF. We were doing real work. Viola Davis on childhood hunger. Serious money for serious causes. But I had never been hungry. I had never written a grant proposal. I had never run a program. I was working at the level of narrative and mechanism, and I was good at it. What I lacked — and didn&apos;t know I lacked — was the felt understanding that comes from having been in the room. Not visited the room. Been in it.</p>

        </div>

        <div className="section-break"><span>III</span></div>
        <div className="section-name">The Pipeline</div>

        <div className="prose">

          <p>The philanthropy sector recruits from policy, academia, and wealth management. Rarely from direct service. The result is a field of decision-makers who are very good at reading proposals and very poorly equipped to evaluate whether what&apos;s in them is true.</p>

          <p>Paul Farmer — who co-founded Partners In Health and spent his career in the poorest communities in the world — built his model around what he called <em>accompaniment</em>:<Fn n={10} tip="Farmer, P. (2011). 'Accompaniment as Policy.' Harvard Kennedy School commencement address. lessonsfromhaiti.org" /> being with people on their journey, not visiting and leaving. <span className="inline-quote">&quot;I&apos;ll share your fate for a while,&quot;</span> he said, <span className="inline-quote">&quot;and by &apos;a while&apos; I don&apos;t mean &apos;a little while.&apos;&quot;</span> The results were clinical and measurable. Partners In Health&apos;s community health workers — living in the same communities as their patients — achieved roughly 90% viral suppression among HIV patients in rural Haiti.<Fn n={11} tip="Partners In Health internal outcomes data, as reported in Kidder, T. (2003). Mountains Beyond Mountains. Random House." /> A comprehensive Atlanta clinic, without accompaniment, achieved 13%. Proximity wasn&apos;t a value. It was a variable that determined outcomes.</p>

          <p>Angela Jackson, John Kania, and Tulaine Montgomery, writing in the <em>Stanford Social Innovation Review</em> in 2020, formalized what Farmer demonstrated:<Fn n={12} tip="Jackson, A., Kania, J. & Montgomery, T. (2020). 'Effective Change Requires Proximate Leaders.' Stanford Social Innovation Review, October 2020." /> only 4% of philanthropic dollars in the United States go to organizations led by people of color — the people most proximate to the problems philanthropy claims to address. The funding gap is a proximity gap wearing a different name.</p>

          <p>Edgar Villanueva, an enrolled member of the Lumbee Tribe and a former foundation program officer, described what that gap looks like from inside:<Fn n={13} tip="Villanueva, E. (2018). Decolonizing Wealth: Indigenous Wisdom to Heal Divides and Restore Balance. Berrett-Koehler Publishers." /> 90% of foundation CEOs are white, 85% of foundation boards are white. The people with the least proximity to the problems hold the most power over the resources. This is not incidental. The architecture of who becomes a grantmaker determines, more than any other variable, what gets funded and what gets ignored.</p>

        </div>

        <div className="pull-quote">
          <div className="pull-quote-text">
            &quot;The people with the least proximity to the problems hold the most power over the resources. This is not incidental.&quot;
          </div>
          <div className="pull-quote-attr">Nick Kislinger · Kislinger Impact Collective</div>
        </div>

        <div className="section-break"><span>IV</span></div>
        <div className="section-name">The Prerequisite</div>

        <div className="prose">

          <p>Alfred Adler argued that psychological health has a single defining feature:<Fn n={14} tip="Adler, A. as quoted in Ansbacher, H. & Ansbacher, R. (Eds.) (1956). The Individual Psychology of Alfred Adler. Basic Books." /> <em>Gemeinschaftsgef&uuml;hl</em> — social interest, a felt sense of belonging to and contributing to the human community. Not sympathy for others. Not knowledge about others. Felt connection. He believed the individual who is not genuinely interested in his fellow people has the greatest difficulties in life and provides the greatest injury to others.</p>

          <p>I think about that framework constantly. A grantmaker who makes decisions without felt connection to the communities those decisions affect is exhibiting, in Adlerian terms, precisely the failure of social interest that produces harm — regardless of intent. Distance is not neutral. It shapes what you see, what you fund, and what you miss.</p>

          <p>Bren&eacute; Brown, whose research on empathy is among the most cited in social psychology, draws the line cleanly:<Fn n={15} tip="Brown, B. (2013). 'Empathy.' RSA Shorts. Based on research in Daring Greatly (2012). Hazelden Publishing." /> <span className="inline-quote">&quot;Empathy is a choice, and it&apos;s a vulnerable choice. In order to connect with you, I have to connect with something in myself that knows that feeling.&quot;</span> You cannot manufacture that connection from a conference room. You cannot download it from a needs assessment. You have to have been somewhere close enough to the problem that something in you recognizes it.</p>

          <p>That&apos;s what changed for me when the mental health grant came across my desk. I wasn&apos;t just reading it. I was recognizing it. Every sentence landed differently because I had been in every room the proposal described. Not as a visitor. As someone doing the work.</p>

          <p>I&apos;m not arguing that every grantmaker needs a clinical degree. I am arguing something harder: proximity to the problem should be a prerequisite for holding power over the resources, not a resume line that some candidates happen to have. The families and foundations I advise should ask this of themselves and of the advisors they hire. Not &quot;have you studied this issue&quot; but &quot;have you been in this room.&quot;</p>

          <p>The most important thing a grantmaker can bring to a grant review is not analytical skill. It&apos;s the ability to recognize what&apos;s true.</p>

          <p>You can only do that from close.</p>

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
            Nick is the Executive Director of Flourish Trust, a philanthropic foundation focused on mental health, food systems, and human flourishing. He is the founder of Kislinger Impact Collective, a boutique philanthropic advisory firm serving family offices and private foundations. He previously served as Executive Director of Summit Impact and as Chief of Staff to California&apos;s Secretary of Education. He is completing a master&apos;s in clinical psychology with a clinical placement at Burbank High School.
          </div>
        </div>

        {/* RELATED */}
        <div className="related">
          <div className="related-label">Also from the Founder&apos;s Corner</div>
          <div className="related-link">
            <span className="related-title">The Giving Architecture: It&apos;s Not How Much. It&apos;s How.</span>
            <span className="related-arrow">→</span>
          </div>
          <div className="related-link">
            <span className="related-title">KIC Impact Landscape: Where Philanthropic Capital Is Moving in 2025</span>
            <span className="related-arrow">→</span>
          </div>
        </div>

      </article>
    </>
  );
}
