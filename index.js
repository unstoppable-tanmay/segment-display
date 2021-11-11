function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

var on = 1;

async function prin()
{
    if(document.getElementById("text").value == temp){
        on=0;
    }
    else if(size<=6 && document.getElementById("text").value != temp){
        on=1;
        prin();
        return;
    }
    if(on==1){
        on=0;
        var text = document.getElementById("text").value;
        var temp = text;
        var size = text.length;
        // console.log(size);
        if(size>6){
            while(text != null){
                for(var i=0; i<=size-6; i++){
                    if(document.getElementById("text").value != temp){
                        on=1;
                        prin();
                        return;
                    }
                    // console.log(click);
                    // if(click==1){
                    //     clear(1);clear(2);clear(3);clear(4);clear(5);clear(6);
                    //     on=1;
                    //     time();
                    //     return;
                    // }
                    write(text[i],1);
                    write(text[i+1],2);
                    write(text[i+2],3);
                    write(text[i+3],4);
                    write(text[i+4],5);
                    write(text[i+5],6);
                    await sleep(500);
                    if(i==size-6){
                        clear(1);clear(2);clear(3);clear(4);clear(5);clear(6);
                        await sleep(500);
                    }
                }
            }
        }
        else{
            if(size==6){
                write(text[0],1);
                write(text[1],2);
                write(text[2],3);
                write(text[3],4);
                write(text[4],5);
                write(text[5],6); 
            }
            if(size==5){
                write(text[0],1);
                write(text[1],2);
                write(text[2],3);
                write(text[3],4);
                write(text[4],5);
                write(' ',6); 
            }
            if(size==4){
                write(text[0],1);
                write(text[1],2);
                write(text[2],3);
                write(text[3],4);
                write(' ',5); 
                write(' ',6); 
            }
            if(size==3){
                write(text[0],1);
                write(text[1],2);
                write(text[2],3);
                write(' ',4); 
                write(' ',5); 
                write(' ',6); 
            }
            if(size==2){
                write(text[0],1);
                write(text[1],2);
                write(' ',3); 
                write(' ',4); 
                write(' ',5); 
                write(' ',6);  
            }
            if(size==1){
                write(text[0],1);
                write(' ',2); 
                write(' ',3); 
                write(' ',4); 
                write(' ',5); 
                write(' ',6); 
            }
            if(size==0){
                write(' ',1);
                write(' ',2); 
                write(' ',3); 
                write(' ',4); 
                write(' ',5); 
                write(' ',6);
            }
        }
    }
}
// var click = 0;
on=1;
async function time(){
    // click=1;
    if(on==0){
        location.reload();
    }
    if(on==1){
        on=0;
        dot();
        for(var i=0; i<Infinity; i++){
            clear(1);clear(2);clear(3);clear(4);clear(5);clear(6);
            var time = new Date().toLocaleTimeString(); 
            if(time.length==10){
                var hour = "0"+time[0];
                var min = time[2]+time[3];
                var sec = time[5]+time[6];
            }
            else{ 
                var hour = time[0]+time[1];
                var min = time[3]+time[4];
                var sec = time[6]+time[7];
            }
            write(hour[0],1);
            write(hour[1],2);
            write(min[0],3);
            write(min[1],4);
            write(sec[0],5);
            write(sec[1],6);
            await sleep(1000);
        }
    }
    else{
        return;
    }
}

async function dot(){
    for(var i=0; i<Infinity; i++){
        document.getElementById("dot1").style.backgroundColor="black";
        document.getElementById("dot2").style.backgroundColor="black";
        document.getElementById("dot3").style.backgroundColor="black";
        document.getElementById("dot4").style.backgroundColor="black";
        await sleep(500);
        document.getElementById("dot1").style.backgroundColor="red";
        document.getElementById("dot2").style.backgroundColor="red";
        document.getElementById("dot3").style.backgroundColor="red";
        document.getElementById("dot4").style.backgroundColor="red";
        await sleep(500);
    }
}

function write(text,i)
{
    if(text == '0')
    {
        clear(i);
        zero(i);
    }
    if(text == '1')
    {
        clear(i);
        one(i);
    }
    if(text == '2')
    {
        clear(i);
        two(i);
    }
    if(text == '3')
    {
        clear(i);
        three(i);
    }
    if(text == '4')
    {
        clear(i);
        four(i);
    }
    if(text == '5')
    {
        clear(i);
        five(i);
    }
    if(text == '6')
    {
        clear(i);
        six(i);
    }
    if(text == '7')
    {
        clear(i);
        seven(i);
    }
    if(text == '8')
    {
        clear(i);
        eight(i);
    }
    if(text == '9')
    {
        clear(i);
        nine(i);
    }
    if(text == 'a')
    {
        clear(i);
        a(i);
    }
    if(text == 'b')
    {
        clear(i);
        b(i);
    }
    if(text == 'c')
    {
        clear(i);
        c(i);
    }
    if(text == 'd')
    {
        clear(i);
        d(i);
    }
    if(text == 'e')
    {
        clear(i);
        e(i);
    }
    if(text == 'f')
    {
        clear(i);
        f(i);
    }
    if(text == 'g')
    {
        clear(i);
        g(i);
    }
    if(text == 'h')
    {
        clear(i);
        h(i);
    }
    if(text == 'i')
    {
        clear(i);
        ii(i);
    }
    if(text == 'j')
    {
        clear(i);
        j(i);
    }
    if(text == 'k')
    {
        clear(i);
        k(i);
    }
    if(text == 'l')
    {
        clear(i);
        l(i);
    }
    if(text == 'm')
    {
        clear(i);
        m(i);
    }
    if(text == 'n')
    {
        clear(i);
        n(i);
    }
    if(text == 'o')
    {
        clear(i);
        o(i);
    }
    if(text == 'p')
    {
        clear(i);
        p(i);
    }
    if(text == 'q')
    {
        clear(i);
        q(i);
    }
    if(text == 'r')
    {
        clear(i);
        r(i);
    }
    if(text == 's')
    {
        clear(i);
        s(i);
    }
    if(text == 't')
    {
        clear(i);
        t(i);
    }
    if(text == 'u')
    {
        clear(i);
        u(i);
    }
    if(text == 'v')
    {
        clear(i);
        v(i);
    }
    if(text == 'w')
    {
        clear(i);
        w(i);
    }
    if(text == 'x')
    {
        clear(i);
        x(i);
    }
    if(text == 'y')
    {
        clear(i);
        y(i);
    }
    if(text == 'z')
    {
        clear(i);
        z(i);
    }
    if(text == ' ')
    {
        clear(i);
    }
    if(text == '_')
    {
        clear(i);
        underscore(i);
    }
    if(text == '+')
    {
        clear(i);
        plus(i);
    }
    if(text == '-')
    {
        clear(i);
        minus(i);
    }
    if(text == '\'')
    {
        clear(i);
        apostopy(i);
    }
    if(text == ',')
    {
        clear(i);
        comma(i);
    }
    if(text == '|')
    {
        clear(i);
        stick(i);
    }
    if(text == '/')
    {
        clear(i);
        slash(i);
    }
    if(text == '=')
    {
        clear(i);
        equal(i);
    }
    if(text == '!')
    {
        clear(i);
        start(i);
    }
}


// function A()
// {
//     document.documentElement.style.setProperty('--A','red');
// }
// function B()
// {
//     document.documentElement.style.setProperty('--B','red');
// }
// function C()
// {
//     document.documentElement.style.setProperty('--C','red');
// }
// function D()
// {
//     document.documentElement.style.setProperty('--D','red');
// }
// function E()
// {
//     document.documentElement.style.setProperty('--E','red');
// }
// function F()
// {
//     document.documentElement.style.setProperty('--F','red');
// }
// function G1()
// {
//     document.documentElement.style.setProperty('--G1','red');
// }
// function G2()
// {
//     document.documentElement.style.setProperty('--G2','red');
// }
// function J()
// {
//     document.documentElement.style.setProperty('--J','red');
// }
// function H()
// {
//     document.documentElement.style.setProperty('--H','red');
// }
// function K()
// {
//     document.documentElement.style.setProperty('--K','red');
// }
// function L()
// {
//     document.documentElement.style.setProperty('--L','red');
// }
// function I()
// {
//     document.documentElement.style.setProperty('--I','red');
// }
// function M()
// {
//     document.documentElement.style.setProperty('--M','red');
// }



function A(i)
{
    var col = "--A"+i;
    document.documentElement.style.setProperty(col,'red');
}
function B(i)
{
    var col = "--B"+i;
    document.documentElement.style.setProperty(col,'red');
}
function C(i)
{
    var col = "--C"+i;
    document.documentElement.style.setProperty(col,'red');
}
function D(i)
{
    var col = "--D"+i;
    document.documentElement.style.setProperty(col,'red');
}
function E(i)
{
    var col = "--E"+i;
    document.documentElement.style.setProperty(col,'red');
}
function F(i)
{
    var col = "--F"+i;
    document.documentElement.style.setProperty(col,'red');
}
function G1(i)
{
    var col = "--G1"+i;
    document.documentElement.style.setProperty(col,'red');
}
function G2(i)
{
    var col = "--G2"+i;
    document.documentElement.style.setProperty(col,'red');
}
function J(i)
{
    var col = "--J"+i;
    document.documentElement.style.setProperty(col,'red');
}
function H(i)
{
    var col = "--H"+i;
    document.documentElement.style.setProperty(col,'red');
}
function K(i)
{
    var col = "--K"+i;
    document.documentElement.style.setProperty(col,'red');
}
function L(i)
{
    var col = "--L"+i;
    document.documentElement.style.setProperty(col,'red');
}
function I(i)
{
    var col = "--I"+i;
    document.documentElement.style.setProperty(col,'red');
}
function M(i)
{
    var col = "--M"+i;
    document.documentElement.style.setProperty(col,'red');
}
// A! start


function A0(i)
{
    var col = "--A"+i;
    document.documentElement.style.setProperty(col,'black');
}
function B0(i)
{
    var col = "--B"+i;
    document.documentElement.style.setProperty(col,'black');
}
function C0(i)
{
    var col = "--C"+i;
    document.documentElement.style.setProperty(col,'black');
}
function D0(i)
{
    var col = "--D"+i;
    document.documentElement.style.setProperty(col,'black');
}
function E0(i)
{
    var col = "--E"+i;
    document.documentElement.style.setProperty(col,'black');
}
function F0(i)
{
    var col = "--F"+i;
    document.documentElement.style.setProperty(col,'black');
}
function G10(i)
{
    var col = "--G1"+i;
    document.documentElement.style.setProperty(col,'black');
}
function G20(i)
{
    var col = "--G2"+i;
    document.documentElement.style.setProperty(col,'black');
}
function J0(i)
{
    var col = "--J"+i;
    document.documentElement.style.setProperty(col,'black');
}
function H0(i)
{
    var col = "--H"+i;
    document.documentElement.style.setProperty(col,'black');
}
function K0(i)
{
    var col = "--K"+i;
    document.documentElement.style.setProperty(col,'black');
}
function L0(i)
{
    var col = "--L"+i;
    document.documentElement.style.setProperty(col,'black');
}
function I0(i)
{
    var col = "--I"+i;
    document.documentElement.style.setProperty(col,'black');
}
function M0(i)
{
    var col = "--M"+i;
    document.documentElement.style.setProperty(col,'black');
}

function clear(i)
{
    A0(i);
    B0(i);
    C0(i);
    D0(i);
    E0(i);
    F0(i); 
    G10(i);
    G20(i);
    J0(i);
    H0(i);
    K0(i);
    L0(i);
    I0(i);
    M0(i); 
    
}
function zero(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    E(i);
    F(i);  
}
function one(i)
{
    B(i);
    C(i);
    K(i);
}
function two(i)
{
    A(i);
    B(i);
    G1(i);
    G2(i);
    D(i);
    E(i);  
}
function three(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    G2(i); 
}
function four(i)
{
    F(i);
    G1(i);
    G2(i);
    B(i);
    C(i);
}
function five(i)
{
    A(i);
    F(i);
    G1(i);
    G2(i);
    C(i);
    D(i);  
}
function six(i)
{
    A(i);
    C(i);
    G1(i);
    G2(i);
    D(i);
    E(i);
    F(i);  
}
function seven(i)
{
    A(i);
    K(i);
    H(i); 
}
function eight(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    E(i);
    F(i);  
    G1(i);
    G2(i);  
}
function nine(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    F(i);  
    G1(i);
    G2(i); 
}
function a(i)
{
    A(i);
    B(i);
    C(i);
    E(i);
    F(i);  
    G1(i);
    G2(i); 
}
function b(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    H(i);  
    I(i);
    G2(i); 
}
function c(i)
{
    A(i);
    F(i);
    E(i);
    D(i);
}
function d(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    H(i);  
    I(i);
}
function e(i)
{
    A(i);
    F(i);
    E(i);
    D(i);
    G1(i); 
}
function f(i)
{
    A(i);
    F(i);
    E(i);
    G1(i);
    G2(i);
}
function g(i)
{
    A(i);
    F(i);
    E(i);
    D(i);
    C(i);  
    G2(i);
}
function h(i)
{
    F(i);
    E(i);
    B(i);
    C(i);
    G1(i);  
    G2(i);
}
function ii(i)
{
    A(i);
    D(i);
    H(i);  
    I(i);
}
function j(i)
{
    B(i);
    C(i);
    D(i);
    E(i);
}
function k(i)
{
    F(i);
    E(i);
    G1(i);
    K(i);  
    L(i);
}
function l(i)
{
    F(i);
    E(i);
    D(i);
}
function m(i)
{
    F(i);
    B(i);
    C(i);
    E(i);
    J(i);  
    K(i);
}
function n(i)
{
    F(i);
    B(i);
    C(i);
    E(i);
    J(i);  
    L(i);
}
function o(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    E(i);  
    F(i);
}
function p(i)
{
    A(i);
    B(i);
    F(i);
    E(i);
    G1(i);  
    G2(i);
}
function q(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    E(i);  
    F(i);
    L(i);
}
function r(i)
{
    A(i);
    B(i);
    F(i);
    E(i);
    G1(i);  
    G2(i);
    L(i);
}
function s(i)
{
    A(i);
    J(i);
    G2(i);
    C(i);
    D(i);  
}
function t(i)
{
    A(i);
    H(i);
    I(i);
}
function u(i)
{
    C(i);
    B(i);
    F(i);
    E(i);
    D(i);
}
function v(i)
{
    M(i);
    K(i);
    F(i);
    E(i);
}
function w(i)
{
    C(i);
    B(i);
    F(i);
    E(i);
    L(i);
    M(i);
}
function x(i)
{
    J(i);
    K(i);
    L(i);
    M(i);
}
function y(i)
{
    J(i);
    K(i);
    H(i);
}
function z(i)
{
    A(i);
    K(i);
    M(i);
    D(i);
}
function underscore(i)
{
    D(i);
}
function plus(i)
{
    H(i);
    I (i);
    G2(i);
    G1(i);
}
function minus(i)
{
    G2(i);
    G1(i);
}
function apostopy(i)
{
    K(i);
}
function comma(i)
{
    M(i);
}
function stick(i)
{
    H(i);
    I(i);
}
function slash(i)
{
    K(i);
    M(i);
}
function equal(i)
{
    G1(i);
    G2(i);
    D(i);
}
function start(i)
{
    A(i);
    B(i);
    C(i);
    D(i);
    F(i);
    E(i);
    L(i);
    M(i);
    G1(i);
    G2(i);
    J(i);
    K(i);
    I(i);
    H(i);
}

// const delay = milliseconds => new Promise(resolve => { setTimeout(resolve,milliseconds);});

function number()
{
    zero();
    setTimeout(() => { clear();one();},1000);
    setTimeout(() => { clear();two();},2000);
    setTimeout(() => { clear();three();},3000);
    setTimeout(() => { clear();four();},4000);
    setTimeout(() => { clear();five();},5000);
    setTimeout(() => { clear();six();},6000);
    setTimeout(() => { clear();seven();},7000);
    setTimeout(() => { clear();eight();},8000);
    setTimeout(() => { clear();nine();},9000);
}