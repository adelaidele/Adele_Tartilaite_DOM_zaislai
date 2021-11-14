class ToyCardComponent {
    static USD_EUR = 0.87;

    constructor(props) {
        this.props = props;
        this.init();
    }

    formatPrice = () => {
        const {
            price: { currency, amount },
            discount: { type, amount: value }
        } = this.props;

        const originalPrice = currency === "$" ? amount * ToyCardComponent.USD_EUR : amount;
        let finalPrice;

        switch (type) {
            case 'absolute':
                finalPrice = amount - value;
                break;
            case 'toFixed':
                finalPrice = value;
                break;
            case 'percentage':
                finalPrice = Math.round(100 * amount * (1 - value / 100)) / 100;
                break;
        }

        finalPrice = currency === "$" ? finalPrice * ToyCardComponent.USD_EUR : finalPrice;

        finalPrice = finalPrice.toFixed(2);

        return `
        <span class="d-inline-flex">
            <span class="text-decoration-line-through fw-light pe-2 text-danger">${originalPrice} €</span>
            <strong class="text-success">${finalPrice} €</strong>
        </span>
        `;
    }

    formatAgeRestriction = () => {
        const { ageRestrictions } = this.props;

        return ageRestrictions
            ? `<div>Age: ${ageRestrictions.from}+</div>`
            : `<div class="user-select-none">For all ages:)</div>`
    }

    init = () => {
        const { title, imgSrc, onDelete } = this.props;

        this.htmlElement = document.createElement('article');
        this.htmlElement.className = "card p-3 shadow";
        this.htmlElement.innerHTML = `
        <div class="card-body">
        <img class="card-img-top" src="${imgSrc}">
        <h2 class="h5">${title}</h2>
        <ul>
            <li>${this.formatAgeRestriction()}</li>
            <li>Kaina: ${this.formatPrice()}</li>
        </ul>
        <button class="btn btn-danger">Delete</button>
        </div>
        `;
        const btn = this.htmlElement.querySelector("button");
        btn.addEventListener('click', onDelete);
    };
}