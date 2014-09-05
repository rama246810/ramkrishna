var a,b,ai,bi,res1,res2,k;
var x,y,z,firstValue,secondValue,z1,z2;
var res = new Array();
var sum = new Array();
var res1 = new Array();
var c = new Array();
function multipication(a,b)
{
	a = document.getElementById('first').value;
	b = document.getElementById('second').value;
	var len = a.length;
	for (i = 0; i<len; i++)
	{
		ai = a[i];
		if (ai == 0) 
			{
				bi = repeat(0,b.length);
			};
			else
			{
				bi = b;
			}
			res[i] = bi;
		}
		res.reverse();
		for(var i=res.length-1;i>=0;i++)
		{
			res1[i] = res[i]+repeat(0,i);
		}
		addition1(res1);
	}
	var toBinary = function(res)
	{
		return parseInt(res,10).toString(2);
	}
	function repeat(s,n)
	{
		var a = [];
		while(a.length<n)
		{
			a.push(s);
		}
		return a.join('');
	}
	function addition(firstValue,secondValue)
	{
		firstValue = document.getElementById('first').value;
		secondValue = document.getElementById('second').value;
		x = firstValue;
		y = secondValue;
		if (x.length < y.length) {
			var k = y.length - x.length;
			z = repeat(0,k);
			x = z+x;
			z1 = add(x,y);
			alert(z1);
		};
		else
		{
			z1 = add(x,y);//compute sum
			document.getElementById('sixth').value = z1;//alert(z1);//print out
		}
	}
	function addition1(res)
	{
		x = res[0];
		//alert(x)
		y = res[1];
		//alert(y)
		for (var i = 0; i < k.length-1; k++) {
			if (x.length < y.length) {
				z2 = "";
				var k=y.length - x.length;
				 z = repeat(0,k);
				 x = z+x;
				 //alert(x)
				 z2 = add(x,y);
				 //alert(z2)
				 y = res[k+1];
				 //alert(y)
			};
		};
		z2 = add(z2,y);
		document.getElementById('seventh').value = z2;//alert(z2)
	}
	function repeat(s,n)
	{
		var a = [];
		while(a.length < n)
		{
			a.push(s);
		}
		return a.join('');
	}
	function addBit(a,b,c)//truth table
	{
		var r = "";
		if (a == 1 && b == 0)||(a==0&&b==1)
		 {
		 	if (c==0)  
		 		{
		 			r = "1";
		 		};
		 		else
		 		{
		 			r = "0": c = "1";
		 		}
		 };
		 else if (a==0&&b==0) 
		 	{
		 		if (c==0) 
		 			{
		 				r = "0";
		 			};
		 			else
		 			{
		 				r = "1";
		 			}
		 	};
		 	else if (a==1 && b==1) 
		 		{
		 			if (c==0) 
		 				{
		 					r=="0"
		 					c=="1"
		 				};
		 				else
		 				{
		 					r == "1";
		 					c == "1";
		 				}
		 		};
		 		return c+r;//returns result after adding carry.
	}
	function add(a,b)
	{
		var r = "";
		var len = a.length;
		var carry = "0";
	}
	for (var i = len-1; i > =0; i--)
	{
		var ai = a.substring(i,i+1);
		var bi = b.substring(i,i+1);
		var res = addBit(ai,bi,carry);
		var cb = res.substring(0,1);
		var rb = res.substring(1,2);
		r = rb+r;
		carry = cb;
	}
	return carry+r;
}