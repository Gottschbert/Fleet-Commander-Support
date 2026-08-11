const state={lang:localStorage.getItem("fc-public-changelog-lang")||"de"};
const labels={
  de:{loading:"Changelog wird geladen …",loaded:"Release-Historie",failed:"Changelog konnte nicht geladen werden.",updated:"Aktualisiert",categories:{added:"Neu",improved:"Verbessert",fixed:"Behoben",technical:"Technik"}},
  en:{loading:"Loading changelog …",loaded:"Release history",failed:"Changelog could not be loaded.",updated:"Updated",categories:{added:"Added",improved:"Improved",fixed:"Fixed",technical:"Technical"}}
};
let database=null;
function esc(value=""){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]));}
function render(){
  document.documentElement.lang=state.lang;
  document.getElementById("lang-de").classList.toggle("active",state.lang==="de");
  document.getElementById("lang-en").classList.toggle("active",state.lang==="en");
  const status=document.getElementById("status-text");
  const updated=document.getElementById("updated-at");
  const container=document.getElementById("changelog");
  if(!database){status.textContent=labels[state.lang].loading;container.innerHTML="";return;}
  status.textContent=labels[state.lang].loaded;
  updated.textContent=database.updatedAt?`${labels[state.lang].updated}: ${new Date(database.updatedAt).toLocaleString(state.lang==="de"?"de-DE":"en-US")}`:"";
  const entries=Array.isArray(database.entries)?database.entries:[];
  if(!entries.length){container.innerHTML='<div class="empty">—</div>';return;}
  container.innerHTML=entries.map(entry=>{
    const lang=state.lang;
    const title=entry?.title?.[lang]||entry?.title?.en||entry.version||"";
    const changes=Array.isArray(entry?.changes?.[lang])?entry.changes[lang]:(entry?.changes?.en||[]);
    const category=["added","improved","fixed","technical"].includes(entry.category)?entry.category:"technical";
    return `<article class="release ${category}">
      <div class="meta"><div class="version">${esc(entry.version||"—")}</div><div class="date">${esc(entry.date||"")}</div><div class="category">${esc(labels[lang].categories[category])}</div></div>
      <div><h2>${esc(title)}</h2><ul>${changes.map(change=>`<li>${esc(change)}</li>`).join("")}</ul></div>
    </article>`;
  }).join("");
}
async function load(){
  try{
    const response=await fetch("./changelog.json",{cache:"no-store"});
    if(!response.ok)throw new Error(`HTTP ${response.status}`);
    database=await response.json();
    render();
  }catch(error){
    console.error(error);
    document.getElementById("status-text").textContent=labels[state.lang].failed;
  }
}
document.getElementById("lang-de").addEventListener("click",()=>{state.lang="de";localStorage.setItem("fc-public-changelog-lang",state.lang);render();});
document.getElementById("lang-en").addEventListener("click",()=>{state.lang="en";localStorage.setItem("fc-public-changelog-lang",state.lang);render();});
render();load();
