// This is a dynamic route since this page.js is enclosed in a [details] folder. So we can access this page using /products/any_value for now. The 'any_value' portion is called a slug. Dynamic routes do not support multiple slugs like products/1/2/...

export default function ProductDetailsPage(){
    return (
        <h1>Welcome to product details page</h1>
    )
}