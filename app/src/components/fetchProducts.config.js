const fetchProducts = () => {
    return fetch("/data/ProductData.json")
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText);
            }
            return res
        })
        .then(res => res.json())
        .then(json => {
            return json.Products;
        });
}

export default fetchProducts