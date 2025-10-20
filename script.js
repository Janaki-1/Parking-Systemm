// Basic interactivity - search and auth button placeholders.
document.getElementById('searchBtn').addEventListener('click', doSearch);
document.getElementById('searchInput').addEventListener('keydown', (e)=>{ if(e.key === 'Enter') doSearch() });

function doSearch(){
  const q = document.getElementById('searchInput').value.trim();
  if(!q){
    alert('Please enter a location to search.');
    return;
  }

  // Demonstration-only: show matching cards by simple text match (client-side)
  const lots = Array.from(document.querySelectorAll('.lot-card'));
  let found = false;
  lots.forEach(card=>{
    const title = card.querySelector('h3').textContent.toLowerCase();
    if(title.includes(q.toLowerCase())){
      card.style.display = 'flex';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  if(!found){
    alert('No results found for "'+q+'". Try a different location or view all.');
    // show all again
    setTimeout(()=> lots.forEach(c=>c.style.display = 'flex'), 800);
  }
}

// Simple login/signup placeholder actions
document.getElementById('loginBtn').addEventListener('click', ()=> alert('Login flow not implemented in this demo.'));
document.getElementById('signupBtn').addEventListener('click', ()=> alert('Signup flow not implemented in this demo.'));