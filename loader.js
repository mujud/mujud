if((document.getElementsByClassName("formulaEditorOuter").length ==  1) || (document.getElementsByClassName("pbWizardBody").length ==  1)){
	var base = "./app/";
	loadStyles(base,["styles.3579fd3e5d7d24180449.bundle.css"])
	var devJs = [
				"main.fa95803a5ebdbf8d7ede.bundle.js",
				"vendor.9cd34d2b726dad8c22c6.bundle.js",
				"scripts.afa0f8a95daf61fbaec5.bundle.js",
				"polyfills.e1f97a0070e18e96a6be.bundle.js",
				"inline.b342c928649ee8126e64.bundle.js",
			];
	loadScripts(base,devJs);
}