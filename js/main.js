let navbar = document.querySelector(".navbar");
let skill_navigate = document.querySelectorAll(".navigate");
let iLearn = document.querySelector(".i-learn");
let hero_img = document.querySelector(".me-image");
let sectionTitle = document.querySelectorAll("section .section-title");
let skills = document.querySelectorAll(".skill");
let lazyEl = document.querySelectorAll(".about-me > *");
let educationHistory = document.querySelectorAll(".education-history li");
let show = {
	sectionTitle: false,
};

skill_navigate.forEach((e, n) => {
	e.onclick = () => {
		let class_to_click = n === 0 ? "first" : "last";
		let el_to_click = document.querySelector(
			`.skill.${class_to_click}:not(.outside)`
		);
		if (el_to_click) {
			el_to_click.click();
		}
	};
});

window.onload = () => {
	document.body.style.opacity = 1;

	lazyEl.forEach((e, n) => {
		setTimeout(() => {
			e.classList.add("loaded");
		}, 800 * n);
	});
};

window.onscroll = (ev) => {
	navbar.style["background-color"] =
		window.pageYOffset > 10 ? "#4285f4" : "transparent";
	if (sectionTitle.length) {
		sectionTitle.forEach((e, n) => {
			if (isInWindowCenter(e) && !e.classList.contains("show")) {
				e.classList.add("show");
				sectionTitle = document.querySelectorAll(
					"section .section-title:not(.show)"
				);
			}
		});
	}
	if (educationHistory.length) {
		console.log("educationHistory");
		elemOnSight(educationHistory, 0.8, (e) => {
			e.classList.add("show");
			educationHistory = document.querySelectorAll(
				".education-history li:not(.show)"
			);
		});
	}
};

skills.forEach((e, n) => {
	e.onclick = skillClick;
});

function observe(target, callback, opt) {
	if (!isIterable(target)) {
		target = [target];
	}
	for (const t of target) {
		let observer = new IntersectionObserver(callback, opt);
		observer.observe(t);
	}
}

function getElementY(element) {
	return element.getBoundingClientRect().y;
}

function isInWindowCenter(element) {
	return element.getBoundingClientRect().y < window.innerHeight / 2;
}

function getCssVar(element, name) {
	return getComputedStyle(element).getPropertyValue(name);
}

function replaceAllClass(arrEl, src, dst, except, ifExist = false) {
	if (!arrEl) {
		arrEl = document.querySelectorAll("." + src);
		console.log(arrEl);
	}
	for (const el of arrEl) {
		if (el.classList.contains(src) && !ifExist && el !== except) {
			el.classList.remove(src);
			el.classList.add(dst);
		}
	}
}

function replaceClass(el, src, dst, ifExist = false) {
	src = typeof src === "object" ? src : [src];
	for (const c of src) {
		if (el.classList.contains(c)) {
			el.classList.remove(c);
		} else if (ifExist) {
			return;
		}
	}
	return el.classList.add(dst);
}

function prevElementAll(el, callback) {
	while (el.previousElementSibling) {
		callback(el.previousElementSibling);
		el = el.previousElementSibling;
	}
	return true;
}

function nextElementAll(el, callback) {
	while (el.nextElementSibling) {
		callback(el.nextElementSibling);
		el = el.nextElementSibling;
	}
	return true;
}

function getContains(el, arrClass) {
	return arrClass.reduce((prev, current, index) => {
		if (el.classList.contains(current)) {
			return current;
		}
		return prev;
	}, "");
}

function skillClick() {
	let active = document.querySelector(".active");
	if (active === this) return;
	let thisClass = getContains(this, ["first", "last"]);
	let activeNextClass = this.classList.contains("first") ? "last" : "first";
	let showClass = getContains(this, ["first", "last"]);
	let el = document.querySelector(
		"." + activeNextClass + ":not(.outside,.non-active,.navigate)"
	);
	let show =
		activeNextClass === "first"
			? this.nextElementSibling
			: this.previousElementSibling;
	if ([...skill_navigate].indexOf(show) >= 0) {
		// console.log(show);
		// console.log(except);
		show = null;
	}
	if (el) {
		el.classList.add("outside");
		// setTimeout(() => {
		//   el.classList.add("non-active");
		// }, 10);
	}
	if (show) {
		show.classList.add(thisClass);
		show.classList.remove("non-active");
		setTimeout(() => {
			show.classList.remove("outside");
		}, 10);
	}
	replaceClass(active, "active", activeNextClass);
	replaceClass(this, ["first", "last"], "active");
	skills.forEach((e, n) => {});
}

function isIterable(input) {
	if (input === null || input === undefined) {
		return false;
	}

	return typeof input[Symbol.iterator] === "function";
}

function elemOnSight(elem, threshold, callback) {
	elem = isIterable(elem) ? elem : [elem];
	elem.forEach((e) => {
		if (
			isBetween(e.getBoundingClientRect().y, 0, window.innerHeight * threshold)
		) {
			callback(e);
		}
	});
}

function isBetween(n, n1, n2) {
	return n > n1 && n < n2;
}

function getElHasClass(elArr, trget) {
	for (const e of elArr) {
		if (e.classList.contains(trget)) {
			return e;
		}
	}
	return null;
}
function isInWindow(el) {
	return;
}
