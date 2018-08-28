
//es6
import {firstName, lastName, year} from './profile';
console.log(firstName + ' ' + lastName + ' was born at ' + year + '.');


//commonjs
var hello = require('./hello.js');
console.log(hello);

//amd
require(['amd'], function (amd){
    alert(amd.hello());
});