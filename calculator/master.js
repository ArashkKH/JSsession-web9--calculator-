let $x , $y , $sum , $string , temp
temp = 0
$x = 0
let _display = document.getElementsByClassName('display')[0] 


function num(self){
    temp = (temp*10)+Number(self.innerHTML)
    console.log(temp)
    _display.innerHTML=temp
}

function cleanall(){
    _display.innerHTML=(0)
    console.log(temp)
    temp = "0"
    $x = "0"
}

function opr(self){
    $x = temp
    temp = self.innerHTML
    $x = $x+temp
    _display.innerHTML=$x
    temp = 0
}

function oprequ(){
    console.log($x)
    $x = $x + temp
    temp = eval($x)
    console.log($x)
    _display.innerHTML=temp
}

function negpos(){
    temp = temp*(-1)
    _display.innerHTML=temp
}

function percent(){
    $x = temp
    _display.innerHTML=$x + "%"
    $x = $x+"/100*"
    temp = 0
}
