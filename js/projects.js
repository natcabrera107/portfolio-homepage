const filterButtons = document.querySelectorAll(".filter-button");
const projectColumns = document.querySelectorAll(".project-column");
const statusLine = document.querySelector("#filter-status");

const filterLabels = {
  ai: "AI",
  backend: "Backend",
  java: "Java",
  research: "Research",
  leadership: "Leadership",
};

const updateStatus = (filter, visibleCount) => {
  if (!statusLine) {
    return;
  }

  statusLine.textContent =
    filter === "all"
      ? "Skill lens showing every portfolio signal."
      : `Skill lens found ${visibleCount} ${filterLabels[filter]} signal${visibleCount === 1 ? "" : "s"}.`;
};

const applyFilter = (selectedFilter) => {
  let visibleCount = 0;

  projectColumns.forEach((column) => {
    const card = column.querySelector(".project-card");
    const tags = card?.dataset.tags.split(" ") ?? [];
    const isMatch = selectedFilter === "all" || tags.includes(selectedFilter);

    column.classList.toggle("is-hidden", !isMatch);
    card?.classList.toggle("is-dimmed", !isMatch);

    if (isMatch) {
      visibleCount += 1;
    }
  });

  updateStatus(selectedFilter, visibleCount);
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter ?? "all";

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    applyFilter(selectedFilter);
  });
});
