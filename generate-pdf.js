const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

// Lista de diapositivas en orden
const slides = [
	{
		file: "1-portada-transformación-digital.html",
		title: "Portada - Transformación Digital",
	},
	{ file: "2-indice.html", title: "Índice del Plan" },
	{ file: "3-presentacion-marca.html", title: "Presentación de la Marca" },
	{ file: "4.html", title: "Modelo de Negocio Canvas" },
	{ file: "5.html", title: "Objetivos SMART" },
	{ file: "6.html", title: "Análisis Macro: PESTEL" },
	{ file: "7.html", title: "Análisis de Competencia" },
	{ file: "8.html", title: "Buyer Persona" },
	{ file: "9.html", title: "Customer Journey" },
	{ file: "10.html", title: "Análisis SWOT & VUCA" },
	{ file: "11.html", title: "Macro-Tendencias" },
	{ file: "12.html", title: "Marco de Transformación Digital" },
	{ file: "13.html", title: "Metodología Ágil" },
	{ file: "14.html", title: "Plan de Implementación" },
	{ file: "16.html", title: "Métricas y KPIs" },
	{ file: "15.html", title: "Métricas y KPIs" },
];

async function generatePDF() {
	console.log("🚀 Iniciando generación de PDF...");

	const browser = await puppeteer.launch({
		headless: true,
		args: [
			"--no-sandbox",
			"--disable-setuid-sandbox",
			"--disable-dev-shm-usage",
		],
	});

	const pdfPages = [];

	for (let i = 0; i < slides.length; i++) {
		const slide = slides[i];
		const slidePath = path.join(__dirname, "diapositivas-proyecto", slide.file);

		console.log(
			`📄 Procesando diapositiva ${i + 1}/${slides.length}: ${slide.title}`
		);

		// Crear una nueva página para cada diapositiva
		const page = await browser.newPage();

		try {
			// Configurar viewport para diapositivas 1920x1080
			await page.setViewport({
				width: 1024,
				height: 768,
				deviceScaleFactor: 1,
			});

			// Cargar la diapositiva con más tiempo de espera
			await page.goto(`file://${slidePath}`, {
				waitUntil: "networkidle0",
				timeout: 60000, // Aumentar timeout a 60 segundos
			});

			// Esperar a que se carguen las fuentes y estilos
			await page.waitForTimeout(3000);

			// Verificar que la página se cargó correctamente
			const title = await page.title();
			console.log(`   ✅ Página cargada: ${title}`);

			// Generar PDF de la diapositiva
			const pdfBuffer = await page.pdf({
				width: "1920px",
				height: "1080px",
				printBackground: true,
				margin: {
					top: "0",
					right: "0",
					bottom: "0",
					left: "0",
				},
				scale: 0.9999, // Zoom al 90%
			});

			pdfPages.push(pdfBuffer);
			console.log(`   ✅ PDF generado para: ${slide.title}`);
		} catch (error) {
			console.error(`❌ Error procesando ${slide.file}:`, error.message);
		} finally {
			// Cerrar la página después de cada diapositiva
			await page.close();
		}
	}

	await browser.close();

	// Combinar todos los PDFs en uno solo
	if (pdfPages.length > 0) {
		console.log("📚 Combinando páginas en un solo PDF...");

		// Usar PDF-lib para combinar los PDFs
		const { PDFDocument } = require("pdf-lib");
		const mergedPdf = await PDFDocument.create();

		for (const pdfBuffer of pdfPages) {
			const pdf = await PDFDocument.load(pdfBuffer);
			const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
			copiedPages.forEach((page) => mergedPdf.addPage(page));
		}

		const mergedPdfBytes = await mergedPdf.save();

		// Guardar el PDF final
		const outputPath = path.join(
			__dirname,
			"presentacion-transformacion-digital.pdf"
		);
		fs.writeFileSync(outputPath, mergedPdfBytes);

		console.log(`✅ PDF generado exitosamente: ${outputPath}`);
		console.log(`📊 Total de páginas: ${pdfPages.length}`);
	} else {
		console.error("❌ No se pudieron procesar las diapositivas");
	}
}

// Ejecutar el script
generatePDF().catch(console.error);
