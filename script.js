//Q1 print pairs
function printPairs(arr, sum)
{
    var arrPair=[];
    var pair; 
    var n=arr.length;
    for (var i = 0; i < n; i++)
    {
      for ( var j = i + 1; j < n; j++)
      {
        if (arr[i] + arr[j] == sum)
       {    
            pair="(" + arr[i] + ", " + arr[j] + ")" ;
            arrPair.push(pair);
       }
      }
    }
  return arrPair;
}

    var arr = [ 1, 3, 5, 7, -1,3 ];
    var sum = 6;
    var arrPair=[];
    arrPair=printPairs(arr,sum);
    document.write("Q1  " ,arrPair + "<br>");

//Q2 reverse an array

var arr=[1,2,3,4,5,6,7];
var temp;
var index;
for(i=0;i<(arr.length)/2;i++)
{
     index=i+1;     
    temp=arr[arr.length-index];
    arr[arr.length-index]=arr[i];
    arr[i]=temp;
  }
    document.write("Q2   ", arr + "<br>"); 

//Q3 String Roatation
function checkRotation(str1,str2)
{
  var temp;
  var result;
  if(str1.length!=str2.length)
    result="Length of both Strings is not Same";
  else
  {
    temp=str1+str1;
    if(temp.includes(str2))
      result="Both Strings are Rotation Of each other";
    else
      result="Both Strings are not Rotation of each other";
  }
  return result;
}
 var str1="hello";
 var str2="llohe";
 var res;
  res=checkRotation(str1,str2);
  document.write("Q3  "  ,res,"<br>");






//Q4 find non reapeating char


function nonReapeatingChar(inputString)
{
  var testChar = ' ';
 
  for (var i=0; i <= inputString.length-1; i++) 
  {
    testChar = inputString.charAt(i);
    var count = 0; 
    for (var j=0; j <= inputString.length-1; j++) 
    {
        if (testChar == inputString.charAt(j))
             count++;
            
    }
  if(count===1)
  {
    return testChar;
    break;
  }  
 }
}
  
var char=nonReapeatingChar("hello");
if(char==undefined)
{
  document.write("Q4   There is no non Repeating Character in string  <br>");
}
else
document.write("Q4   Repeating Charcter is  ",char ,"<br>");


//Q5 tower of Hanoi

function towerOfHanoi(n, from_rod,  to_rod,  aux_rod)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
        document.write("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod+"<br/>");
        towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
    }
 
 
    var N = 2;
    document.write("Q5   <br>")
    towerOfHanoi(N, 'A', 'C', 'B');



//Q6 postfix to prefix
function isOperator(operator)
{
    switch (operator) {
        case '+':
        case '-':
        case '/':
        case '*':
          case '^':
          case '%':
            return true;
        }
        return false;
}
function postToPre(postFixExp)
{
        var stk = [];
        var length = postFixExp.length;
        for (var i = 0; i < length; i++) 
        {
  
           if (isOperator(postFixExp[i]))
           {
  
                var operand1 = stk[stk.length - 1];
                stk.pop();
                var operand2 = stk[stk.length - 1];
                stk.pop();
  
                var temp = postFixExp[i] + operand2 + operand1;
  
                
                stk.push(temp);
            }
  
           else {
  
                 stk.push(postFixExp[i] + "");
            }
        }
  
        var  result = "";
        while (stk.length > 0)
            result += stk.pop();
        return result;
    }
     
    var post_exp = "abc/-de/f-*";
    var result=postToPre(post_exp)
     document.write("Q6  PostFix To PreFix     " , result,"<br>");   

     
//Q7 prefix to infix

function isOperator(operator)
{
  switch(operator)
  {
      case '+':
      case '-':
      case '*':
      case '/':
      case '^':
      case '%':
      return true;
  }
       return false;
 }
 
 function preToInfix(preFixExp)
  {
        var stk = [];
        var length = preFixExp.length;
        for(var i = length-1; i >= 0; i--)
        {
            var char = preFixExp[i]; 
            if (isOperator(char))
            {
                var operand1 = stk[stk.length - 1];
                stk.pop()
                var operand2 = stk[stk.length - 1];
                stk.pop()
 
            var temp = "(" + operand1 + char + operand2 + ")";
                stk.push(temp);
            }
            else
            {
                stk.push(char + "");
            }
        }
        return stk[stk.length - 1];
    }
     
    var preExp = "*-a^bc-%def";
     var result=preToInfix(preExp);
    document.write("Q7  PreFix To InFix   ",result , "<br>");

//Q8
class Stack{
  constructor(){
    this.items = []
    this.size = 0
    this.push = function(val){
      this.items.push(val)
      this.size += 1
    }
    this.pop = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      this.size -= 1
      return this.items.pop()
    }
    this.peek = function(){
      if(this.size == 0){
        return "Stack is empty"
      }
      return this.items[this.size - 1]
    }
  }
}
 function bracketCheck(exp)
{
    var expStack = new Stack()
  for(var i=0;i<exp.length;i++)
  {
     var b = exp[i]
     if(b =='(' || b =='{' || b == '['){
      expStack.push(b)
      continue
    }
    if(expStack.size == 0){
      return false
    }
    var bracket = expStack.pop()
    switch(b){
      case ')' : 
        if(bracket == '[' || bracket == '{'){
          return false
        }
        break
      case '}' :
        if(bracket == '[' || bracket == '('){
          return false
        }
        break
      case ']' :
        if(bracket == '(' || bracket == '{'){
          return false
        }
        break
    }
  }
  return expStack.size == 0 ? true : false
}

var exp="{{()()})}";
var res = bracketCheck(exp)
if(res == true)
{
  document.write("Q8 All brackets are Closed  <br>");
}
else{
  document.write('Q8 All brackets are not Closed <br>');
}



//Q9 reverse a stack


function reverse(str)
{
   
     var stack = new Stack();
     var reverseStr = "";
     for (var i=0;i <= str.length-1; i++) 
     {
         stack.push(str.charAt(i));
     }
     for(var i=str.length-1;i>=0;i--) {
         reverseStr += stack.pop();
     }
  
     return reverseStr;
}
 
var str='Hello World';
var res=reverse(str);
document.write("Q9  ",res," <br>");



//Q10 find smallest number

function findMin(arr)
{
  var stack=new Stack();
  var min=arr[0];
  for(var i=0;i<=arr.length-1;i++)
    stack.push(arr[i]);
   for(i=0;i<=arr.length-1;i++)
  {
    
    if(min <=stack.peek())
     {
       stack.pop();
     }
    else
     {
       var temp;
       temp=stack.pop();
       min=temp;
     }
    
  } 
  return min;
}
var arr1=[5,10,3,46,4,2,7];
var min=findMin(arr1);
document.write("Q10  Minimum Number Is   " ,min,"<br>");



