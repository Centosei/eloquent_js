const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Greta's House", "Greta's House-Farm",
    "Greta's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall",
];

function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
	if (graph[from] == null) {
	    graph[from] = [to];
	} else {
	    graph[from].push(to);
	}
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
	addEdge(from, to);
	addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    constructor(place, parcels) {
	this.place = place;
	this.parcels = parcels;
    }

    move(destination) {
	if (!roadGraph[this.place].includes(destination)) {
	    return this;
	} else {
	    let parcels = this.parcels.map(p => {
		if (p.place != this.place) return p;
		return {place: destination, address: p.address};
	    }).filter(p => p.place != p.address);
	    return new VillageState(destination, parcels);
	}
    }
}

let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
);
let next = first.move("Alice's House");

console.log(first.place);
console.log(first.parcels);
console.log(next.place);
console.log(next.parcels);

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
	if (state.parcels.length == 0) {
	    // console.log(`Done in ${turn} turns`);
	    return turn;
	    break;
	}
	let action = robot(state, memory);
	state = state.move(action.direction);
	memory = action.memory;
	// console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return {direction: randomPick(roadGraph[state.place])};
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
	let address = randomPick(Object.keys(roadGraph));
	let place;
	do {
	    place = randomPick(Object.keys(roadGraph));
	} while (place == address);
	parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels);
};

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Greta's House", "Shop", "Greta's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
	memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

function findRoute(graph, from, to) {
    let work = [{at: from, route: []}];
    for (let i = 0; i < work.length; i++) {
	let {at, route} = work[i];
	for (let place of graph[at]) {
	    if (place == to) return route.concat(place);
	    if (!work.some(w => w.at == place)) {
		work.push({at: place, route: route.concat(place)});
	    }
	}
    }
}

function goalOrientedRobot({place, parcels}, route) {
    if (route.length == 0) {
	let parcel = parcels[0];
	if (parcel.place != place) {
	    route = findRoute(roadGraph, place, parcel.place);
	} else {
	    route = findRoute(roadGraph, place, parcel.address);
	}
    }
    return {direction: route[0], memory: route.slice(1)};
}

// exercise
// measuring a robot
function compareRobots(robot1, robot2) {
    let count1 = count2 = 0;
    let num = 10000;
    for (let i = 0; i < num; i++) {
	const task = VillageState.random();
	let memory1 = memory2 = [];
	count1 += runRobot(task, robot1, memory1);
	count2 += runRobot(task, robot2, memory2);
    }
    console.log(`robot1: ${count1 / num} & robot2: ${count2 / num}`);
};

compareRobots(routeRobot, goalOrientedRobot);

// robot efficiency
function goalOrientedRobotV2({place, parcels}, route) {
    if (route.length == 0) {
	let route_eff = [];
	for (let parcel of parcels) {
	    if (parcel.place != place) {
		route = findRoute(roadGraph, place, parcel.place);
	    } else {
		route = findRoute(roadGraph, place, parcel.address);
	    }
	    if ((route_eff.length == 0) ||
		(route_eff.length > route.length)) {
		route_eff = route;
	    }
	}
    }
    return {direction: route[0], memory: route.slice(1)};
}

compareRobots(goalOrientedRobot, goalOrientedRobotV2);

// persistent group


