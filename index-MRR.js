let datos = [
    {region: "North America", date: "2024-01-01", product_category: "Electronics", product_name: "iPhone 14 Pro", quantity_sold: 2, unit_price: 999.99, total: 1999.98, payment_method: "Credit Card"},
    {region: "North America", date: "2024-01-16", product_category: "Books", product_name: "Salt, Fat, Acid, Heat by Samin Nosrat", quantity_sold: 3, unit_price:35.99, total: 107.97, payment_method: "Credit Card"},
    {region: "North America", date: "2024-03-25", product_category: "Electronics", product_name: "Ring Video Doorbell", quantity_sold: 1, unit_price: 99.99, total: 99.99, payment_method: "Credit Card"},
    {region: "Asia", date: "2024-02-02", product_category: "Clothing", product_name: "Under Armour HeatGear T-shirt", quantity_sold: 5, unit_price: 29.99, total: 149.95, payment_method: "Debit Card"},
    {region: "North America", date: "2024-08-01", product_category: "Books", product_name: "The Girl with the Dragon Tattoo by Stieg Larsson", quantity_sold: 3, unit_price: 10.99, total: 32.97, payment_method: "Credit Card"},
    {region: "North America", date: "2024-02-27", product_category: "Books", product_name: "Educated by Tara Westover", quantity_sold: 3, unit_price: 28, total: 84, payment_method: "Credit Card"},
    {region: "Europe", date: "2024-05-01", product_category: "Home Appliances", product_name: "Hamilton Beach FlexBrew Coffee Maker", quantity_sold: 1, unit_price: 89.99, total: 89.99, payment_method: "PayPal"},
    {region: "Asia", date: "2024-01-06", product_category: "Sports", product_name: "Wilson Evolution Basketball", quantity_sold: 5, unit_price: 29.99, total: 149.95, payment_method: "Credit Card"},
    {region: "Asia", date: "2024-07-07", product_category: "Clothing", product_name: "Nike Dri-FIT Training Shorts", quantity_sold: 4, unit_price: 34.99, total: 139.96, payment_method: "Debit Card"},
    {region: "Europe", date: "2024-08-20", product_category: "Beauty Products", product_name: "Fresh Sugar Lip Treatment", quantity_sold: 1, unit_price: 24, total: 24, payment_method: "PayPal"},
    {region: "Europe", date: "2024-04-16", product_category: "Beauty Products", product_name: "The Ordinary Niacinamide Serum", quantity_sold: 1, unit_price: 6.5, total: 6.5, payment_method: "PayPal"}
];

let regionElegida = "Asia"

function media(regionElegida){
    let filtro = datos.filter((d) => d.region === "Asia");
    let resultado = filtro.reduce((a, d) => a + d.quantity_sold, 0) / filtro.length;
    console.log("La media de unidades por compra en", regionElegida, "es", resultado);
};

media (regionElegida);