const I18N = {
  fr: {
    dashboard: "Tableau de bord",
    clients: "Clients",
    dossier: "Dossier client",
    workflow: "Workflow",
    tasks: "Tâches",
    deadlines: "Échéances",
    activity: "Journal",
    brandSub: "Gestion du dossier client",
    search: "Rechercher un client, document ou tâche…",
    newItem: "Nouvel élément",
    activeClients: "Clients actifs",
    missing: "Documents manquants",
    openTasks: "Tâches ouvertes",
    deadline7: "Échéances à 7 jours",
    fileHealth: "Santé du dossier",
    upcoming: "Prochaines échéances",
    queue: "File de travail",
    clientsNote:
      "Un espace par client avec identité, services, documents et état du dossier.",
    addClient: "Ajouter un client",
    filter: "Filtrer les clients…",
    all: "Tous",
    owner: "Responsable",
    status: "Statut",
    service: "Services",
    open: "Ouvrir",
    document: "Document",
    type: "Type",
    period: "Période",
    actions: "Actions",
    register: "Enregistrer un document",
    missingDoc: "Marquer manquant",
    received: "Marquer reçu",
    classify: "Classer",
    journal: "Journal",
    stepProgress: "Progression",
    simulation: "Simulation pédagogique",
    completeStep: "Marquer l’étape comme terminée",
    companyCreation: "Création d’entreprise",
    accountingFlow: "Traitement comptable",
    tax: "TVA",
    cnss: "CNSS / AMO",
    selectedClient: "Client sélectionné",
    selectClient: "Sélectionner un client",
    documents: "Documents",
    journals: "Journaux auxiliaires",
    taxes: "Fiscalité",
    tasksSub: "Tâches par client et par étape",
    deadlinesSub: "Échéances des obligations et suivis",
    activitySub: "Historique des actions dans la simulation",
    noData: "Aucune donnée",
    required: "Obligatoire",
    save: "Enregistrer",
    cancel: "Annuler",
    created: "Créé",
    high: "Haute",
    medium: "Moyenne",
    low: "Faible",
    complete: "Terminé",
    review: "À contrôler",
    overdue: "En retard",
    active: "Actif",
    attention: "À surveiller",
    purchase: "Achats",
    sales: "Ventes",
    cash: "Caisse",
    bank: "Banque",
    legal: "Juridique",
    employee: "Salarié",
    missingDocs: "Manquant",
    validated: "Validé",
    pending: "En attente",
    next: "Étape suivante",
    back: "Étape précédente",
    dataModel: "Modèle simple",
    dataModelNote: "Client → Documents → Journaux → Tâches / Échéances",
    resetConfirm: "Réinitialiser les données de démonstration ?",
    foundClient: "Client trouvé — ouverture du dossier.",
    foundDoc: "Document trouvé — ouverture du dossier.",
    foundTask: "Tâche trouvée — ouverture des tâches.",
  },
  en: {
    dashboard: "Dashboard",
    clients: "Clients",
    dossier: "Client file",
    workflow: "Workflow",
    tasks: "Tasks",
    deadlines: "Deadlines",
    activity: "Activity log",
    brandSub: "Client file management",
    search: "Search client, document or task…",
    newItem: "New item",
    activeClients: "Active clients",
    missing: "Missing documents",
    openTasks: "Open tasks",
    deadline7: "7-day deadlines",
    fileHealth: "File health",
    upcoming: "Upcoming deadlines",
    queue: "Work queue",
    clientsNote:
      "One workspace per client with identity, services, documents and file status.",
    addClient: "Add client",
    filter: "Filter clients…",
    all: "All",
    owner: "Owner",
    status: "Status",
    service: "Services",
    open: "Open",
    document: "Document",
    type: "Type",
    period: "Period",
    actions: "Actions",
    register: "Register document",
    missingDoc: "Mark missing",
    received: "Mark received",
    classify: "Classify",
    journal: "Journal",
    stepProgress: "Progress",
    simulation: "Educational simulation",
    completeStep: "Mark step complete",
    companyCreation: "Company creation",
    accountingFlow: "Accounting workflow",
    tax: "VAT",
    cnss: "CNSS / AMO",
    selectedClient: "Selected client",
    selectClient: "Select a client",
    documents: "Documents",
    journals: "Auxiliary journals",
    taxes: "Tax",
    tasksSub: "Tasks by client and workflow step",
    deadlinesSub: "Obligations and follow-up dates",
    activitySub: "Action history inside the simulation",
    noData: "No data",
    required: "Required",
    save: "Save",
    cancel: "Cancel",
    created: "Created",
    high: "High",
    medium: "Medium",
    low: "Low",
    complete: "Completed",
    review: "Review",
    overdue: "Overdue",
    active: "Active",
    attention: "Needs attention",
    purchase: "Purchases",
    sales: "Sales",
    cash: "Cash",
    bank: "Bank",
    legal: "Legal",
    employee: "Employee",
    missingDocs: "Missing",
    validated: "Validated",
    pending: "Pending",
    next: "Next step",
    back: "Previous step",
    dataModel: "Simple model",
    dataModelNote: "Client → Documents → Journals → Tasks / Deadlines",
    resetConfirm: "Reset demo data?",
    foundClient: "Client found — opening file.",
    foundDoc: "Document found — opening file.",
    foundTask: "Task found — opening tasks.",
  },
};
const seed = {
  clients: [
    {
      id: "CLI-001",
      name: "Atlas Textile SARL",
      legal: "SARL",
      city: "Fès",
      ice: "001234567890123",
      if: "54123001",
      rc: "12345",
      owner: "Zineb",
      status: "Active",
      services: ["Comptabilité", "TVA", "CNSS"],
      created: "2026-01-09",
    },
    {
      id: "CLI-002",
      name: "Nord Services",
      legal: "SARL",
      city: "Fès",
      ice: "001234567890456",
      if: "54123002",
      rc: "15821",
      owner: "Nadia",
      status: "Active",
      services: ["Comptabilité", "TVA"],
      created: "2026-02-14",
    },
    {
      id: "CLI-003",
      name: "Médina Bâtiment",
      legal: "SARL",
      city: "Meknès",
      ice: "001234567890789",
      if: "54123003",
      rc: "22104",
      owner: "Zineb",
      status: "Needs attention",
      services: ["Comptabilité", "TVA", "CNSS", "Juridique"],
      created: "2026-03-03",
    },
  ],
  documents: [
    {
      id: "DOC-01",
      clientId: "CLI-001",
      period: "2026-09",
      type: "Purchase",
      name: "Fournisseur_Beta_0712.pdf",
      status: "Validated",
      missing: false,
    },
    {
      id: "DOC-02",
      clientId: "CLI-001",
      period: "2026-09",
      type: "Sales",
      name: "Ventes_Septembre.pdf",
      status: "Validated",
      missing: false,
    },
    {
      id: "DOC-03",
      clientId: "CLI-001",
      period: "2026-09",
      type: "Bank",
      name: "Releve_Banque.pdf",
      status: "Review",
      missing: false,
    },
    {
      id: "DOC-04",
      clientId: "CLI-001",
      period: "2026-09",
      type: "Cash",
      name: "Caisse_Septembre.xlsx",
      status: "Missing",
      missing: true,
    },
    {
      id: "DOC-05",
      clientId: "CLI-002",
      period: "2026-09",
      type: "Purchase",
      name: "Achats_Septembre.pdf",
      status: "Review",
      missing: false,
    },
    {
      id: "DOC-06",
      clientId: "CLI-002",
      period: "2026-09",
      type: "Sales",
      name: "Factures_Ventes.pdf",
      status: "Missing",
      missing: true,
    },
    {
      id: "DOC-07",
      clientId: "CLI-003",
      period: "2026-09",
      type: "Legal",
      name: "Extrait_RC.pdf",
      status: "Missing",
      missing: true,
    },
  ],
  tasks: [
    {
      id: "TSK-01",
      clientId: "CLI-001",
      title: "Valider le relevé bancaire",
      type: "Bank",
      owner: "Nadia",
      due: "2026-09-13",
      priority: "High",
      status: "To review",
    },
    {
      id: "TSK-02",
      clientId: "CLI-001",
      title: "Préparer la revue TVA",
      type: "TVA",
      owner: "Zineb",
      due: "2026-09-14",
      priority: "Medium",
      status: "In progress",
    },
    {
      id: "TSK-03",
      clientId: "CLI-002",
      title: "Demander les ventes manquantes",
      type: "Missing",
      owner: "Nadia",
      due: "2026-09-12",
      priority: "High",
      status: "Overdue",
    },
  ],
  deadlines: [
    {
      id: "DL-01",
      clientId: "CLI-001",
      title: "Revue TVA",
      type: "TVA",
      date: "2026-09-14",
    },
    {
      id: "DL-02",
      clientId: "CLI-003",
      title: "Suivi dossier juridique",
      type: "Legal",
      date: "2026-09-12",
    },
    {
      id: "DL-03",
      clientId: "CLI-002",
      title: "Contrôle comptable mensuel",
      type: "Accounting",
      date: "2026-09-15",
    },
  ],
  journals: {
    "CLI-001": {
      Purchase: ["Fournisseur_Beta_0712.pdf"],
      Sales: ["Ventes_Septembre.pdf"],
      Cash: [],
      Bank: ["Releve_Banque.pdf"],
    },
    "CLI-002": {
      Purchase: ["Achats_Septembre.pdf"],
      Sales: [],
      Cash: [],
      Bank: [],
    },
  },
  activity: [],
  creation: {},
  settings: { lang: "fr", dark: false },
};
let state = load();
let view = "dashboard";
let dossierTab = "documents";
let creationStep = 0;
let globalQ = "";
const searches = {
  clients: "",
  dossier: "",
  tasks: "",
  deadlines: "",
  activity: "",
};
const creationSteps = [
  "Certificat négatif",
  "Contrat de bail",
  "Statuts",
  "Dépôt des actes",
  "Formalités d’enregistrement",
  "Patente / IF",
  "Registre de commerce",
  "Publication légale",
  "Compte bancaire / capital",
  "Affiliation CNSS",
];
function load() {
  try {
    const x = JSON.parse(localStorage.getItem("m2a-office-manager-v3"));
    if (x) return x;
  } catch (e) {}
  return JSON.parse(JSON.stringify(seed));
}
function save() {
  localStorage.setItem("m2a-office-manager-v3", JSON.stringify(state));
}
function t(k) {
  return I18N[state.settings.lang][k] || k;
}
function esc(x) {
  return String(x ?? "").replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[m],
  );
}
function uid(p) {
  return p + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
}
function client(id) {
  return state.clients.find((x) => x.id === id);
}
function status(s) {
  const c = {
    Active: "g",
    "Needs attention": "r",
    Missing: "r",
    Validated: "g",
    Review: "b",
    "To review": "b",
    "In progress": "b",
    Overdue: "r",
    High: "b",
    Medium: "x",
    Low: "x",
    Completed: "g",
  };
  const m = {
    "Needs attention": t("attention"),
    Missing: t("missingDocs"),
    Validated: t("validated"),
    Review: t("review"),
    "To review": t("review"),
    "In progress": t("review"),
    Overdue: t("overdue"),
    High: t("high"),
    Medium: t("medium"),
    Low: t("low"),
    Active: t("active"),
    Completed: t("complete"),
  };
  return `<span class="chip ${c[s] || "x"}">${esc(m[s] || s)}</span>`;
}
function fmt(d) {
  return new Intl.DateTimeFormat(
    state.settings.lang === "fr" ? "fr-FR" : "en-GB",
    { day: "2-digit", month: "short", year: "numeric" },
  ).format(new Date(d));
}
function rel(d) {
  const n = Math.ceil((new Date(d) - new Date()) / 86400000);
  return n < 0
    ? Math.abs(n) +
        " " +
        (state.settings.lang === "fr" ? "j en retard" : "d overdue")
    : n === 0
      ? state.settings.lang === "fr"
        ? "Aujourd’hui"
        : "Today"
      : n === 1
        ? state.settings.lang === "fr"
          ? "Demain"
          : "Tomorrow"
        : (state.settings.lang === "fr" ? "dans " : "in ") +
          n +
          (state.settings.lang === "fr" ? " j" : "d");
}
function svc(x) {
  return x.map((v) => `<span class="chip x">${esc(v)}</span>`).join(" ");
}
function initials(n) {
  return n
    .split(/\s+/)
    .slice(0, 2)
    .map((x) => x[0])
    .join("")
    .toUpperCase();
}
function matches(q, ...v) {
  return (
    !q.trim() ||
    v.join(" ").toLocaleLowerCase().includes(q.toLocaleLowerCase().trim())
  );
}
function log(action, entity, msg) {
  state.activity.unshift({
    id: uid("ACT"),
    date: new Date().toISOString(),
    action,
    entity,
    msg,
  });
  state.activity = state.activity.slice(0, 150);
  save();
}
function toast(msg) {
  const x = document.createElement("div");
  x.className = "toast";
  x.textContent = msg;
  document.getElementById("toasts").appendChild(x);
  setTimeout(() => x.remove(), 2500);
}
function go(v) {
  view = v;
  document
    .querySelectorAll(".view")
    .forEach((x) => x.classList.remove("active"));
  document.getElementById("v-" + v).classList.add("active");
  document
    .querySelectorAll("#nav button")
    .forEach((b) => b.classList.toggle("active", b.dataset.view === v));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function head(k, title, note, btn = "") {
  return `<div class="head"><div><div class="eyebrow">M2A</div><div class="title">${esc(title)}</div><p class="note">${esc(note)}</p></div>${btn}</div>`;
}
function render() {
  document.body.classList.toggle("dark", state.settings.dark);
  document.documentElement.lang = state.settings.lang;
  document.getElementById("brandSub").textContent = t("brandSub");
  document.getElementById("globalSearch").placeholder = t("search");
  document
    .querySelectorAll("#nav [data-k]")
    .forEach((s) => (s.textContent = t(s.dataset.k)));
  document
    .getElementById("fr")
    .classList.toggle("active", state.settings.lang === "fr");
  document
    .getElementById("en")
    .classList.toggle("active", state.settings.lang === "en");
  document
    .getElementById("theme")
    .classList.toggle("dark", state.settings.dark);
  document.getElementById("sun").textContent = state.settings.dark ? "☾" : "☼";
  renderDashboard();
  renderClients();
  renderDossier();
  renderWorkflow();
  renderTasks();
  renderDeadlines();
  renderActivity();
}
function renderDashboard() {
  const miss = state.documents.filter((x) => x.missing).length,
    open = state.tasks.filter((x) => x.status !== "Completed").length,
    soon = state.deadlines.filter(
      (x) => new Date(x.date) - new Date() <= 7 * 86400000,
    ).length,
    comp = Math.round(100 - (miss / Math.max(1, state.documents.length)) * 100);
  document.getElementById("v-dashboard").innerHTML =
    head(
      "dashboard",
      t("dashboard"),
      "Vue synthétique du cycle client.",
      `<button class="primary" onclick="quick()">＋ ${t("newItem")}</button>`,
    ) +
    `<div class="metrics"><div class="metric"><div class="mlabel">${t("activeClients")}</div><div class="mval">${state.clients.filter((x) => x.status === "Active").length}</div><div class="mnote">${state.clients.length} ${t("clients")}</div></div><div class="metric"><div class="mlabel">${t("missing")}</div><div class="mval">${miss}</div><div class="mnote ${miss ? "badtxt" : "goodtxt"}">${miss ? t("attention") : t("complete")}</div></div><div class="metric"><div class="mlabel">${t("openTasks")}</div><div class="mval">${open}</div><div class="mnote">${state.tasks.filter((x) => x.status === "Overdue").length} ${t("overdue")}</div></div><div class="metric"><div class="mlabel">${t("deadline7")}</div><div class="mval">${soon}</div><div class="mnote">${t("upcoming")}</div></div></div><div class="grid2"><section class="card"><div class="cardhead"><div><div class="cardtitle">${t("fileHealth")}</div><div class="cardsub">${t("dataModelNote")}</div></div><span class="chip ${comp < 80 ? "w" : "g"}">${comp}%</span></div><div class="body"><div class="progress"><i style="width:${comp}%"></i></div><div class="mini-grid"><div class="mini"><span class="mlabel">${t("purchase")}</span><strong>${state.documents.filter((x) => x.type === "Purchase" && x.missing).length}/${state.documents.filter((x) => x.type === "Purchase").length}</strong></div><div class="mini"><span class="mlabel">${t("sales")}</span><strong>${state.documents.filter((x) => x.type === "Sales" && x.missing).length}/${state.documents.filter((x) => x.type === "Sales").length}</strong></div><div class="mini"><span class="mlabel">${t("bank")}</span><strong>${state.documents.filter((x) => x.type === "Bank" && x.missing).length}/${state.documents.filter((x) => x.type === "Bank").length}</strong></div></div></section></div><div class="grid2" style="margin-top:14px"><section class="card"><div class="cardhead"><div><div class="cardtitle">${t("upcoming")}</div></div><button class="ghost" onclick="go('deadlines')">Voir</button></div><div class="body"><div class="list">${state.deadlines
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5)
      .map(
        (x) =>
          `<div class="row"><div class="maintext"><div class="rtitle">${esc(x.title)}</div><div class="rmeta">${esc(client(x.clientId)?.name || "")} · ${fmt(x.date)}</div></div><span class="chip w">${rel(x.date)}</span></div>`,
      )
      .join(
        "",
      )}</div></div></section><section class="card"><div class="cardhead"><div><div class="cardtitle">${t("queue")}</div></div><button class="ghost" onclick="go('tasks')">Voir</button></div><div class="body"><div class="list">${state.tasks
      .filter((x) => x.status !== "Completed")
      .slice(0, 5)
      .map(
        (x) =>
          `<div class="row"><div class="maintext"><div class="rtitle">${esc(x.title)}</div><div class="rmeta">${esc(client(x.clientId)?.name || "")} · ${esc(x.owner)}</div></div>${status(x.status)}</div>`,
      )
      .join("")}</div></div></section></div>`;
}
function getClients() {
  return state.clients.filter(
    (x) =>
      matches(searches.clients, x.name, x.id, x.city, x.owner, x.ice) &&
      (!clientFilters.status || x.status === clientFilters.status) &&
      (!clientFilters.owner || x.owner === clientFilters.owner),
  );
}
function renderClients() {
  const list = getClients();
  document.getElementById("v-clients").innerHTML =
    head(
      "clients",
      t("clients"),
      t("clientsNote"),
      `<button class="primary" onclick="clientModal()">＋ ${t("addClient")}</button>`,
    ) +
    `<div class="toolbar"><input class="field search" id="clientSearch" value="${esc(searches.clients)}" placeholder="${t("filter")}"><select class="field" id="clientStatus"><option value="">${t("all")}</option><option value="Active">${t("active")}</option><option value="Needs attention">${t("attention")}</option></select><select class="field" id="clientOwner"><option value="">${t("all")}</option><option>Zineb</option><option>Nadia</option></select></div><section class="card"><div class="tablewrap"><table class="table"><thead><tr><th>${t("clients")}</th><th>${t("city" || "city")}</th><th>${t("service")}</th><th>${t("owner")}</th><th>${t("status")}</th><th></th></tr></thead><tbody id="clientRows">${list.map((x) => `<tr><td><div class="client"><div class="circle">${initials(x.name)}</div><div><b>${esc(x.name)}</b><div class="rmeta">${esc(x.id)} · ${esc(x.legal)}</div></div></div></td><td>${esc(x.city)}</td><td>${svc(x.services)}</td><td>${esc(x.owner)}</td><td>${status(x.status)}</td><td><button class="ghost" onclick="openClient('${x.id}')">${t("open")}</button></td></tr>`).join("") || `<tr><td colspan="6"><div class="empty">${t("noData")}</div></td></tr>`}</tbody></table></div></section>`;
  bindClientSearch();
}
const clientFilters = { status: "", owner: "" };
function renderClientRows() {
  const rows = getClients()
    .map(
      (x) =>
        `<tr><td><div class="client"><div class="circle">${initials(x.name)}</div><div><b>${esc(x.name)}</b><div class="rmeta">${esc(x.id)} · ${esc(x.legal)}</div></div></div></td><td>${esc(x.city)}</td><td>${svc(x.services)}</td><td>${esc(x.owner)}</td><td>${status(x.status)}</td><td><button class="ghost" onclick="openClient('${x.id}')">${t("open")}</button></td></tr>`,
    )
    .join("");
  const body = document.getElementById("clientRows");
  if (body)
    body.innerHTML =
      rows ||
      `<tr><td colspan="6"><div class="empty">${t("noData")}</div></td></tr>`;
}
function bindClientSearch() {
  const s = document.getElementById("clientSearch");
  if (s) {
    s.oninput = (e) => {
      searches.clients = e.target.value;
      renderClientRows();
    };
    s.onkeydown = (e) => e.stopPropagation();
  }
  const st = document.getElementById("clientStatus");
  if (st) {
    st.value = clientFilters.status;
    st.onchange = (e) => {
      clientFilters.status = e.target.value;
      renderClientRows();
    };
  }
  const ow = document.getElementById("clientOwner");
  if (ow) {
    ow.value = clientFilters.owner;
    ow.onchange = (e) => {
      clientFilters.owner = e.target.value;
      renderClientRows();
    };
  }
}
function openClient(id) {
  state.currentClient = id;
  dossierTab = "documents";
  go("dossier");
}
function renderDossier() {
  const c = client(state.currentClient) || state.clients[0];
  const docs = state.documents.filter((x) => x.clientId === c?.id);
  document.getElementById("v-dossier").innerHTML =
    head("dossier", t("dossier"), t("dataModelNote")) +
    `<div class="toolbar"><select class="field" id="selectedClient">${state.clients.map((x) => `<option value="${x.id}" ${x.id === c?.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select></div><section class="card"><div class="cardhead"><div><div class="cardtitle">${esc(c?.name || t("selectClient"))}</div><div class="cardsub">${esc(c?.id || "")}</div></div>${status(c?.status || "")}</div><div class="body"><div class="subtabs"><button class="tab ${dossierTab === "documents" ? "active" : ""}" onclick="dossierTab='documents';renderDossier()">${t("documents")}</button><button class="tab ${dossierTab === "journals" ? "active" : ""}" onclick="dossierTab='journals';renderDossier()">${t("journals")}</button><button class="tab ${dossierTab === "taxes" ? "active" : ""}" onclick="dossierTab='taxes';renderDossier()">${t("taxes")}</button></div>${dossierTab === "documents" ? documentsPanel(c, docs) : dossierTab === "journals" ? journalsPanel(c) : taxPanel(c)}</div></section>`;
  document.getElementById("selectedClient").onchange = (e) => {
    state.currentClient = e.target.value;
    dossierTab = "documents";
    renderDossier();
  };
}
function documentsPanel(c, docs) {
  return `<div class="toolbar"><input class="field search" id="dossierSearch" placeholder="${state.settings.lang === "fr" ? "Rechercher dans les documents…" : "Search documents…"}" value="${esc(searches.dossier)}"><select class="field" id="docTypeFilter"><option value="">${t("all")}</option><option value="Purchase">${t("purchase")}</option><option value="Sales">${t("sales")}</option><option value="Cash">${t("cash")}</option><option value="Bank">${t("bank")}</option><option value="Legal">${t("legal")}</option></select><button class="primary" onclick="docModal('${c.id}')">＋ ${t("register")}</button></div><div class="notice">${t("simulation")}: le classement de la pièce pilote le journal correspondant. Les règles fiscales doivent rester configurables et validées par l’utilisateur.</div><div class="tablewrap" style="margin-top:12px"><table class="table"><thead><tr><th>${t("document")}</th><th>${t("type")}</th><th>${t("period")}</th><th>${t("status")}</th><th>${t("actions")}</th></tr></thead><tbody id="docRows">${docRows(c.id)}</tbody></table></div><div class="dropzone" style="margin-top:12px">Déposez ici une pièce pour simulation — aucun fichier réel n’est envoyé vers un serveur.</div>`;
}
function docRows(cid) {
  const q = searches.dossier.toLowerCase(),
    type = document.getElementById("docTypeFilter")?.value || "";
  return (
    state.documents
      .filter(
        (x) =>
          x.clientId === cid &&
          (!q || `${x.name} ${x.type} ${x.period}`.toLowerCase().includes(q)) &&
          (!type || x.type === type),
      )
      .map(
        (x) =>
          `<tr><td><b>${esc(x.name)}</b><div class="rmeta">${esc(x.id)}</div></td><td>${esc(typeLabel(x.type))}</td><td>${esc(x.period)}</td><td>${status(x.status)}</td><td><button class="ghost" onclick="toggleDoc('${x.id}')">${x.missing ? t("received") : t("missingDoc")}</button></td></tr>`,
      )
      .join("") ||
    `<tr><td colspan="5"><div class="empty">${t("noData")}</div></td></tr>`
  );
}
function typeLabel(x) {
  return (
    {
      Purchase: t("purchase"),
      Sales: t("sales"),
      Cash: t("cash"),
      Bank: t("bank"),
      Legal: t("legal"),
    }[x] || x
  );
}
function journalsPanel(c) {
  const j = state.journals[c.id] || {
    Purchase: [],
    Sales: [],
    Cash: [],
    Bank: [],
  };
  return `<div class="notice">${t("simulation")}: le journal est généré à partir des documents classés. Ce n’est pas une écriture comptable officielle.</div><div class="grid2" style="margin-top:12px">${[
    ["Purchase", t("purchase")],
    ["Sales", t("sales")],
    ["Cash", t("cash")],
    ["Bank", t("bank")],
  ]
    .map(
      ([k, l]) =>
        `<section class="card"><div class="cardhead"><div><div class="cardtitle">${l}</div><div class="cardsub">${t("journal")}</div></div><span class="chip b">${j[k].length}</span></div><div class="body"><div class="list">${j[k].map((n) => `<div class="row"><div class="maintext"><div class="rtitle">${esc(n)}</div><div class="rmeta">Pièce classée</div></div><span class="chip g">OK</span></div>`).join("") || `<div class="empty">${t("noData")}</div>`}</div></div></section>`,
    )
    .join("")}</div>`;
}
function taxPanel(c) {
  const purchases = state.documents.filter(
      (x) => x.clientId === c.id && x.type === "Purchase" && !x.missing,
    ).length,
    sales = state.documents.filter(
      (x) => x.clientId === c.id && x.type === "Sales" && !x.missing,
    ).length;
  return `<div class="notice">${t("simulation")}: les valeurs ci-dessous servent à démontrer le flux logiciel. Elles ne constituent pas un calcul fiscal officiel.</div><div class="metrics" style="margin-top:12px"><div class="metric"><div class="mlabel">${t("purchase")}</div><div class="mval">${purchases}</div><div class="mnote">Pièces exploitées</div></div><div class="metric"><div class="mlabel">${t("sales")}</div><div class="mval">${sales}</div><div class="mnote">Pièces exploitées</div></div><div class="metric"><div class="mlabel">TVA</div><div class="mval">${purchases + sales}</div><div class="mnote">Base de démonstration</div></div><div class="metric"><div class="mlabel">${t("cnss")}</div><div class="mval">—</div><div class="mnote">Workflow à contrôler</div></div></div>`;
}
function renderWorkflow() {
  const done =
    state.creation[state.currentClient || "CLI-001"] ||
    Array(creationSteps.length).fill(false);
  document.getElementById("v-workflow").innerHTML =
    head("workflow", t("workflow"), t("dataModelNote")) +
    `<div class="workflow"><section class="card"><div class="cardhead"><div><div class="cardtitle">${t("companyCreation")}</div><div class="cardsub">${t("stepProgress")}</div></div><span class="chip b">${done.filter(Boolean).length}/${creationSteps.length}</span></div><div class="steps">${creationSteps.map((s, i) => `<div class="step ${creationStep === i ? "active " : ""}${done[i] ? "done" : ""}" onclick="creationStep=${i};renderWorkflow()"><button class="num" type="button" aria-label="${done[i] ? t("complete") : s}" title="${done[i] ? t("complete") : t("pending")}" onclick="event.stopPropagation();toggleCreationStep(${i})">${done[i] ? "✓" : i + 1}</button><div><h4>${esc(s)}</h4><p>${done[i] ? "✓ " + t("complete") : i === creationStep ? t("review") : t("pending")}</p></div></div>`).join("")}</div></section><section class="card"><div class="cardhead"><div><div class="cardtitle">${esc(creationSteps[creationStep])}</div><div class="cardsub">${t("companyCreation")} · ${client(state.currentClient || "CLI-001")?.name || ""}</div></div>${done[creationStep] ? status("Completed") : status("To review")}</div><div class="body"><div class="notice">${t("simulation")}: chaque étape est représentée comme une tâche d’un dossier client. Cliquez sur le numéro de l’étape pour la marquer comme terminée.</div><div class="row" style="margin-top:13px"><button class="ghost" ${creationStep === 0 ? "disabled" : ""} onclick="creationStep--;renderWorkflow()">${t("back")}</button><button class="ghost" ${creationStep === creationSteps.length - 1 ? "disabled" : ""} onclick="creationStep++;renderWorkflow()">${t("next")}</button></div></div></section></div><section class="card" style="margin-top:14px"><div class="cardhead"><div class="cardtitle">${t("accountingFlow")}</div><span class="chip b">${t("simulation")}</span></div><div class="body"><div class="list"><div class="row"><div class="maintext"><div class="rtitle">1. Réception des pièces</div><div class="rmeta">Achats · Ventes · Caisse · Banque</div></div><span class="chip x">Input</span></div><div class="row"><div class="maintext"><div class="rtitle">2. Classement</div><div class="rmeta">Type réel ↔ classification</div></div><span class="chip b">Rule</span></div><div class="row"><div class="maintext"><div class="rtitle">3. Journal</div><div class="rmeta">La pièce classée alimente le journal auxiliaire correspondant</div></div><span class="chip b">Flow</span></div><div class="row"><div class="maintext"><div class="rtitle">4. Contrôle</div><div class="rmeta">Pièces manquantes, doublons, incohérences</div></div><span class="chip w">Review</span></div><div class="row"><div class="maintext"><div class="rtitle">5. TVA / CNSS / échéances</div><div class="rmeta">Préparation et suivi, avec validation humaine</div></div><span class="chip g">Output</span></div></div></div></section>`;
}
function toggleCreationStep(index) {
  const cid = state.currentClient || "CLI-001";
  if (!state.creation[cid])
    state.creation[cid] = Array(creationSteps.length).fill(false);
  state.creation[cid][index] = !state.creation[cid][index];
  log(
    state.creation[cid][index] ? "Completed" : "Reopened",
    "CREATION",
    `${creationSteps[index]} — ${client(cid)?.name || ""}`,
  );
  save();
  renderWorkflow();
  toast(state.creation[cid][index] ? t("complete") : t("pending"));
}
function getTasks() {
  return state.tasks.filter((x) =>
    matches(
      searches.tasks,
      x.title,
      x.type,
      x.owner,
      x.status,
      client(x.clientId)?.name,
    ),
  );
}
function renderTasks() {
  const rows = getTasks();
  document.getElementById("v-tasks").innerHTML =
    head(
      "tasks",
      t("tasks"),
      t("tasksSub"),
      `<button class="primary" onclick="taskModal()">＋ ${t("newItem")}</button>`,
    ) +
    `<div class="toolbar"><input class="field search" id="taskSearch" value="${esc(searches.tasks)}" placeholder="${t("filter")}"></div><section class="card"><div class="tablewrap"><table class="table"><thead><tr><th>Tâche</th><th>Client</th><th>Responsable</th><th>Échéance</th><th>Priorité</th><th>Statut</th><th></th></tr></thead><tbody id="taskRows">${rows.map((x) => `<tr><td><b>${esc(x.title)}</b><div class="rmeta">${esc(x.type)}</div></td><td>${esc(client(x.clientId)?.name || "")}</td><td>${esc(x.owner)}</td><td>${fmt(x.due)}<div class="rmeta">${rel(x.due)}</div></td><td>${status(x.priority)}</td><td>${status(x.status)}</td><td>${x.status === "Completed" ? "—" : `<button class="ghost" onclick="doneTask('${x.id}')">${t("completeStep")}</button>`}</td></tr>`).join("") || `<tr><td colspan="7"><div class="empty">${t("noData")}</div></td></tr>`}</tbody></table></div></section>`;
  document.getElementById("taskSearch").oninput = (e) => {
    searches.tasks = e.target.value;
    const tb = document.getElementById("taskRows");
    tb.innerHTML =
      getTasks()
        .map(
          (x) =>
            `<tr><td><b>${esc(x.title)}</b><div class="rmeta">${esc(x.type)}</div></td><td>${esc(client(x.clientId)?.name || "")}</td><td>${esc(x.owner)}</td><td>${fmt(x.due)}</td><td>${status(x.priority)}</td><td>${status(x.status)}</td><td>${x.status === "Completed" ? "—" : `<button class="ghost" onclick="doneTask('${x.id}')">${t("completeStep")}</button>`}</td></tr>`,
        )
        .join("") ||
      `<tr><td colspan="7"><div class="empty">${t("noData")}</div></td></tr>`;
  };
}
function doneTask(id) {
  const x = state.tasks.find((t) => t.id === id);
  x.status = "Completed";
  log("Completed", id, x.title);
  save();
  render();
  toast(t("complete"));
}
function deadlineRows() {
  const ds = state.deadlines
    .filter((x) =>
      matches(searches.deadlines, x.title, x.type, client(x.clientId)?.name),
    )
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    ds
      .map(
        (x) =>
          `<div class="row"><div class="maintext"><div class="rtitle">${esc(x.title)}</div><div class="rmeta">${esc(client(x.clientId)?.name || "")} · ${esc(x.type)}</div></div><span class="chip w">${fmt(x.date)}</span></div>`,
      )
      .join("") || `<div class="empty">${t("noData")}</div>`
  );
}
function updateDeadlineRows() {
  const body = document.getElementById("deadlineRows");
  if (body) body.innerHTML = deadlineRows();
}
function renderDeadlines() {
  document.getElementById("v-deadlines").innerHTML =
    head(
      "deadlines",
      t("deadlines"),
      t("deadlinesSub"),
      `<button class="primary" onclick="deadlineModal()">＋ ${t("newItem")}</button>`,
    ) +
    `<div class="toolbar"><input class="field search" id="deadSearch" value="${esc(searches.deadlines)}" placeholder="${t("filter")}" autocomplete="off"></div><div class="grid2"><section class="card"><div class="cardhead"><div class="cardtitle">${t("deadlines")}</div></div><div class="body"><div class="list" id="deadlineRows">${deadlineRows()}</div></div></section><section class="card"><div class="cardhead"><div class="cardtitle">Modèle de suivi</div></div><div class="body"><div class="notice">${t("simulation")}: les dates affichées sont des données de démonstration. Les dates légales réelles doivent être paramétrées à partir des sources officielles.</div></div></section></div>`;
  const s = document.getElementById("deadSearch");
  if (s) {
    s.oninput = (e) => {
      searches.deadlines = e.target.value;
      updateDeadlineRows();
    };
    s.onkeydown = (e) => e.stopPropagation();
  }
}
function activityRows() {
  const rows = state.activity.filter((x) =>
    matches(searches.activity, x.action, x.entity, x.msg),
  );
  return (
    rows
      .map(
        (x) =>
          `<tr><td>${fmt(x.date)}</td><td>${esc(x.action)}</td><td>${esc(x.entity)}</td><td>${esc(x.msg)}</td></tr>`,
      )
      .join("") ||
    `<tr><td colspan="4"><div class="empty">${t("noData")}</div></td></tr>`
  );
}
function updateActivityRows() {
  const body = document.getElementById("activityRows");
  if (body) body.innerHTML = activityRows();
}
function renderActivity() {
  document.getElementById("v-activity").innerHTML =
    head("activity", t("activity"), t("activitySub")) +
    `<div class="toolbar"><input class="field search" id="actSearch" value="${esc(searches.activity)}" placeholder="${t("filter")}"></div><section class="card"><div class="tablewrap"><table class="table"><thead><tr><th>Date</th><th>Action</th><th>Entité</th><th>Détail</th></tr></thead><tbody id="activityRows">${activityRows()}</tbody></table></div></section>`;
  const s = document.getElementById("actSearch");
  if (s)
    s.oninput = (e) => {
      searches.activity = e.target.value;
      updateActivityRows();
    };
}
function quick() {
  modal(
    t("newItem"),
    `<div class="grid2"><button class="ghost" onclick="closeM();clientModal()">＋ ${t("addClient")}</button><button class="ghost" onclick="closeM();go('dossier')">＋ ${t("register")}</button><button class="ghost" onclick="closeM();taskModal()">＋ ${t("tasks")}</button><button class="ghost" onclick="closeM();deadlineModal()">＋ ${t("deadlines")}</button></div>`,
  );
}
function modal(title, body, foot = "") {
  document.getElementById("modal").innerHTML =
    `<div class="modalhead"><b>${title}</b><button class="close" onclick="closeM()">×</button></div><div class="modalbody">${body}</div>${foot ? `<div class="modalfoot">${foot}</div>` : ""}`;
  document.getElementById("back").classList.add("open");
}
function closeM() {
  document.getElementById("back").classList.remove("open");
}
function clientModal() {
  modal(
    t("addClient"),
    `<div class="formgrid"><div class="formitem"><label>Nom</label><input id="nm"></div><div class="formitem"><label>Forme</label><input id="lg" value="SARL"></div><div class="formitem"><label>Ville</label><input id="ct" value="Fès"></div><div class="formitem"><label>${t("owner")}</label><input id="ow" value="Zineb"></div><div class="formitem"><label>ICE</label><input id="ice"></div><div class="formitem"><label>IF</label><input id="if"></div><div class="formitem"><label>RC</label><input id="rc"></div><div class="formitem"><label>${t("service")}</label><input id="sv" value="Comptabilité, TVA"></div></div>`,
    `<button class="ghost" onclick="closeM()">${t("cancel")}</button><button class="primary" onclick="saveClient()">${t("save")}</button>`,
  );
}
function saveClient() {
  const x = {
    id: uid("CLI"),
    name: document.getElementById("nm").value.trim(),
    legal: document.getElementById("lg").value,
    city: document.getElementById("ct").value,
    ice: document.getElementById("ice").value || "—",
    if: document.getElementById("if").value || "—",
    rc: document.getElementById("rc").value || "—",
    owner: document.getElementById("ow").value || "Zineb",
    status: "Needs attention",
    services: document
      .getElementById("sv")
      .value.split(",")
      .map((x) => x.trim())
      .filter(Boolean),
    created: new Date().toISOString(),
  };
  if (!x.name) return toast("Nom requis");
  state.clients.push(x);
  save();
  log("Created", x.id, x.name);
  closeM();
  render();
  toast("Client créé");
}
function docModal(cid) {
  modal(
    t("register"),
    `<div class="formgrid"><div class="formitem"><label>${t("document")}</label><input id="dn" placeholder="Facture_001.pdf"></div><div class="formitem"><label>${t("type")}</label><select id="dt"><option value="Purchase">${t("purchase")}</option><option value="Sales">${t("sales")}</option><option value="Cash">${t("cash")}</option><option value="Bank">${t("bank")}</option><option value="Legal">${t("legal")}</option></select></div><div class="formitem"><label>${t("period")}</label><input id="dp" value="2026-09"></div></div>`,
    `<button class="ghost" onclick="closeM()">${t("cancel")}</button><button class="primary" onclick="saveDoc('${cid}')">${t("save")}</button>`,
  );
}
function saveDoc(cid) {
  const x = {
    id: uid("DOC"),
    clientId: cid,
    period: document.getElementById("dp").value,
    type: document.getElementById("dt").value,
    name: document.getElementById("dn").value.trim(),
    status: "Review",
    missing: false,
  };
  if (!x.name) return toast("Nom requis");
  state.documents.push(x);
  if (!state.journals[cid])
    state.journals[cid] = { Purchase: [], Sales: [], Cash: [], Bank: [] };
  if (x.type !== "Legal" && !state.journals[cid][x.type].includes(x.name))
    state.journals[cid][x.type].push(x.name);
  save();
  log("Registered", x.id, x.name);
  closeM();
  render();
  toast("Document enregistré");
}
function toggleDoc(id) {
  const x = state.documents.find((d) => d.id === id);
  x.missing = !x.missing;
  x.status = x.missing ? "Missing" : "Review";
  save();
  log(x.missing ? "Flagged" : "Received", x.id, x.name);
  render();
  toast(x.missing ? t("missingDoc") : t("received"));
}
function taskModal() {
  modal(
    t("tasks"),
    `<div class="formgrid"><div class="formitem full"><label>Titre</label><input id="tt"></div><div class="formitem"><label>${t("clients")}</label><select id="tc">${state.clients.map((x) => `<option value="${x.id}">${esc(x.name)}</option>`).join("")}</select></div><div class="formitem"><label>${t("owner")}</label><select id="to"><option>Zineb</option><option>Nadia</option></select></div><div class="formitem"><label>${t("deadlines")}</label><input type="date" id="td"></div><div class="formitem"><label>${t("high")}</label><select id="tp"><option>Medium</option><option>High</option><option>Low</option></select></div></div>`,
    `<button class="ghost" onclick="closeM()">${t("cancel")}</button><button class="primary" onclick="saveTask()">${t("save")}</button>`,
  );
}
function saveTask() {
  const x = {
    id: uid("TSK"),
    clientId: document.getElementById("tc").value,
    title: document.getElementById("tt").value,
    type: "Review",
    owner: document.getElementById("to").value,
    due:
      document.getElementById("td").value ||
      new Date().toISOString().slice(0, 10),
    priority: document.getElementById("tp").value,
    status: "To review",
  };
  if (!x.title) return toast("Titre requis");
  state.tasks.push(x);
  save();
  log("Created", x.id, x.title);
  closeM();
  render();
  toast("Tâche créée");
}
function deadlineModal() {
  modal(
    t("deadlines"),
    `<div class="formgrid"><div class="formitem full"><label>Titre</label><input id="lt"></div><div class="formitem"><label>${t("clients")}</label><select id="lc">${state.clients.map((x) => `<option value="${x.id}">${esc(x.name)}</option>`).join("")}</select></div><div class="formitem"><label>Date</label><input type="date" id="ld"></div></div>`,
    `<button class="ghost" onclick="closeM()">${t("cancel")}</button><button class="primary" onclick="saveDeadline()">${t("save")}</button>`,
  );
}
function saveDeadline() {
  const x = {
    id: uid("DL"),
    clientId: document.getElementById("lc").value,
    title: document.getElementById("lt").value,
    type: "Accounting",
    date:
      document.getElementById("ld").value ||
      new Date().toISOString().slice(0, 10),
  };
  if (!x.title) return toast("Titre requis");
  state.deadlines.push(x);
  save();
  log("Created", x.id, x.title);
  closeM();
  render();
  toast("Échéance ajoutée");
}
function globalSearch(q) {
  globalQ = q;
  if (q.trim().length < 2) return;
  const c = state.clients.find((x) =>
    matches(q, x.name, x.id, x.city, x.owner, x.ice),
  );
  if (c) {
    state.currentClient = c.id;
    go("dossier");
    toast(t("foundClient"));
    return;
  }
  const d = state.documents.find((x) =>
    matches(q, x.name, x.id, x.period, x.type, client(x.clientId)?.name),
  );
  if (d) {
    state.currentClient = d.clientId;
    searches.dossier = q;
    go("dossier");
    toast(t("foundDoc"));
    return;
  }
  const task = state.tasks.find((x) =>
    matches(q, x.title, x.id, x.type, x.owner, client(x.clientId)?.name),
  );
  if (task) {
    go("tasks");
    searches.tasks = q;
    toast(t("foundTask"));
    return;
  }
}

document.getElementById("nav").onclick = (e) => {
  const b = e.target.closest("button");
  if (b) go(b.dataset.view);
};
document.getElementById("globalSearch").oninput = (e) =>
  globalSearch(e.target.value);
document.getElementById("globalSearch").onkeydown = (e) => {
  if (e.key === "Enter") globalSearch(e.target.value);
};
document.getElementById("quick").onclick = quick;
document.getElementById("fr").onclick = () => {
  state.settings.lang = "fr";
  save();
  render();
};
document.getElementById("en").onclick = () => {
  state.settings.lang = "en";
  save();
  render();
};
document.getElementById("theme").onclick = () => {
  state.settings.dark = !state.settings.dark;
  save();
  render();
};
document.getElementById("exportBtn").onclick = () => {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }),
  );
  a.download = "m2a-workspace.json";
  a.click();
};
document.getElementById("importInput").onchange = (e) => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      state = JSON.parse(r.result);
      save();
      render();
      toast("Import OK");
    } catch {
      toast("JSON invalide");
    }
  };
  r.readAsText(f);
};
document.getElementById("resetBtn").onclick = () => {
  if (confirm(t("resetConfirm"))) {
    state = JSON.parse(JSON.stringify(seed));
    save();
    render();
  }
};
document.getElementById("back").onclick = (e) => {
  if (e.target.id === "back") closeM();
};
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeM();
});
render();
