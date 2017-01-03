class Player {
	constructor(data) {
		this.init();
		this.load(data);
	}

	init() {
		this._id = 0;
		this._attack_damage = 0;
		this._moxie = 0;
		this._health = {
			current: 0,
			max: 0
		};
		this._inventory = {};
	} 

	load(data) {
		this._attack_damage = 1;
		this._moxie = 0;
		this._health.current = 100;
		this._health.max = 100;
		this._inventory = {};
	}

	get moxie() {
		return this._moxie;
	}

	set moxie(value) {
		this._moxie = parseInt(value);
	}

	attack() {
		return {
			damage: this._attack_damage
		};
	}

	defend(attack_data) {
		attack_data.damage = attack_data.damage || 0;
		if (attack_data.damage > 0) {
			this._health.current -= attack_data.damage;
		}

		this.render();
	}

	render() {
		$('#moxie_count').html(this._moxie);
	}
}