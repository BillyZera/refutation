// Build a simple table of contents from h2 in .content
const tocList = document.getElementById('tocList');
const headings = document.querySelectorAll('.content h2');
headings.forEach(h => {
  const id = h.parentElement.id || h.textContent.toLowerCase().replace(/[^a-z0-9]+/g,'-');
  h.parentElement.id = id;
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = '#' + id;
  a.textContent = h.textContent;
  li.appendChild(a);
  tocList.appendChild(li);
});

// Expand/collapse all <details>
const expandBtn = document.getElementById('expandBtn');
const collapseBtn = document.getElementById('collapseBtn');
expandBtn.addEventListener('click', () => document.querySelectorAll('details').forEach(d => d.open = true));
collapseBtn.addEventListener('click', () => document.querySelectorAll('details').forEach(d => d.open = false));

// Print/save as PDF
document.getElementById('printBtn').addEventListener('click', () => window.print());