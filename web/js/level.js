class Level {
	constructor(data) {
		this.init();
		this.load(data);
	}

	init() {
		this._id = 0;
		this._monsters = [];
		this._current_monster = 0;
		this._shop = {};
	} 

	load(data) {
		this._id = 1;
		this._monsters = [
			new Monster(12),
			new Monster(13)
		];
		this._current_monster = 0;
		this._shop = new Shop(this._id);
	}

	next() {
		$('#next_level').unbind('click');

		this._current_monster++;

		//if we have another monster to fight, continue on
		if (this._current_monster in this._monsters) {
			this.get_monster().render();
			return;
		}

		//if not, let's go to the next level
		this.load(2);
		this.render();
	}

	get_monster() {
		if (!this._current_monster in this._monsters) {
			return false;
		}

		return this._monsters[this._current_monster];
	}

	get shop() {
		return this._shop;
	}

	render() {
		this.get_monster().render();
		this._shop.render();
	}
}