// import "./styles.css";

const inputName = document.querySelector('.inputName'),
	inputAddress = document.querySelector('.inputAddress'),
	addBtn = document.querySelector('.btn'),
	bookmarkList = document.querySelector('.bookmarkList'),
	BOOKMARK_LS = 'bookmarks';

function enterKey() {
	inputName.addEventListener('keyup', function (event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			addBtn.click();
		}
	});

	inputAddress.addEventListener('keyup', function (event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			addBtn.click();
		}
	});
}

// function modEnterKey() {
//   input.addEventListener("keyup", function (event) {
//     console.log(event.keyCode);
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       saveBtnClick();
//     }
//   });
// }

// if (window.location.protocol != "https:") {
//   location.href = location.href.replace(/^http:/, "https:");
// }

let bookmarks = [];

function deleteBookmark(event) {
	const btn = event.target,
		li = btn.parentNode,
		cleanBookmarks = bookmarks.filter(function (bookmark) {
			return bookmark.id !== parseInt(li.id);
		});
	bookmarkList.removeChild(li);

	bookmarks = cleanBookmarks;

	saveBookmark();
}

function modifyBookmark(e) {
	const target = e.target,
		ul = target.parentNode,
		div = ul.parentNode,
		bookmark = div.parentNode,
		p = bookmark.querySelector('.bName'),
		savBtn = document.createElement('button'),
		delBtn = document.createElement('button'),
		delBtn1 = bookmark.querySelector('.delBtn'),
		input = bookmark.querySelector('input'),
		name = bookmark.querySelector('input').value;

	p.innerHTML = `<input type="text" placeholder="${name}" />`;

	savBtn.className = 'savBtn';
	savBtn.innerText = '';
	savBtn.addEventListener('click', saveBtnClick);

	delBtn.className = 'delBtn';
	delBtn.innerText = '';
	delBtn.addEventListener('click', deleteBookmark);

	bookmark.removeChild(div);
	bookmark.removeChild(delBtn1);

	bookmark.appendChild(savBtn);
	bookmark.appendChild(delBtn);

	console.log(input);

	input.addEventListener('keyup', function (event) {
		console.log(event.keyCode);
		// if (event.keyCode === 13) {
		//   event.preventDefault();
		//   saveBtnClick();
		// }
	});
}

function saveBtnClick(e) {
	const target = e.target,
		li = target.parentNode,
		p = li.querySelector('.bName'),
		savBtn = li.querySelector('.savBtn'),
		input = p.querySelector('input'),
		name2 = p.querySelector('input').placeholder;

	let name1 = p.querySelector('input').value;

	p.innerHTML = `
    <input type="text" value="${name1 === '' ? name2 : name1}"  placeholder="${name2}" readonly="readonly" />
  `;

	li.removeChild(savBtn);

	if (li.id) {
		bookmarks[li.id - 1].name = name1 === '' ? name2 : name1;
	}

	savBtn.addEventListener('click', handleSubmit);

	saveBookmark();

	location.reload();

	// PageReload(p);
}

// $(function PageReload(p) {
//   p.load(window.location.href + p);
// });

function paintBookmark(name, address) {
	const li = document.createElement('li'),
		p = document.createElement('p'),
		delBtn = document.createElement('button'),
		newId = bookmarks.length + 1,
		bookmarkObj = {
			name: name,
			address: address,
			id: bookmarks.length + 1,
		};

	li.className = 'bookmark';
	p.className = 'bName';

	delBtn.className = 'delBtn';
	delBtn.innerText = '';
	delBtn.addEventListener('click', deleteBookmark);

	p.innerHTML = `<input type="text" value="${name}" />`;

	li.innerHTML = `
    <a class="bAddress" target="_blank" href="${address.startsWith('http') ? address : `http://${address}`}">
      <img class="bImg" src="${
			address.startsWith('http') ? address : `http://${address}`
		}/favicon.ico" onerror="this.src='https://incho-b.github.io/portfolio/favicon.ico'" />
    </a>
    `;

	li.appendChild(p);
	li.appendChild(delBtn);

	li.id = newId;

	bookmarkList.appendChild(li);

	bookmarks.push(bookmarkObj);

	saveBookmark();
}

function saveBookmark() {
	localStorage.setItem(BOOKMARK_LS, JSON.stringify(bookmarks));
}

function handleSubmit(event) {
	event.preventDefault();

	const name = inputName.value,
		address = inputAddress.value;

	if (inputName.value === '') {
		alert('input name');
		return;
	} else if (inputAddress.value === '') {
		alert('input address');
		return;
	} else {
		paintBookmark(name, address);
		inputName.value = '';
		inputAddress.value = '';
	}
}

function loadBookmark(e) {
	const loadBookmark = localStorage.getItem(BOOKMARK_LS);

	if (loadBookmark !== null) {
		const parsedBookmark = JSON.parse(loadBookmark);
		parsedBookmark.forEach(function (bookmark) {
			paintBookmark(bookmark.name, bookmark.address);
		});
	}

	const names = document.querySelectorAll('.bName');

	names.forEach(function (name) {
		const input = name.querySelector('input');

		let timerID,
			counter = 0,
			pressHoldEvent = new CustomEvent('pressHold'),
			pressHoldDuration = 50;

		input.addEventListener('touchstart', pressingDown, false);
		input.addEventListener('touchend', notPressingDown, false);
		input.addEventListener('pressHold', doSomething, false);

		function pressingDown(e) {
			requestAnimationFrame(timer);
			e.preventDefault();
		}

		function notPressingDown(e) {
			cancelAnimationFrame(timerID);
			counter = 0;
		}

		function timer() {
			if (counter < pressHoldDuration) {
				timerID = requestAnimationFrame(timer);
				counter++;
			} else {
				input.dispatchEvent(pressHoldEvent);
			}
		}

		function doSomething(e) {
			modify(e);
		}
	});
}

function modify(e) {
	const target = e.target,
		bName = target.parentNode.parentNode,
		div = document.createElement('div'),
		modiLi = div.childNodes;

	div.className = 'modify';
	div.innerHTML = `
      <p class="modifyTitle">Modify</p>
      <ul class="modifyList">
        <li class="modiName">Name</li>
        <li class="modiAdd">Address</li>
	  </ul>
	  <p class="cloBtn"></p>
    `;

	bName.appendChild(div);

	const lis = modiLi[3].querySelectorAll('li'),
		cloBtn = document.querySelector('.cloBtn'),
		modifyDiv = document.querySelector('.modify');

	lis[0].addEventListener('click', modifyBookmark);
	lis[1].addEventListener('click', function () {
		console.log('wait');
	});
	cloBtn.addEventListener('click', function (e) {
		modifyDiv.style.display = 'none';
		location.reload();
	});
}

function init() {
	addBtn.addEventListener('click', handleSubmit);

	loadBookmark();
	// enterKey();
}

init();

// window.addEventListener('click', function (e) {
// 	console.log(e.target);
// });
