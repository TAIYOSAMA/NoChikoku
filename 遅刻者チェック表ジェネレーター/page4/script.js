let month=1
const max=12
for (let row=1; row<=3; row++) {
  for (let column=1; column<=4; column++) {
    if (month>max) {
      break;
    };
    var textbox_element = document.getElementById('row'+String(row));
    var new_element = document.createElement('a');
    new_element.textContent = String(month)+'月';
    new_element.className = 'btn';
    new_element.setAttribute('id',month);
    new_element.onclick = function() {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      const grade = params.get('grade');
      const year = params.get('year')
      window.location = '../page5/index.html?grade='+grade+'&year='+year+'&month='+this.id;
    };
    textbox_element.appendChild(new_element);
    month++;
  };
};
