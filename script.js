const countValue=document.querySelector('#counter');

const increment=() => {
let value= parseInt(countValue.innerText);
// instead of calling by countValue you can use direct the id name i.e 'counter' in this case
value=value+1;
counter.innerText=value;

};
const decrement= ()=> {

    let value= parseInt(countValue.innerText);
value=value-1;
counter.innerText=value;
};

const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', reset);

function reset() {
  value = 0;
  counter.innerText = value;
}


