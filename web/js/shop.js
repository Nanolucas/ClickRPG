class Shop {
	constructor(data) {
		this.init();
		this.load(data);
	}

	init() {
		this._items = [];
	} 

	load(data) {
		this._items = [
			new Item({
				name: 'Woodenish Sword',
				max_damage: get_random_int(1,2),
				price: 45
			}),
			new Item({
				name: 'Small Buckler',
				block_chance: get_random_int(8,24),
				block_amount: get_random_int(1,3),
				price: get_random_int(25,35)
			})
		];
	}

	render() {
		$('#shop_items').html('<h3>Shop</h3>');
		for (var i in this._items) {
			$('#shop_items').append('<div id="shop_item' + i + '">' + this._items[i].name + ': <button type="button" id="buy_shop_item' + i + '">' + this._items[i].price + ' Moxie</button></div>');
		}
	}
}