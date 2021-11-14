class ToysGridComponent {
    constructor(){
        this.state = {
            loading: false,
            Toys: []
          }
        this.init();
    }
    fetchToys = () => API.fetchToys(this.saveToys, alert);

    saveToys = (toys) => {
        this.state.toys = toys;
        this.state.loading = false;

        this.render();
    }

    init = () => {;
        this.state.loading = true;
        this.fetchToys();
        this.htmlElement = document.createElement("div");
        this.htmlElement.innerHTML = 'testas';

        this.render();
    }
    
    render = () => {
        const { loading, toys } = this.state;
        if (loading) {
          this.htmlElement.innerHTML = 'siunciama.';
        } else {
          this.htmlElement.innerHTML = 'parsiusta.';
        }  
    }
}