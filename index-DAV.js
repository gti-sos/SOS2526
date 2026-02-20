
//Array con los datos de ejemplo de la tabla
const data = [
    { region: "Asia", date: "2024-01-21", platform: "Google Ads", industry: "Fintech", impression: 59886, click: 2113, ad_spend: 2662.38, conversion: 159, revenue: 4803.43 },
    { region: "Europe", date: "2024-01-22", platform: "TikTok Ads", industry: "EdTech", impression: 135608, click: 5220, ad_spend: 6159.60, conversion: 411, revenue: 64126.68 },
    { region: "North America", date: "2024-06-15", platform: "TikTok Ads", industry: "Healthcare", impression: 92313, click: 5991, ad_spend: 5092.35, conversion: 267, revenue: 10489.07 },
    { region: "Europe", date: "2024-01-02", platform: "TikTok Ads", industry: "SaaS", impression: 83953, click: 5935, ad_spend: 7834.20, conversion: 296, revenue: 50505.07 },
    { region: "Europe", date: "2024-02-22", platform: "TikTok Ads", industry: "Healthcare", impression: 91807, click: 4489, ad_spend: 8663.77, conversion: 107, revenue: 3369.53 },
    { region: "North America", date: "2024-10-15", platform: "TikTok Ads", industry: "Fintech", impression: 17666, click: 724, ad_spend: 267.88, conversion: 23, revenue: 5220.85 },
    { region: "North America", date: "2024-08-14", platform: "Meta Ads", industry: "Fintech", impression: 118252, click: 3748, ad_spend: 1574.16, conversion: 152, revenue: 12838.56 },
    { region: "Asia", date: "2024-04-05", platform: "TikTok Ads", industry: "EdTech", impression: 92939, click: 5176, ad_spend: 3416.16, conversion: 388, revenue: 96298.69 },
    { region: "Europe", date: "2024-04-17", platform: "Meta Ads", industry: "EdTech", impression: 30939, click: 937, ad_spend: 552.83, conversion: 63, revenue: 16531.03 },
    { region: "North America", date: "2024-11-13", platform: "Google Ads", industry: "Fintech", impression: 8748, click: 362, ad_spend: 438.02, conversion: 10, revenue: 966.57 },
    { region: "Asia", date: "2024-04-22", platform: "Meta Ads", industry: "E-commerce", impression: 98264, click: 3144, ad_spend: 4904.64, conversion: 129, revenue: 23127.27 }
];

let regionBuscada = "Europe"; //Buscamos por región
let campoNumerico = "impression"; // Buscamos el campo de impresiones de anuncios

console.log(`Iniciando el cálculo para la región: ${regionBuscada}`);

//Usamos filter para quedarnos solo con las filas de la región geográfica buscada
let datosFiltrados = data.filter(dato => dato.region === regionBuscada);

if (datosFiltrados.length > 0) {

    //Usamos map para extraer únicamente los valores del campo numérico que nos interesa
    let valoresNumericos = datosFiltrados.map(dato => dato[campoNumerico]);

    // Usamos reduce para sumar los valores
    let sumaTotal = valoresNumericos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    //Calculamos la media
    let media = sumaTotal / valoresNumericos.length;

    //Mostramos el resultado por pantalla
    console.log(`La media de '${campoNumerico}' para la región de '${regionBuscada}' es: ${media}`);
} else {
    console.log(`No se encontraron datos para la región '${regionBuscada}'`);
}