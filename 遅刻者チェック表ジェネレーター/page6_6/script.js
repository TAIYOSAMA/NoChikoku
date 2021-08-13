let class_number=1
const max=9
for (let row=1; row<=3; row++) {
  var textbox_element = document.getElementById('select_menu');
  var new_element = document.createElement('div');
  new_element.className = 'row';
  new_element.setAttribute('id','row'+String(row));
  textbox_element.appendChild(new_element)
  for (let column=1; column<=3; column++) {
    if (class_number>max) {
      break;
    };
    var textbox_element = document.getElementById('row'+String(row));
    var new_element = document.createElement('a');
    new_element.textContent = String(class_number);
    new_element.className = 'btn';
    new_element.setAttribute('id',class_number);
    new_element.onclick = function() {
      const url = new URL(window.location.href);
      const params = url.searchParams;
      const grade = params.get('grade');
      const year = params.get('year')
      const month = params.get('month');
      const holiday = params.get('holiday');
      let class_number = params.get('class_number');
      class_number+=','+String(this.id)
      console.log(class_number);
      window.location = '../page7/index.html?grade='+grade+'&year='+year+'&month='+month+'&holiday='+holiday+'&class_number='+class_number;
    };
    textbox_element.appendChild(new_element);
    class_number++;
  };
};
