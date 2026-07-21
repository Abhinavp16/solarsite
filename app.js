const STORAGE_KEY = "heliogrid_leads";
const statuses = ["New", "Contacted", "Site Survey", "Proposal", "Won", "Lost"];

const leadForm = document.querySelector("#leadForm");
const formMessage = document.querySelector("#formMessage");
const leadRows = document.querySelector("#leadRows");
const emptyState = document.querySelector("#emptyState");
const leadSearch = document.querySelector("#leadSearch");
const seedLeads = document.querySelector("#seedLeads");
const exportLeads = document.querySelector("#exportLeads");

const getLeads = () => JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

const createId = () =>
  globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const escapeHtml = (value) =>
  String(value || "").replace(/[&<>"]/g, (character) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
    return entities[character];
  });

const saveLeads = (leads) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
};

const formatDate = (dateString) =>
  new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short" }).format(new Date(dateString));

const getFilteredLeads = () => {
  const query = leadSearch.value.trim().toLowerCase();
  const leads = getLeads();

  if (!query) return leads;

  return leads.filter((lead) =>
    [lead.name, lead.phone, lead.email, lead.property, lead.budget, lead.status, lead.source]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
};

const updateMetrics = (leads) => {
  const openStatuses = new Set(["New", "Contacted", "Site Survey", "Proposal"]);
  const totalCapacity = leads.reduce((sum, lead) => sum + Number(lead.systemSize || 0), 0);

  document.querySelector("#totalLeads").textContent = leads.length;
  document.querySelector("#openLeads").textContent = leads.filter((lead) => openStatuses.has(lead.status)).length;
  document.querySelector("#totalCapacity").textContent = `${totalCapacity} kW`;
  document.querySelector("#wonLeads").textContent = leads.filter((lead) => lead.status === "Won").length;
};

const updatePipeline = (leads) => {
  const pipelineBars = document.querySelector("#pipelineBars");
  const maxCount = Math.max(1, ...statuses.map((status) => leads.filter((lead) => lead.status === status).length));

  pipelineBars.innerHTML = statuses
    .map((status) => {
      const count = leads.filter((lead) => lead.status === status).length;
      const width = Math.max(6, (count / maxCount) * 100);

      return `
        <div class="pipeline-row">
          <span>${status}</span>
          <div class="pipeline-track"><div class="pipeline-fill" style="width:${width}%"></div></div>
          <strong>${count}</strong>
        </div>
      `;
    })
    .join("");
};

const updateSourceSummary = (leads) => {
  const counts = leads.reduce((all, lead) => {
    all[lead.source] = (all[lead.source] || 0) + 1;
    return all;
  }, {});

  const summary = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([source, count]) => `${source}: ${count}`)
    .join(" | ");

  document.querySelector("#sourceSummary").textContent = summary || "No lead source data yet.";
};

const renderLeads = () => {
  const leads = getLeads();
  const filteredLeads = getFilteredLeads();

  updateMetrics(leads);
  updatePipeline(leads);
  updateSourceSummary(leads);

  leadRows.innerHTML = filteredLeads
    .map(
      (lead) => `
        <tr>
          <td><strong>${escapeHtml(lead.name)}</strong><br>${escapeHtml(lead.source)}</td>
          <td>${escapeHtml(lead.phone)}<br>${escapeHtml(lead.email)}</td>
          <td>${escapeHtml(lead.property)}</td>
          <td>${escapeHtml(lead.systemSize)} kW</td>
          <td>${escapeHtml(lead.budget)}</td>
          <td>
            <select class="status-select" data-id="${escapeHtml(lead.id)}" aria-label="Update status for ${escapeHtml(lead.name)}">
              ${statuses.map((status) => `<option ${lead.status === status ? "selected" : ""}>${status}</option>`).join("")}
            </select>
          </td>
          <td>${formatDate(lead.createdAt)}</td>
          <td><button class="delete-btn" data-delete="${escapeHtml(lead.id)}" type="button">Delete</button></td>
        </tr>
      `,
    )
    .join("");

  emptyState.style.display = filteredLeads.length ? "none" : "block";
};

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(leadForm);
  const lead = Object.fromEntries(formData.entries());
  const leads = getLeads();

  leads.unshift({
    ...lead,
    id: createId(),
    status: "New",
    createdAt: new Date().toISOString(),
  });

  saveLeads(leads);
  leadForm.reset();
  formMessage.textContent = "Lead generated successfully. Check the admin panel below.";
  renderLeads();
});

leadRows.addEventListener("change", (event) => {
  if (!event.target.matches(".status-select")) return;

  const leads = getLeads().map((lead) =>
    lead.id === event.target.dataset.id ? { ...lead, status: event.target.value } : lead,
  );

  saveLeads(leads);
  renderLeads();
});

leadRows.addEventListener("click", (event) => {
  const deleteId = event.target.dataset.delete;
  if (!deleteId) return;

  saveLeads(getLeads().filter((lead) => lead.id !== deleteId));
  renderLeads();
});

leadSearch.addEventListener("input", renderLeads);

seedLeads.addEventListener("click", () => {
  const demoLeads = [
    {
      name: "Rohit Sharma",
      phone: "98765 44110",
      email: "rohit@example.com",
      property: "Home",
      systemSize: "5",
      budget: "Rs 2-5 lakh",
      message: "Monthly bill around Rs 8,000.",
      source: "Website Contact Form",
      status: "Contacted",
    },
    {
      name: "GreenFab Industries",
      phone: "99887 66554",
      email: "ops@greenfab.example",
      property: "Factory",
      systemSize: "50",
      budget: "Rs 10 lakh+",
      message: "Need proposal for factory roof.",
      source: "Referral Campaign",
      status: "Proposal",
    },
    {
      name: "Sunrise School",
      phone: "91234 56780",
      email: "admin@sunrise.example",
      property: "Institution",
      systemSize: "25",
      budget: "Rs 10 lakh+",
      message: "Looking for subsidy guidance.",
      source: "Google Ads",
      status: "Site Survey",
    },
  ].map((lead) => ({ ...lead, id: createId(), createdAt: new Date().toISOString() }));

  saveLeads([...demoLeads, ...getLeads()]);
  renderLeads();
});

exportLeads.addEventListener("click", () => {
  const leads = getLeads();
  if (!leads.length) return;

  const headers = ["Name", "Phone", "Email", "Property", "System Size", "Budget", "Status", "Source", "Created At"];
  const rows = leads.map((lead) => [
    lead.name,
    lead.phone,
    lead.email,
    lead.property,
    `${lead.systemSize} kW`,
    lead.budget,
    lead.status,
    lead.source,
    lead.createdAt,
  ]);
  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "heliogrid-leads.csv";
  link.click();
  URL.revokeObjectURL(url);
});

renderLeads();
