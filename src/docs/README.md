---
pageClass: home-page

name: Paulina Szymaszek
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/paulinaszy
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/paulina-szymaszek-7a9abb176/

bio: Motivated and detail-oriented Data Science & Entrepreneurship graduate with experience in NLP and technical project management. Highly interested in applications of digital technologies in education.
email: paula.szymaszek (at) gmail (dot) com
cv: /cv_Paulina_Szymaszek.pdf
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a Data Science, Business & Entrepreneurship graduate from [EIT Digital Master School](https://masterschool.eitdigital.eu/data-science) at Aalto University and Université Paris-Saclay.

My professional background is in Data Science, specifically in _natural language processing_. I have been working as a research assistant in two academic groups, in the
linguistics and educational technology fields.

During my studies, I gained knowledge and hands-on experience in _product development and design_. I worked on several academic projects related to digital health and environmental care.

## Work experience

- **Research Assistant at Aalto University** <br/>
  _Mar 2021 -- Sep 2021_ <br/>
  I worked on improving educational technology used in an academic English course. I developed a data analysis pipeline and clustering interface to better discover patterns in student behaviour and analyze their mistakes.

- **Project Researcher at UNITE! University Alliance** <br/>
  _Jun 2020 -- Aug 2020_ <br/>
  I conducted extensive user research following design thinking which resulted in a set of guidelines for student inclusion in virtual mobility. The proposed solution is a Virtual Mobility Platform which would provide an equal, accessible and inclusive online learning environment for all students from UNITE! universities.

- **Research Assistant at academic research group 'Language Technologies Group of Wrocław University of Science and Technology'** <br/>
  _Jul 2018 -- Jun 2019_ <br/>
  My responsibility was to extend an open stylometry system, [WebSty](http://ws.clarin-pl.eu/websty.shtml?en) (developed within CLARIN-PL) with multilingual NLP capabilities. The scope of the work covered a thorough research of available tools, their assessment, integration into the system and testing. Within my work I used various Java and Python libraries and tools such as SciKit Learn, Spacy and NLTK.

- **Youth trainer and language mediator at Krzyżowa Foundation for Mutual Understanding in Europe** <br/>
  _Jul 2018 -- Jun 2019_ <br/>
  Co-leading international youth exchanges and projects aimed at integrating young people and fostering cultural exchange. The work involved organizing activities or workshops on topics of history & civic engagement, environment & sustainability or language exchange. My role was also to facilitate the communication by language interpreting into and from German.

## Education

- **Master’s Programme in Data Science, Innovation & Entrepreneurship, Aalto University &Université Paris-Saclay** <br/>
  _Sept 2019 - Nov 2021_ <br/>
  Practice-oriented program with a strong focus on business project development, focusing on establishing and managing a startup.

- **Bachelor of Engineering in Computer Science, Wrocław University of Science and Technology** <br/>
  _Oct 2015 - Jan 2019_ <br/>
  Study program in English, one year of exchange studies at FU Berlin and TU Berlin instructed in German.

## Projects

<ProjectCard image="/projects/images/coconatdiet_logo.png" hideBorder=true>

**E-commerce website**

I designed and developed an e-commerce website using the JAMStack architecture powered by Nuxt, Strapi and Snipcart. The design was made in Figma.

[[Shop website](https://coconatdiet.pl/)]

</ProjectCard>

<ProjectCard image="/projects/images/clustering_tool.png" hideBorder=true>

**Vizualization tool for analysis of student answers in academic English exercises**

This interactive application enables clustering based analysis of student answers for the short answer type exercises provided by the Acos server. This work is part of my Master’s thesis “Data driven methods for analysis and improvement of academic English writing exercises”.

[[Master Thesis](http://urn.fi/URN:NBN:fi:aalto-2021121910860)] [[Source code](https://github.com/PaulinaSzy/acos-short-answer-analysis-tool)]

</ProjectCard>

<ProjectCard image="/projects/images/vronica.png" hideBorder=true>

**VR based solution for stroke rehabilitation**

The project was developed in a team during an intense business summer course on e-health personalised prevention with collaboration with Tallinn University of Technology and Estonian healthcare professionals. It consisted of conducting market and user research, product prototyping and creation of business development plan.

The motivation for the project was lack of personalized and engaging stroke rehabilitation opportunities. We proposed a home rehabilitation service for stroke patients in their post-acute phase of recovery providing gamified exercises (using VR headset) better engage them in the therapy.

[[Project report](/projects/docs/vronica.pdf)]

</ProjectCard>

<ProjectCard image="/projects/images/unite.png" hideBorder=true>

**Concept creation of inclusive virtual mobility**

As a project researcher at UNITE! University Alliance, I conducted extensive user research following design thinking which resulted in a set of guidelines for student inclusion in virtual mobility.

[[Project website](https://www.aalto.fi/en/news/virtual-exchange-studies-provide-international-experience-for-european-students)] [[Project report](/projects/docs/unite.pdf)]

</ProjectCard>

## Volunteering experience

- **Volunteer on ecological farming projects** <br/>
  _Aug 2021 - Dec 2021_ <br/>
  Participation in activities of an organisation that strives to popularise ecological communal farming in urban areas, [Dodo Helsinki](https://dodo.org/en/home/). Farm work at food co-operative based on community-supported agriculture, [Oma Maa](https://www.omamaa.fi/in-english/).

- **Buddy team member on [Slush](https://www.linkedin.com/company/slush/)** <br/>
  _Nov 2019_ <br/>
  Assisting the speakers at the world’s leading startup event.

- **Work in a refugee center in Germany** <br/>
  _Jan 2017 - Mar 2017_ <br/>
  Helping kids with refugee background in learning German.

- **Member of Erasmus Student Network Poland** <br/>
  _Jan 2016 - Jun 2017_ <br/>
  Support and mentoring for international students. Organizing leisure time activities.

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
