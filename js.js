setTimeout(function(){
let play = document.getElementById('p');
let logo = document.getElementById('bhd');
logo.style.display = 'none';
let uu = document.getElementById('lg');
uu.style.display = 'block';
let kz = document.getElementById('body');
kz.style.background = '#EEC601';
play.addEventListener('click', function(){
	let ran = Math.random(1000) * 9999;
	ran = Math.ceil(ran);
	let mx = document.getElementById('luck');
	mx.innerHTML = 'WAIT...';
	setTimeout(function(){
		mx.innerHTML = 'UNLUCK';
		if (ran == 2457 && ran == 1000 && ran == 9999 ||
		ran == 10) {
			mx.innerHTML = 'LUCK' + mx;
		}
	}, 1000);
	let cpl = document.getElementById('play');
	cpl.style.display = 'block';
	let jj = document.getElementById('menu');
	jj.style.display = 'none';
	console.log(ran);
	if (ran == 2457 && ran == 1000 && ran == 9999 ||
		ran == 10) {
		let h = document.getElementById('luck');
		h.innerHTML = 'LUCK  ' + ran;
		let jv = document.getElementById('nav');
		jv.style.display = 'block';
	}
	else {
		setTimeout( function(){
			let hh = document.getElementById('nav');
			hh.style.display =  'block';
		}, 1000);
	}
	let kp = document.getElementById('left');
	kp.addEventListener('click', function(){
		jj.style.display = 'block';
		cpl.style.display = 'none';
	});
	let un = document.getElementById('un');
	un.addEventListener('click', function(){
		let maf = Math.random() * 9999;
		console.log(maf);
		let k = document.getElementById('luck');
		k.innerHTML = 'WAIT...';
		let nx = document.getElementById('nav');
		nx.style.display = 'none';
		maf = Math.ceil(maf);
		setTimeout( function(){
			k.innerHTML = 'UNLUCK';
			nx.style.display = 'block';
			if (maf < 110) {
				k.innerHTML = 'LUCK  ' + maf;
			}
			if (maf <= 40) {
			k.innerHTML = 'UNLUCK';
		}
		}, 1000);
		if (maf <= 40) {
			k.innerHTML = 'UNLUCK';
		}
		if (maf < 110) {
			k.innerHTML = 'LUCK  ' + maf;
		}
	});
});
let topp = document.getElementById('topp');
let kj = document.getElementById('top');
let kb = document.getElementById('toa');
let kp = document.getElementById('medal');
let set = document.getElementById('set');
set.addEventListener('click', function(){
	let nnc = document.getElementById('pr');
	let bn = document.getElementById('menu');
	nnc.style.display = 'block';
	bn.style.display = 'none';
});
kj.addEventListener('click', function(){
	let bn = document.getElementById('menu');
	bn.style.display = 'none';
	topp.style.display = 'block';
}, );
kb.addEventListener('click', function(){
	let bn = document.getElementById('menu');
	bn.style.display = 'block';
	topp.style.display = 'none';
}, );

kp.addEventListener('click', function(){
	let bn = document.getElementById('menu');
	bn.style.display = 'none';
	let aq = document.getElementById('play');
	aq.style.display = 'none';
	let jc = document.getElementById('topp');
	jc.style.display = 'block';
}, );
}, 5000);