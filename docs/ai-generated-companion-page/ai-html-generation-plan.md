---

name: AI HTML Plan
overview: Plan how to generate `ai.html` as an AI-generated companion page using the existing portfolio pages, shared assets, and resume content as the factual source.
todos:

- id: review-existing-pages
content: Use `index.html` and `projects.html` as the structure and style references for the new AI page.
status: pending
- id: generate-resume-copy
content: Generate concise AI-page copy from the resume while keeping all claims factual and resume-backed.
status: pending
- id: compose-ai-page
content: Assemble `ai.html` with shared navigation, hero, narrative, signal cards, disclosure, footer, and scripts.
status: pending
- id: validate-page
content: Check responsive layout, active navigation, accessibility basics, factual accuracy, and lint/format output.
status: pending
isProject: false

---

# AI HTML Generation Plan

## Objective

Generate `ai.html` as a third portfolio page that matches the existing site built around `[index.html](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/index.html)` and `[projects.html](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/projects.html)`. Use `[docs/ai-generated-companion-page/Resume_Naveen_Shankar_MSCS_SDE.md](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/docs/ai-generated-companion-page/Resume_Naveen_Shankar_MSCS_SDE.md)` as the page’s content context, and reuse existing assets, styles, navigation, footer, and Bootstrap layout patterns.

## Source Inputs

- `[index.html](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/index.html)`: use as the reference for the shared HTML shell, homepage tone, nav, footer, Bootstrap import, favicon, and `js/main.js` script.
- `[projects.html](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/projects.html)`: use as the reference for resume-backed project framing, card layouts, metrics, and active navigation behavior.
- `[css/styles.css](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/css/styles.css)`: reuse existing visual system and add only small `page-ai` styles if needed.
- `[assets/favicon.svg](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/assets/favicon.svg)` and existing site assets: preserve current asset paths and avoid adding new assets unless the design requires them.
- `[docs/ai-generated-companion-page/Resume_Naveen_Shankar_MSCS_SDE.md](/Users/naveen/Naveen/Courses/Web Dev/Projects/homepage/docs/ai-generated-companion-page/Resume_Naveen_Shankar_MSCS_SDE.md)`: use as the factual basis for all generated copy.

## Generation Approach

Use AI to transform the resume into a visitor-focused career brief, not a duplicate resume page. The generated content should emphasize Naveen’s strongest themes: backend engineering, applied AI, Java/Python systems, RAG, automation, measurable business impact, and leadership.

Suggested prompt:

```text
Using the resume below as the only factual source, generate content for an AI-generated companion page for Naveen Shankar’s static portfolio website.

The page should:
- Summarize the resume into a professional career narrative.
- Emphasize backend engineering, applied AI, Java, Python, LangChain, RAG, Kafka, Redis, Spring Boot, and measurable impact.
- Highlight metrics such as 20+ workflows, 90% less manual scripting, 10,000+ internal chatbot users, 15,000+ monthly customers, 56% turnaround-time reduction, and six-person team leadership where relevant.
- Include a clear disclosure that the page was generated with AI assistance using the resume as context.
- Avoid inventing employers, dates, awards, technologies, metrics, or claims not present in the resume.
- Match the tone and structure of the existing portfolio pages.
```

## Page Structure

1. Build from the same HTML shell used by the existing pages: `doctype`, language, viewport, author metadata, Bootstrap CDN, favicon, custom stylesheet, header, footer, and `js/main.js`.
2. Set page-specific metadata: title such as `AI Career Brief | Naveen Shankar`, description explaining that this is an AI-generated career brief based on resume context, and `<body class="page-ai">`.
3. Reuse the existing navbar and mark `AI Brief` as active with `aria-current="page"`.
4. Add a hero section labeled `AI-Generated Companion Page` with a headline explaining that the page is a resume-based career brief.
5. Add a main narrative section that describes Naveen’s career pattern: identifying workflow problems, building reliable backend systems, and applying AI to improve real processes.
6. Add a sidebar or compact card for generated positioning statements, grounded in resume evidence.
7. Add three metric-backed signal cards, such as `Evidence of Scale`, `Engineering Range`, and `Leadership Potential`.
8. Add a visible AI disclosure section explaining how the page was created.

## Validation

Before considering `ai.html` complete, verify that every factual claim is supported by the resume, the nav works across all three pages, the active state is correct, the layout is responsive, and the disclosure is visible. Run the project’s available lint or formatting checks after implementation.
