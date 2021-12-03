export function clearPage () {
  for (let i=0; i<window.sessionStorage.length; i++)  {
    window.sessionStorage.removeItem(window.sessionStorage.key(i));
  };
};

export function clearTable () {
  while (window.sessionStorage.length > 0) {
    clearPage();
  };
  window.location.reload();
};

export function refillTable () {
// Temporary rows filling

  clearTable();
  
  window.sessionStorage.setItem('Alexander', 41);
  window.sessionStorage.setItem('Alexey', 7);
  window.sessionStorage.setItem('Anna', 39);
  window.sessionStorage.setItem('Misha', 10);
  window.sessionStorage.setItem('Dmitriy', 47);
  window.sessionStorage.setItem('Jason', 22);
  window.sessionStorage.setItem('Piter', 21);
  window.sessionStorage.setItem('Bill', 60);
  window.sessionStorage.setItem('Robert', 30);
  window.sessionStorage.setItem('Muhamed', 33);
  window.sessionStorage.setItem('Jenifer', 29);
  window.sessionStorage.setItem('Alexander2', 40);
  window.sessionStorage.setItem('Anna2', 44);

  window.location.reload();
};