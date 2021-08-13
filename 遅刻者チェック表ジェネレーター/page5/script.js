const days = function(year, month) {
	return new Date(parseInt(year, 10), parseInt(month, 10), 0).getDate();
};

const url = new URL(window.location.href);
const params = url.searchParams;
const grade = params.get('grade');
const year = params.get('year');
const month = params.get('month');

max_day = days(year,month);

var d = new Date(year,month-1,1);
const start_day = d.getDay();
console.log(start_day);

let holiday = [];
for (let i=0; i<=max_day; i++) {
  var d = new Date(year,month-1,i);
  if (d.getDay()==0 || d.getDay()==6) {
    holiday.push(i);
  };
};

let click_log = [];
let log=0;
for (let i=1; i<=max_day; i++) {
  log=0;
  for (let j=0; j<=holiday.length; j++) {
    if (i==holiday[j]) {
      log=1;
    };
  };
  click_log.push(log);
};
console.log(click_log);

const max_row = Math.floor((start_day+max_day)/7+1);
let day = 1;
for (let row=1; row<=max_row; row++) {
  var textbox_element = document.getElementById('select_menu');
  var new_element = document.createElement('div');
  new_element.className = 'row';
  if (row==max_row) {
    new_element.className = 'row_end';
  };
  new_element.setAttribute('id','row'+String(row));
  textbox_element.appendChild(new_element);
  for (let column=1; column<=7; column++) {
    if (day>max_day) {
      break;
    };
    if (row==1 && column<=start_day) {
      var textbox_element = document.getElementById('row'+String(row));
      var new_element = document.createElement('a');
      textbox_element.appendChild(new_element);
      continue;
    }
    var textbox_element = document.getElementById('row'+String(row));
    var new_element = document.createElement('a');
    new_element.textContent = String(day)+'日';
    new_element.className = 'btn';
    new_element.setAttribute('id',day);
    new_element.onclick = function() {
      if (click_log[parseInt(this.id)-1]==1) {
        document.getElementById(this.id).className = 'btn';
        click_log[parseInt(this.id)-1] = 0;
      } else {
        document.getElementById(this.id).className = 'btn2';
        click_log[parseInt(this.id)-1] = 1;
      };
      holiday = [];
      for (let i=0; i<max_day; i++) {
        if (click_log[i]==0){
          continue;
        }
        holiday.push(i+1)
      };
      console.log(holiday);
    };
    if (click_log[day-1] == 1) {
      new_element.className = 'btn2';
    };
    textbox_element.appendChild(new_element);
    day++;
  };
};

const GoToPage6_1 = function() {
  window.location = '../page6_1/index.html?grade='+grade+'&year='+year+'&month='+month+'&holiday='+holiday;
};
