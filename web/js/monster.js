class Monster {
	constructor(id) {
		this.init();
		this.set_id(id);
	}

	init() {
		this._id = 0;
		this._name = '';
		this._attack_damage = 0;
		this._health = {
			current: 0,
			max: 0
		};
		this._bounty = {};
	} 

	load() {
		this._name = 'MONSTER X' + this._id;
		this._attack_damage = 0;
		this._health.current = 4;
		this._health.max = 4;
		this._bounty = {
			moxie: 10
		}
	}

	get bounty() {
		return this._bounty;
	}

	set_id(id) {
		this._id = id;
		this.load();
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

		//monster is dead
		if (this._health.current <= 0) {
			this._health.current = 0;

			//TODO change to something like monster.is_dead() and set this outside the class, maybe in a treasure class
			$('#treasure_moxie').html(this._bounty.moxie);
		}

		this.render();
	}

	render() {
		if (this._health.current <= 0) {
			$('#monster_health_display').hide();
			$('#monster_dead').show();

			show_treasure();
		} else {
			$('#monster_dead').hide();
			$('#monster_name').html(this._name);
			$('#monster_health_display').show();
			$('#monster_health_current').html(this._health.current);
			$('#monster_health_max').html(this._health.max);
		}

		$('#treasure_box').hide();
		$('#monster_box').show();
	}
}