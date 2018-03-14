import './styles.css';
import { Character } from './character';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  let myPC = new Character("", 0, 0, 0, 0, 0, 0, 0, 0, "", "");
  myPC.setName("Zena");
  console.log(myPC.getName());
});
