/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */
log("Js course")
var name ="Saishree";

var x= 2+3;

var y = x+ 2;

var z = y;
log(z)
log(y=y+3);
log(y)
log(z);

function add(n1,n2){
    log(n1+n2);
    return n1+n2;

}

add(2,3);
add('2',3);
add(3,"5");
log(3+4+'2'+"5");


log(10=='10')