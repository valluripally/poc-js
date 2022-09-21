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

var item=[1,2,3,4,5].map(function(n){
    return n*2;
              })
log(item)

log("filter")

var flter=[1,2,3,4,5].filter(function(n){
    return n%2==0;
              })
              log(flter);


var reduce=[1,2,3,4,5].reduce(function(accumulator,currentValue){
                return accumulator+currentValue;
                          })
                          log("reduce");
                          log(reduce);


var testItem=[1,2,3,4,5].map(function(n){
                            log(n*2)
                                      })
                        log(testItem) 
                        //-- it return empty  ,,,,
                    //    call back example

function outerFunction(name,callback)    {
    log(callback(name))
}   

var callback= function  (name){
    return "hello" +name;


}
outerFunction("sai",callback);

//  logs hello sai
