const renderBlocker = () => {
	if (document.getElementById("insta-meme-blocker-root")) {
		return;
	}

	const overlay = document.createElement("div");
	overlay.id = "insta-meme-blocker-root";
	overlay.style.position = "fixed";
	overlay.style.inset = "0";
	overlay.style.zIndex = "2147483647";
	overlay.style.display = "flex";
	overlay.style.alignItems = "center";
	overlay.style.justifyContent = "center";
	overlay.style.padding = "24px";
	overlay.style.background =
		"radial-gradient(circle at top, rgba(255, 112, 67, 0.18), transparent 35%), linear-gradient(160deg, #0f1115 0%, #171b22 45%, #090b10 100%)";
	overlay.style.backdropFilter = "blur(14px)";
	overlay.style.fontFamily = "Arial, Helvetica, sans-serif";

	const panel = document.createElement("div");
	panel.style.width = "min(820px, 100%)";
	panel.style.border = "1px solid rgba(255, 255, 255, 0.08)";
	panel.style.borderRadius = "28px";
	panel.style.background = "rgba(18, 20, 26, 0.92)";
	panel.style.boxShadow = "0 24px 80px rgba(0, 0, 0, 0.55)";
	panel.style.overflow = "hidden";
	panel.style.color = "#f4f7fb";

	const hero = document.createElement("div");
	hero.style.display = "grid";
	hero.style.gridTemplateColumns = "1.2fr 0.8fr";
	hero.style.gap = "0";

	const copy = document.createElement("div");
	copy.style.padding = "40px";
	copy.style.display = "flex";
	copy.style.flexDirection = "column";
	copy.style.justifyContent = "center";
	copy.style.gap = "18px";

	const badge = document.createElement("div");
	badge.textContent = "Blocked by policy";
	badge.style.alignSelf = "flex-start";
	badge.style.padding = "8px 14px";
	badge.style.borderRadius = "999px";
	badge.style.background = "rgba(255, 122, 92, 0.14)";
	badge.style.border = "1px solid rgba(255, 122, 92, 0.28)";
	badge.style.color = "#ffb6a3";
	badge.style.fontSize = "12px";
	badge.style.fontWeight = "700";
	badge.style.letterSpacing = "0.12em";
	badge.style.textTransform = "uppercase";

	const title = document.createElement("h1");
	title.textContent = "This content has been blocked";
	title.style.margin = "0";
	title.style.fontSize = "clamp(2rem, 4vw, 3.5rem)";
	title.style.lineHeight = "1.02";
	title.style.letterSpacing = "-0.04em";

	const message = document.createElement("p");
	message.textContent =
		"The page is temporarily replaced with a focused blocker screen so the feed stays out of your way.";
	message.style.margin = "0";
	message.style.maxWidth = "36ch";
	message.style.fontSize = "1.05rem";
	message.style.lineHeight = "1.65";
	message.style.color = "rgba(244, 247, 251, 0.78)";

	const note = document.createElement("p");
	note.textContent = "Take a breath. Close this tab if you want the distraction gone.";
	note.style.margin = "0";
	note.style.fontSize = "0.95rem";
	note.style.lineHeight = "1.6";
	note.style.color = "rgba(244, 247, 251, 0.6)";

	copy.appendChild(badge);
	copy.appendChild(title);
	copy.appendChild(message);
	copy.appendChild(note);

	const visual = document.createElement("div");
	visual.style.minHeight = "360px";
	visual.style.padding = "28px";
	visual.style.background =
		"linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))";
	visual.style.display = "flex";
	visual.style.alignItems = "center";
	visual.style.justifyContent = "center";

	const img = document.createElement("img");
	img.src = chrome.runtime.getURL("meme.jpg");
	img.alt = "Blocking meme";
	img.style.width = "100%";
	img.style.maxWidth = "320px";
	img.style.maxHeight = "420px";
	img.style.objectFit = "contain";
	img.style.borderRadius = "22px";
	img.style.boxShadow = "0 20px 50px rgba(0, 0, 0, 0.35)";
	img.style.backgroundColor = "#0c0f14";

	visual.appendChild(img);
	hero.appendChild(copy);
	hero.appendChild(visual);

	const footer = document.createElement("div");
	footer.textContent = "powered by - the_evil-lord";
	footer.style.padding = "18px 28px 26px";
	footer.style.textAlign = "center";
	footer.style.fontSize = "0.82rem";
	footer.style.letterSpacing = "0.08em";
	footer.style.textTransform = "uppercase";
	footer.style.color = "rgba(244, 247, 251, 0.55)";

	panel.appendChild(hero);
	panel.appendChild(footer);
	overlay.appendChild(panel);

	const mount = document.body || document.documentElement;
	mount.appendChild(overlay);
};

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", renderBlocker, { once: true });
} else {
	renderBlocker();
}