const d = new Date();
const year1 = d.getFullYear();
const year0 = year1-1;
const year2 = year1+1;

document.getElementById('year0').innerHTML = String(year0)+'年';
document.getElementById('year1').innerHTML = String(year1)+'年';
document.getElementById('year2').innerHTML = String(year2)+'年';

const url = new URL(window.location.href);
const params = url.searchParams;
const grade = params.get('grade');

const GoToPage4 = function(i) {
  const year = year0+i;
  window.location = '../page4/index.html?grade='+String(grade)+'&year='+String(year);
}
