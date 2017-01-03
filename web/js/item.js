class Item {
	constructor(data) {
		this.init();
		this.load(data);
	}

	init() {
		this._id = 0;
		this._name = '';
		this._min_damage = 0;
		this._max_damage = 3;
		this._defense = 0;
		this._block_chance = 0;
		this._block_amount = 0;
		this._crit_chance = 0;
		this._crit_damage = 0;
		this._price = 0;
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}

	get min_damage() {
		return this._min_damage;
	}

	set min_damage(value) {
		this._min_damage = value;
	}

	get max_damage() {
		return this._max_damage;
	}

	set max_damage(value) {
		this._max_damage = value;
	}

	get defense() {
		return this._defense;
	}

	set defense(value) {
		this._defense = value;
	}

	get block_chance() {
		return this._block_chance;
	}

	set block_chance(value) {
		this._block_chance = value;
	}

	get block_amount() {
		return this._block_amount;
	}

	set block_amount(value) {
		this._block_amount = value;
	}

	get crit_chance() {
		return this._crit_chance;
	}

	set crit_chance(value) {
		this._crit_chance = value;
	}

	get crit_damage() {
		return this._crit_damage;
	}

	set crit_damage(value) {
		this._crit_damage = value;
	}

	get price() {
		return this._price;
	}

	set price(value) {
		this._price = value;
	}

	load(data) {
		for (var i in data) {
			//look through all the keys in data and see if they are valid item properties
			if (typeof this['_' + i] !== 'undefined') {
				//if they are, assign the value
				this['_' + i] = data[i];
			}
		}
	}
}