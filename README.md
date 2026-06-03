# Naveen Shankar Portfolio Homepage

Author: Naveen Shankar

Course: Web Development (CS 5610), MS CS at Northeastern University, Boston

Public project page: <https://naveen-shankar-homepage.netlify.app/>

Class link: <https://johnguerra.co/classes/webDevelopment_online_summer_2026/>

## Project Objective

This project is a static personal homepage built with vanilla HTML5, CSS3, Bootstrap 5 utilities,
and ES6 modules. It presents Naveen Shankar's software engineering background, selected projects,
technical skills, and an AI-generated career brief.

The site includes:

- `index.html`: homepage with profile summary, impact metrics, skills, and contact links.
- `projects.html`: project and experience portfolio with Naveen's Skill Lens, an original JavaScript
  filter that maps work to skill signals.
- `ai.html`: AI-generated companion page clearly labeled as generative content.
- `design.md`: design document with project description, user personas, user stories, wireframes,
  and screenshots required by the assignment.

## Creative Addition

The creative addition in this homepage is **Naveen's Skill Lens** on `projects.html`. It is an
original ES6 module interaction that lets visitors filter portfolio cards by skill signals such as
AI, Backend, Java, Research, and Leadership.

Instead of showing projects as a static list, the Skill Lens lets a visitor explore the same
resume-backed work from different angles. When a filter is selected, matching project cards remain
visible and the live status text updates to summarize the selected signal. This differentiates the
portfolio while staying lightweight and understandable for a static HTML/CSS/JavaScript site.

## Screenshot

![Portfolio homepage screenshot](./docs/Application-Screenshot.jpeg)

## Build And Run Instructions

Install development dependencies:

```bash
npm install
```

Format the project:

```bash
npm run format
```

Lint JavaScript modules:

```bash
npm run lint
```

Run locally with any static server. One option is:

```bash
npx serve .
```

Then open the local URL shown in the terminal.

## Design Document

The design document is available in `design.md`. It includes the required project description,
personas, user stories, design mockups/wireframes, and screenshots that explain the portfolio's
layout and interaction decisions.

## Demo Video

Public narrated demo video: <https://youtu.be/yfeCoF24jng>

## Presentation Slides

Google Slides presentation: <https://docs.google.com/presentation/d/1fvehvyQ8QWax6T_exypQIwgGHlT26qdxoWiKdQhK-d4/edit?usp=sharing>

## GenAI Disclosure

I leveraged Cursor's Plan mode with the GPT-5.5 model to create an AI HTML generation plan,
included in `docs/ai-generated-companion-page/ai-html-generation-plan.md`, using my resume as the
factual context. The plan asked the model to generate a third AI companion page that matched the
existing `index.html` and `projects.html` structure, reused the existing assets and styles,
highlighted resume-backed metrics, and included a clear AI-use disclosure. I then executed that plan
to create `ai.html`.

## License

This project uses the MIT License. See `LICENSE` for details.

## Code review - Nat Cabrera
Honestly I looked through your whole project and I feel that you went above and beyond the rubric requirements, which made it hard to find any errors. 
I feel like you really showcased your work here. I really like the layout as well as all the components such as the cards and buttons and the details about your skills.

As for you css I like how you had primary color and then color ink acorss your design/pages. 

js wise, I was not familiar with what noopener noreferrer meant, im a new DS align student but I looked it up and saw that its basically a security measure so the new link to a page cant be manipulated this is really cool, and was happy to learn about that. Also I saw in your js that you used "window.location.pathname.split("/").pop()" which seems to loop through all the links and then adds active and aria-current="page" as seen below. This was interesting I did not consider looping through links to add attributes very neat!

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href")?.replace("./", "");
  if (linkPage === currentPage) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  }
});

Your html looked great I saw no problems honestly, i made one edit which was class name to h3 and tag as well for heirachy but doesnt even seem super necessary. Excellent work!


