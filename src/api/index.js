export default {
    getActiveCoupons: () => (
        new Promise((resolve, reject) => {
            fetch('http://example.com/coupons.json')
                .then(response => resolve(response.json()))
        })
    )
}
