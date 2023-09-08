class IceCream {
    constructor(flavor, toppings) {
        this.flavor = flavor;
        this.topping = topping;
    }
    describe() {
        return '${this.flavor} has $(this.toppings).';
    }

}
class Store {
    constructor(name) {
        this.name = name;
        this.iceCream = [];
    }
    {
    let iceCream = new IceCream(vanilla, pecans)
    if (iceCream instance of iceCream) {
        this.iceCream.push(iceCream);
    }
    else {
        throw new Error('You can ony add an instance of iceCream.' 'Argument is not iceCream: ${iceCream'} ');
}

describe() {
    return '${ this.store} has ${this.iceCream.flavors.}'
}
    
    }
class Menu {
    constructor() {
        this.store = []
        this.selectedStore = null;
    }

}
start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch (selection) {
            case '1':
                this.createStore();
                break;
            case '2':
                this.viewStore();
                break;
            case '3':
                this.deleteStore();
                break;
            case '4':
                this.displayStore();
                break;
            default:
                selection = 0;
        }
        selection = showMainMenuOptions();
    }
    alert('Goodbye!');
}
showMainMenuOptions() {
    return prompt
        ('
    0) exit
    1) create store
    2) view store
    3) delete store
    4) display all stores
    ');

    showStoreMenuOptions(storeInfo) {
        return prompt()
        0) back
        1) create flavor
        2) delete flavor
            
                ${ storeInfo }
        ');

    }

    displayStores(){
        let storeString = "";
        for (let i = 0; i < this.store.length; i++) { storeString += i + ') ' + this.store[i].name + '\n'; } alert(storeString);
    }
    createStore() {
        let name = prompt('Enter name for new store:'');
                this.store.push(new Store(name));
    }
    viewStore() {
        let index = " prompt( ' enter the index of the store you wish to view:''); if (index> -1 && index <
        this.store.length) {
            this.selectedStore = this.store[index]; let description = 'Store Name:' +
                this.selectedStore.name + '\n'; for (let i = 0; i < this.selectedStore.flavors.length; i++) {
                    description += i') +
                    this.selectedStore.flavors[i].name + '-' + this.selectedStore.flavors[i].toppings + '\n'; +'\n'; let
                        selection = this.showStoreMenuOptions" (description); switch (selection) { case '1' : this.createFlavor(); break;
            case '2' : this.deleteFlavor();
                }
        }
    }
} let menu = new Menu(); menu.start();