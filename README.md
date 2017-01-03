clickRPG

click/type to attack monsters

monsters grant moxie

use moxie to buy/upgrade weapon, helm, armour, boots, amulet

==========================================================
class plan
==========================================================

monster {
	stats
	get() - via ajax
	set() - from level
	update() - render current state
	attack()
	defend()
}

player {
	update() - render current state
	inventory {
		update()
		add(slot, item)
	}
}

item {
	stats
}

level {
	get() - via ajax
	update()
	next()
}