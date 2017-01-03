var player,
	level;

$(function() {
	init();
});

function init() {
	player = new Player(1);
	player.render();

	level = new Level(1);
	level.render();

	$('#moxie_booster').click(function() {
		level.get_monster().defend(player.attack());
	});
}

function show_treasure() {
	if ($('#treasure_box').is(':visible')) {
		return;
	}

	$('#monster_box').delay(1000).fadeOut(function() {
		var current_monster = level.get_monster();
		if (!current_monster) {
			return false;
		}

		$('#treasure_box').fadeIn();

		player.moxie += current_monster.bounty.moxie;
		player.render();

		$('#next_level').click(function() {
			level.next();
		});
	});
}

function get_random_int(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}